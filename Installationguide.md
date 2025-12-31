# Yuvalink Installation Guide

Follow this guide to set up Yuvalink on your local machine.
For Setup guide video tutorial go to [YUVALINK Setup Guide](https://drive.google.com/file/d/1UQFn9Y02623RMo59J_j3CHRN7Nq_kgZE/view?usp=drivesdk)

## Prerequisites
   * [Node.js](https://nodejs.org/en/download)  (latest LTS version)   
   * [ReactJS](https://react.dev/learn/installation) (any recent version)
   * [Adonis](https://adonisjs.com/)  (node version should be 20 or higher)
   * [Git](https://git-scm.com)(any recent version)
   * [Database(PostgreSQL)](https://www.postgresql.org/download/) (14+)'
## Architecture Overview
```
 Frontend                                Backend
    |-->React+Vite                          |-->AdonisJS 
    |-->Tailwind CSS                        |-->VineJS
    |-->Bootstrap                           |-->JWT Access Tokens
    |-->React Router DOM                    |-->Lucid ORM
    |-->Lucide React Icons                  |-->PostgreSQL
    |-->WebSocket Client                    |-->WebSockets
```
## Quick Start

1. **Clone the repository**
      ```sh
      git clone https://github.com/Saurabhgit120/YUVALINK.git
      cd YUVALINK
      ```

2. **Navigate to backend Folder**
      ```sh
       cd backend
      ```
3. **Install dependencies**
     ```sh
     npm install
     ```
4. **Setup enviorment variables**
    ```
    ## copy the example enviorment file
    cp env.example .env
    ## Edit .env with your API keys and configuration
    nano .env ## or choose your preferred editor
    
    ```
#### Generate App Key:
    ```
    node ace generate:key
    ```
5. Enable PostGIS
    ```
    CREATE Extension postgis;
    ```
6. **Run Databse Migrations**
    ```sh
      node ace migration:run
    ```
7. **Start Backend Server**
    ```sh
   npm run dev
    ```
8. **Navigate to Frontend folder**
    ```
    cd frontend
    ```
9. **Install React**
    ```
    ## React core libraries
    # react => To build UI Components
    # react-dom => To render React components on Browser
    npm install react react-dom
    ```
10. **Install Vite**
    ```
    # Vite (Development & Build Tool)
    # Vite => Fast development server + optimized production build
    npm install -D vite
    ```
11. **Install Tailwind CSS**
    ```
    npm install -D tailwindcss
    ```
12. **Install Bootstrap icons**
    ```
    npm install bootstrap-icons
    ```
## Usage 
 1. **React + React DOM**
      ```
         ## main.jsx
         import React from "react"; 
         import ReactDOM from "react-dom/client";
         import App from "./App";
         import "bootstrap/dist/css/bootstrap.min.css"; 
         import "bootstrap-icons/font/bootstrap-icons.css";
         import "./index.css";
         ReactDOM.createRoot(document.getElementById("root")).render(
              App/>
              );
      ```
 2. **Vite.config.js**
      ```
         ## vite.config.js 
         import {defineConfig} from "vite";
        import react from "@vitejs/plugin-react";
        export default defineConfig({
            plugins: [react()],
        });
      ```
3. **Tailwind CSS**
      ```
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
      ```
      ```
          /** @type {import('tailwindcss').Config} */
          module.exports = {
            content: [
              "./index.html",
              "./src/**/*.{js,jsx,ts,tsx}"
            ],
            theme: {
              extend: {},
            },
            plugins: [],
          }
      ```
      ```
          ## Example usage in component
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Activate
          </button>
      ```
4. **Bootstrap Icons**
      ```
          import "bootstrap-icons/font/bootstrap-icons.css";
      ```
      ```
          <i className="bi bi-chat-dots-fill text-xl"></i>
      ```
## Environment Variables  
create a '.env' file in the project root with the following vaiables:
#### Required Variables
  ```env
              NODE_ENV=development
              PORT=3333
              APP_KEY=base64:GENERATE_KEY
              HOST=0.0.0.0
              
              DB_CONNECTION=pg
              PG_HOST=127.0.0.1
              PG_PORT=5432
              PG_USER=postgres
              PG_PASSWORD=password
              PG_DB_NAME=disaster_db
  ```
## Database Setup
1. Users Table
```
table.uuid('id').primary()
table.string('name').notNullable()
table.string('email').unique().notNullable()
table.string('password').notNullable()
table.enum('role', ['admin', 'volunteer']).notNullable()
table.timestamps(true)
```
2. Access Tokens Table
 ```
table.increments('id')
table.uuid('user_id').references('users.id').onDelete('CASCADE')
table.string('token', 64).notNullable()
table.timestamp('expires_at')
table.timestamps(true)
```
3. Volunteers Table
```
table.uuid('id').primary()
table.uuid('user_id').references('users.id').onDelete('CASCADE')
table.string('phone')
table.string('skills')
table.boolean('available').defaultTo(true)
table.timestamps(true)
```
4. Disasters Table (PostGIS)
```
table.uuid('id').primary()
table.string('title').notNullable()
table.text('description')
table.specificType('location', 'geography(Point, 4326)').notNullable()
table.timestamp('starts_at')
table.timestamp('ends_at')
table.timestamps(true)
```
5. Appointments Table
Used to:
Assign 1 admin
Assign up to 15 volunteers
Create chat 
```
table.uuid('id').primary()
table.uuid('admin_id').references('users.id')
table.uuid('disaster_id').references('disasters.id')
table.integer('max_volunteers').defaultTo(15)
table.timestamps(true)
```
6. Appointment Volunteers (Pivot Table)
```
table.increments('id')
table.uuid('appointment_id').references('appointments.id').onDelete('CASCADE')
table.uuid('volunteer_id').references('volunteers.id').onDelete('CASCADE')
table.unique(['appointment_id', 'volunteer_id'])
```
## Models (Lucid ORM)
1. User Model
```
export default class User extends BaseModel {
  @column({ isPrimary: true }) id: string
  @column() name: string
  @column() email: string
  @column({ serializeAs: null }) password: string
  @column() role: 'admin' | 'volunteer'
}
```
2. Volunteer Model
```
export default class Volunteer extends BaseModel {
  @column({ isPrimary: true }) id: string
  @column() userId: string
  @column() skills: string
  @column() available: boolean
}
```
3. Disaster Model
```
export default class Disaster extends BaseModel {
  @column({ isPrimary: true }) id: string
  @column() title: string
  @column() description: string
  @column() location: any
}
````
4. Appointment Model
```
export default class Appointment extends BaseModel {
  @column({ isPrimary: true }) id: string
  @column() adminId: string
  @column() disasterId: string

  @manyToMany(() => Volunteer)
  volunteers: ManyToMany<typeof Volunteer>
}
```
5. Validation (VineJS)
   Register User Validator
```
export const registerValidator = vine.compile(
  vine.object({
    name: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(8),
    role: vine.enum(['admin', 'volunteer']),
  })
)
```
Create Disaster Validator
```
export const createDisasterValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(3),
    description: vine.string().optional(),
    latitude: vine.number(),
    longitude: vine.number(),
  })
)
```
## RESTful APIs

Authentication
```         
Method	Endpoint	Description
POST/auth/register	Register use
POST/auth/login 	Login
POST/auth/logout	Logout
```
Disasters
```
Method	Endpoint	Description
POST	/disasters	Create disaster (admin)
GET	/disasters	List disasters
GET	/disasters/:id	Disaster details
```
Appointments
```
Method	Endpoint  Description
POST/appointments	        Create appointment
POST/appointments/:id/join	Volunteer joins
GET/appointments/:id	    Appointment details
```
WebSockets – Chat Rooms
```
Each appointment creates one chat room
Room name: appointment:{appointmentId}
Only assigned users can connect
Maximum 15 volunteers per admin
```
```
ws.on('connection', (socket) => {
  socket.join(`appointment:${appointmentId}`)
})
```
## Project Structure
```
YuvaLinkFrontEnd/
    |-->src
        |-->components
            |-->ChatRoom.jsx
            |-->NewsFeed.jsx
            |-->Sidebar.jsx
            |-->statspanel.jsx
            |-->ActivityHistory.jsx
            |-->TaskCard.jsx
            |-->TaskSection.jsx
            |-->TeamDetails.jsx
            |-->Profile.jsx
        |-->pages
            |-->AdminDashboard.jsx
            |-->volunteer.jsx
        |-->Styles
            |-->admintailwind.css
            |-->chatroom.css
            |-->newsfeed.css
            |-->stats.css
            |-->Activity.css
            |-->tasks.css
            |-->profile.css
            |-->team.css
        |-->App.jsx
        |-->index.css
        |-->main.jsx
   |-->.env
   |-->index.html
   |-->package-lock.json
   |-->package.json
   |-->postcss.config.cjs
   |-->tailwind.config.js
   |-->vite.config.js
   |-->node_modules
   |-->public
|-->assets
|-->YuvaLinkReadme.md
|-->Installationguide.md
```
```

YuvaLinkBackend/
├── .adonisrc.json          
├── .env                    
├── .gitignore
├── package.json
├── ace                     
├── build/              
├── contracts/              
│   └── contracts.ts
├── start/                  
│   ├── kernel.ts           
│   ├── routes.ts       
├── app/                    
│   ├── Controllers/Http/  
│   │   └── UserController.ts
│   ├── Models/             
│   │   └── User.ts
│   ├── Middleware/         
│   │   └── Auth.ts
│   ├── Services/           
│   ├── Validators/         
│   │   └── CreateUserValidator.ts
│   ├── Exceptions/         
│   └── Repositories/       
├── database/               
│   ├── migrations/         
│   ├── seeds/              
│   └── factories/          
├── resources/              
│   ├── views/
│   └── public/
├── tests/                  
│   ├── feature/
│   └── unit/
├── tsconfig.json           
└── README.md
```



         
     
       



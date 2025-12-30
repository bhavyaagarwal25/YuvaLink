# Yuvalink Installation Guide

Follow this guide to set up yuvalink on your local machine.
For Setup guide video tutorial go to [YUVALINK Setup Guide](https://drive.google.com/file/d/1UQFn9Y02623RMo59J_j3CHRN7Nq_kgZE/view?usp=drivesdk)

## Prerequisites

-   [Node.js](https://nodejs.org/en/download)  (latest LTS version)
-   [ReactJS](https://react.dev/learn/installation) (any recent version)
-   [adonis](https://adonisjs.com/)  (node version should be 20 or higher)
-   [git](https://git-scm.com)(any recent version)
-   [database](https://www.postgresql.org/download/) (any recent version)'

-   ## Quick Start

-   1. **Clone the repository**
    ```sh
     git clone https://github.com/Saurabhgit120/YUVALINK.git
     cd YUVALINK
    ```

-   2. **Navigate to backend Folder**
      ```sh
       cd backend
       ```
-   3. **Install dependencies**
     ```sh
     npm install
     ```

-    4. **Environment Configuration**
     ```sh
     cp .env.examplw .env
     ```
-    5. **Run Databse Migrations**
      ```sh
      node ace migration:run
      ```
-    6. **Start Backend Server**
       ```sh
         npm run dev
        ```

## Environment Variables  
create a '.env' file in the project root with the following vaiables:

## Required Variables
```env
#

         
     
       



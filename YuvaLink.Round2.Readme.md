<div align="center">
 <span>
 <img src="logo.png" alt="YuvaLink" width="150" height="auto" />
</span>
</div>

# YuvaLink
here is our deployed website

## Problem Statement
In Disaster situations,information about the incident usually reaches authorities through traditional ways helplines and control rooms.
However,the Real- challenge begins after that-Coordinating volunteers efficiently and safely.
```
Disaster Occurs
      |-->Public informs authorities via helplines/control rooms
      |-->Authorities have volunteer support but lack real-time coordination tools
      |-->unverified volunteers
      |-->Resource duplication in some areas
      |-->Everything becomes very chaotic
```
## Solution Overview
* Dual-dashboard architecture separates disaster control (Admin) from execution (Volunteers), ensuring fast and structured response.
* Automated disaster detection using News API combined with human verification, preventing false activations.
* Live location–based volunteer filtering enables instant identification of nearest, verified responders.

* Smart task allocation system with accept/decline logic and abuse prevention through decline limits.

* Automatic team formation with capped team size and dynamic leadership assignment.

* Controlled real-time communication allowing only authorized team leads to interact with admins, reducing chaos during emergencies.
  
## Repository Link
* [YuvaLink](https://github.com/bhavyaagarwal25/YuvaLink)
* [YuvaLinkFrontEnd](https://github.com/Ayushmangit/yuvalinkFrontendHack.git)
* [YuvaLinkBackEnd](https://github.com/Ayushmangit/yuvalinkBackend)

## System Architecture

![YuvaLink System Architecture](architecture.png)

### Architecture Overview
YuvaLink is designed as a scalable disaster response and volunteer coordination system.
The architecture follows a layered approach to ensure reliability, real-time coordination and controlled communication during emergency situations.

### Frontend Layer
Frontend is developed using React and Tailwind CSS and provides separate interfaces for different roles:

-**Volunteer Interface**
- View nearby disaster incidents
- Receive and respond to task assignments
- Track task status in real time

-**Admin Interface**
- Verify and activate disaster events
- Create and manages tasks
- Monitors volunteer participation
- Communicate with designated team leaders

This role based separation reduces chaos and ensures structures coordination during emergency 
situations.

### API Communciation Layer

All frontend interactions communicate with the backend through secure REST APIs.
It ensures :
- Stateless communciation
- Secure request handling
- Clean separation between UI and backend logic

### Backend Application Layer

The backend is built using Node.js with AdonisJS and is responsible for all core system logic:

**Authentication & Authorization**
- JWT - based authentication
- Role-based access control for admin and volunteers
  
**Disaster Detection & Verification**
- Automatic incident from News API
- Admin verifies these incidents to prevent false alerts

**Task Allocation &  Team Formation**
-  Geo-location based volunteer matching
-  Smart task allocation with accept/decline tasks
-  Automatic team creation with team size of 15
-  Dynamic team leader assignment (Tier2)

### Data Layer

YuvaLink uses PostgreSQL with PostGIS to efficiently manage structured data:

- Incident data (location, severity, status)
- Volunteer profile and verification status
- Task assignments and team information
- Analytics and operational logs

### Scalability & Future Growth

The system is designed to scale as user demand increases:

- Redis caching for frequently accesed data
- WebSocket based real time updates
- Load Balancers for traffic distribution
- Microservices architecture for independent scaling of critical services

This architecture ensures YuvaLink remains reliable, scalable and efficient even under high traffic and emergency conditions.


## System Flow 

### (Admin Interface)

### 1. Live Disaster Detection
The system fetches real-time disaster-related news using News API.  
Admins review incoming alerts before taking any action.

![Live Disaster Feeds](system-flow/live_disaster_feeds.png)

### 2. Incident Verification & Activation
Admins manually verify selected incidents and activate them to avoid false or duplicate disaster responses.

![Activate Incident](system-flow/activate_incident.png)

### 3. Active Incident Management
Once activated, incidents are listed on the admin dashboard where their status and city-wise deployment can be monitored.

![Active Incidents](system-flow/active_incidents.png)

### 4. Volunteer Availability & Skill View
Admins can view verified volunteers along with their city, skills, and current status to ensure proper task allocation.

![Total Volunteers](system-flow/total_volunteers.png)




## Impact & Usefulness

YuvaLink helps authorities manage volunteers in a faster, safer and more organized way during disaster situations.

### Real-World Impact

- **Faster help during disaster**
  YuvaLink assigns nearby verified volunteers to tasks in real time.
  This helps to reduce delays and ensures that help reaches affected people quickly.

- **Safe and Trusted Volunteers**
  All volunteers are verified based on identity, skills and availability.
  This prevents fake or untrained volunteers from participating in emergencies.

- **Better Use of Resources**
  Tasks are allocated based on volunteer skills and location.
  This avoids duplication of work and ensures all areas receive proper support.

- **Clear and Controlled Communication**
  Only team leaders are allowed to communicate with admins.
  This reduces confusion, misinformation and chaos during emergencies.


### Who benefits from YuvaLink

**Authorities & NGOs**
- Can see volunteer availability in real time
- Can assign tasks in structured way
- Can monitor progress easily

**Volunteers**
- Get tasks that match their skills
- Work in organized teams with clear roles
- Participate safely during emergencies

**Affected People**
- Receive faster and more organized help
- Reduced response time can help ssave lives

Overall, YuvaLink turns an unorganized disaster response process into a **structured, reliable and efficient system** where every minute matters.

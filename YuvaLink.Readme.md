<div align="center">
 <span>
 <img src="logo.png" alt="YuvaLink" width="150" height="auto" />
</span>
</div>

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
# YuvaLink

YuvaLink bridges the gap between disaster information,available volunteers and coordination systems through :
  1. Continuously monitors real-time disaster-related information through (News API integration)
  2. Real-time volunteer Matching(Location-based filtering)
  3. Structured Task Allocation (Accept/Decline system)
  4. Organized Team Formation(Automated teams with designated leads)
  5. Controlled Communication(Chat Rooms)

It refers to youth-focused platform and intiatives that aim to connect young and civilian volunteers.

For Better Understanding here is our [**Presentation**](https://drive.google.com/file/d/1T0k9H3qrIIWX9ZomxgQ10ZlVCMFme_88/view?usp=sharing)
### Why Existing Solutions Fail ?
Most platforms lack real-time features:
1.  Volunteers( [VolunteerMatch](https://www.idealist.org/volunteermatch), [UNV](https://www.unv.org/) ) -> slow matching,no emergency focus,general volunteer system,not disaster-specific
2.  Alert systems ( Sachet, MyGov ) -> one-way communication only
3.  Social Media ( WhatsApp, Twitter) -> unverified info,no task management
4.  Disaster apps (Disaster Alert) -> info only , no coordination 
```
Disaster Occurs
      |---> Public informs authorities
      |---> Authorities have volunteers 
            but no structured system
      |---> Wrong volunteer reach to the
            disaster area
      |---> Poor cordination

Authorities Face difficulty in:
      |---> Identifying nearby volunteers
      |---> Communication updates instantly
      |---> Maintaining safety and control

```
### What we identify ?
```
Information exists   -> But scattered across platforms
Resource exist       -> But not optimally utilized
Volunteer exist      -> But no structured deployment system 
Effective Coordination is missing
```
### How we Solve this ?
### Two Dashboard System
 * Admin Dashboard -> Disaster Monitoring & coordination control
 * Volunteer Dashboard -> Task management & communication
### Disaster detection & Incident Creation :
* Disaster-information reaches the sytsem in two ways:

    1. News API Integeration (floods,earthquakes,landslides,etc)
    2. Manual incident creation by Admin
 * Admin verifies the information before activating
```
Incident appear on system by News Api/Manual Input
         |--->Admin verify the incident
         |--->Incident activated
```  
### Real - Time Volunteer identification (Location-Based) :
* Dynamic volunteer filtering by current location
* System checks volunteers live location
* Only volunteers within the affected region are considered
* First priority is Nearby verified volunteers
```
Incident identified
        |--->Check Live Volunteer Locations
                   |--->Filter Volunteers in Affected Region
                             |---> Priority: Nearest Verified Volunteers
```
### Real - Time Task Allocation to Volunteers : 
* Instant task notification system
* Volunteers can Accept or Decline 
* Maximum 3 declines allowed
* Continuous decline results in permanent blocking 
```
Incident indentified
      |---> Task Assigned to Volunteer
      |---> Volunteer get alert
      |---> Accept/Decline
```
### Instant Team Formation After Allocation :
* Once Volunteers accept tasks:

  1. System automatically creates teams
  2. Each team has maximum 15 volunteers
* Admin selects one Team lead
### Controlled Real-Time Communication :
* Real- time communication is enabled only:

  1. After volunteer assignment            
  2. Admin convey message to volunteer through chat rooms.                             
  3. Only Team lead is allowed to raise the  structured requests ADMIN responds accordingly

## Flow of YUVALINK
![Flow](flow.png)

## Tech Stack
- **[ReactJS]** – A powerful JavaScript library for building fast, interactive user interfaces.
- **[TailwindCSS]** – A utility-first CSS framework for rapidly building modern, responsive designs.
- **[Bootstrap]** – A popular UI framework providing pre-built components and responsive layouts.
- **[Redux]** – State management library for predictable and centralized application state handling.
- **[NodeJS]** – Event-driven, non-blocking I/O runtime for building scalable backend services.
- **[AdonisJS]** – A fast and fully-featured Node.js framework for building robust server-side applications.
- **[PostgreSQL]** – A powerful, open-source relational database for secure and reliable data storage.
- **[Lucid ORM]** – An elegant ORM for AdonisJS to interact with the database using JavaScript models.
- **[VineJS]** – A modern validation library for validating API requests and user inputs.
- **[REST APIs]** – Enables seamless communication between frontend and backend services.
- **[JWT Authentication]** – Secure user authentication and role-based access control.
- **[Git & GitHub]** – Version control and collaboration tools for efficient development.

![Flow](flow2.png)

## Flow with Tech
![Flow](flow3.png)
## Getting Started
YuvaLink uses modern web technologies with real-time capabilites,making setup Straightforward compared to complex AI architectures.Our stack ensures reliability,scalability,and developer productivity.
### Quick Start

 1. Clone the Repository
 2. Follow our comprehensive [Installation Guide](/Installationguide.md)
 3. Run the deployment enviorment

For detailed set up instructions and deployment guides, please refer to our [Installation Guide](/Installationguide.md)
### Contributions
  * **Bhavya Agarwal** => Desgin Admin Dashboard(Frontend) with News Integeration
  * **Anushka Negi** =>Design Volunteer Dashboard(frontend) with webSockets Integeration
  *  **Saurabh Singh** => Handle Database (Lucid ORM) + Volunteer verification
  *  **Ayushman Chauhan** => Backend(ALL Integeration + User Auth)
## Prototype
 * For Demo purpose only we have done backend integeration in user Auth [LandingPage](https://drive.google.com/file/d/1o8P14dIMkjN5666joIhA2HOEmXBjTQlV/view?usp=sharing)
 * For Better Understanding here is our [AdminDashBoard](https://drive.google.com/file/d/1Bq2kA70YmX_UDSljL3beI3itCxff6oWX/view?usp=sharing) 
   
 * For Better Understanding here is our  [VolunteerDashBoard](https://drive.google.com/file/d/1Bq2kA70YmX_UDSljL3beI3itCxff6oWX/view?usp=sharing)

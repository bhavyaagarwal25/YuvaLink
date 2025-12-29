<div align="center">
 <span>
 <img src="logo.png" alt="YuvaLink" width="150" height="auto" />
</span>
</div>

## Problem Statement
In Disastar situations,information about the incident usually reaches authorities through tradional ways helplines and control rooms.
However,the Real- challenge begins after that-Coordinating volunteers efficiently and safely.
```
Disaster Occurs
      |-->Public informs authorities via helplines/control rooms
      |-->Authorities have volunteer support but lack real-time coordination tools
      |-->unverified volunteers
      |-->Resource duplication in some areas
      |-->Everything becomed very chaotic
```
# YuvaLink

YuvaLink bridges the gap between disaster information,available volunteers and coordination systems through :
  1. Continuously monitors real-time disaster-related information through (News API inttegeration)
  2. Real-time volunteer Matching(Location-based filtering)
  3. Structured Task Aloocation (Accept/Decline system)
  4. Organized Team Formation(Automated teams with designated leads)
  5. Controlled Communication(Chat Rooms)

It refers to youth-focused platform and intiatives that aim to connect young and civilian volunteers.

For Better Understanding here is our [**Presentation**](https://docs.google.com/presentation/d/1qgxC8A8gGHOrgrNvrWlTn6GrzoLbNCwF/edit?usp=sharing&ouid=103690335248498847681&rtpof=true&sd=true)
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
                             |---> Priorit: Nearest Verified Volunteers
```
### Real - Time Task Allocation to Volunteers : 
* Instant task notification system
* Volunteers can Accept or Decline 
* Maximum 3 declines allowed
* Continuous decline results in permanent blocking 
```
Incident indetified
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
![Flow](flow2.png)

## Flow with Tech
![Flow](flow3.png)
## Getting Started
YuvaLink uses modern web technologies with real-time capabilites,making setup Straightforward compared to complex AI architectures.Our stack ensures reliability,scaliability,and developer productivity.
### Quick Start
 1. Clone the Repository
 2. Follow our comprehensive [Installation Guide](/Installation.md)
 3. Run the deployment enviorment
For detailed set up instructions and deployment guides, please refer to our [Installation Guide] (/Installation.md)

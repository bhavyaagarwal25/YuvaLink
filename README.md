# YuvaLink

There is no safe, structured, and real-time system to coordinate civilian volunteers with authorities after a disaster is verified.
### Why should I make it ?
In Disastar situations,information about the incident usually reaches authorities through helplines and control rooms.
However,the Real- challenge begins after that-Coordinating volunteers efficiently and safely.

### Why existing solution fail ?
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
### What we identify?
```
Information exists
Resource exist
Volunteer exist but EffECTIVE USE is missing 
So,WE ARE HERE TO FILL THIS GAP.
```
### How we Solve this?
We have 2 Dashboard one for Admin and another one for volunteers.
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
Incident identified --> Search for Nearby volunteer
                                     
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




### Insta

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

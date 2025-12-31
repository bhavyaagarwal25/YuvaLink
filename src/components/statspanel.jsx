import "../ui/stats.css";
export default function StatsPanel(){
    return(
         <div className="stats-wrapper">
            <h3 className="stats-heading" >Incident Stats</h3>
            <div className ="stats-grid">
                <div className="stats-card">
                    <p className="stats-label">Total Volunteers</p>
                    <p className ="stats-value">128</p>
                </div>
                <div className ="stats-card">
                    <p className="stats-label">Pending Request</p>
                    <p className="stats-value">80</p>
                </div>
            </div>
           <div className="stats-grid">
            <div className="stats-card">
               <p className="stats-label">Active incidents</p>
               <p className="stats-value">20</p>
            </div>
             <div className ="stats-card">
                    <p className="stats-label">Assigned volunteer</p>
                    <p className="stats-value">40</p>
                </div>

           </div>



         </div>
    );
}
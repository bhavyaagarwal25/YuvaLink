import "../ui/news.css";
import {useEffect,useState} from "react";
        export default function NewsFeed({onViewAll}){
            const [news,setNews]=useState([]);
            const[loading,setLoading]=useState(true);
            useEffect(()=>{
                fetch(
  "https://newsapi.org/v2/everything?q=(India OR Assam OR Uttarakhand OR Bihar OR Kerala OR Odisha) AND (earthquake OR flood OR cyclone OR landslide)&language=en&sortBy=publishedAt&apiKey=60b5954d65694e3182b0aeffa60036e6"
)

                .then((res)=>res.json())
                .then((data)=>{
                    setNews(data.articles || []);
                    setLoading(false);
                })
                .catch((err)=>{
                    console.error("News API error:",err);
                    setLoading(false);
                });
            },[]);
            if(loading){
                return <p>Loading Live Disaste feed...</p>
            }
            return( 
                <div className="feed-section">
                    <div className="feed-header">
                            <h3>Live Disaster feed</h3>
                   
                    <button onClick={onViewAll}>View All</button>
                    </div>
                    <div className="live-feed-row">
                        {news.slice(0,5).map((item,i)=>(
                            <div key={i} className="feed-card">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <span>
                                    {item.source.name}.{" "}
                                    {new Date(item.publishedAt).toLocaleTimeString()}
                                    </span>
                                </div>))}
                        </div>
                         </div>
        //         <div className ="feed-section">
        //             <div className="feed-header">
        //                 <h3 className="feed-title">Live disaster Feed</h3>
        //                 <button type="button" className="view-all-btn"
        //                 onClick={() => 
        //                { console.log("view all clicked");
        //                  onViewAll&& onViewAll();
        //                }}> View All

        //                 </button>
        //             </div>
        //              <div className="live-feed-row">
        // <div className="feed-card">
        //     <h4 className="feed-title">Flood Alert -Assam</h4>
        //     <p className="feed-desc">Heavy rainfall reported in low-lying area</p>
        //     <span className="feed-time">NDMA * 2 mins ago</span>
        //      <div className="feed-action">
        //     <button className="activate-btn">Activate</button>
        // </div>
        // </div>
        // <div className= "feed-card">
        //     <h4 className="feed-title">Earthquake-Uttarakhand</h4>
        //     <p className="feed-desc">Magnitude 5.1 earthquake detected</p>
        //     <span className="feed-time">USGS * 6 mins ago</span>
        //      <div className="feed-action">
        //     <button className="activate-btn">Activate</button>
        // </div>
        // </div>
        // <div className= "feed-card">
        //     <h4 className="feed-title">Earthquake-Uttarakhand</h4>
        //     <p className="feed-desc">Magnitude 5.1 earthquake detected</p>
        //     <span className="feed-time">USGS * 6 mins ago</span>
        //      <div className="feed-action">
        //     <button className="activate-btn">Activate</button>
        // </div>
        // </div>
        //  <div className= "feed-card">
        //     <h4 className="feed-title">Earthquake-Uttarakhand</h4>
        //     <p className="feed-desc">Magnitude 5.1 earthquake detected</p>
        //     <span className="feed-time">USGS * 6 mins ago</span>
        //      <div className="feed-action">
        //     <button className="activate-btn">Activate</button>
        // </div>
        // </div>
        //  <div className= "feed-card">
        //     <h4 className="feed-title">Earthquake-Uttarakhand</h4>
        //     <p className="feed-desc">Magnitude 5.1 earthquake detected</p>
        //     <span className="feed-time">USGS * 6 mins ago</span>
        //      <div className="feed-action">
        //     <button className="activate-btn">Activate</button>
        // </div>
        // </div>
        // </div>
        // </div>
               
            );
        }
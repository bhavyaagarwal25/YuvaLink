import {useEffect,useRef,useState} from "react"
import Sidebar from "../components/Sidebar";
import Statspanel from "../components/statspanel";
import ChatRoom from "../components/chatroom";
import NewsFeed from "../components/NewsFeed";
import "../ui/dashboard.css";
import "../ui/chatroom.css";
import "../ui/news.css";
import "../ui/stats.css";
export default function AdminDashboard(){
    const images = [
        "/d1.jpg","/d3.jpg","/d4.jpg","/d5.jpg","/d6.jpg"
    ];
    const[index,setIndex]=useState(0);
    const [activeBg, setActiveBg] = useState(images[0]);
    const [sidebarOpen,setSidebarOpen]=useState(false);
    const [showAllFeed,setShowAllFeed] = useState(false);
    const [chatOpen,setChatOpen]=useState(false);
    // const cardRefs = useRef([]);
    const next =()=>{
        setIndex((prev) =>{
          const newIndex = (prev +1)% images.length;
        setActiveBg(images[newIndex]);
        return newIndex;
        })
        
    };
    const prev=()=>{
        setIndex((index) =>{
        const newIndex =index ===0?images.length -1:index -1;
        setIndex(newIndex);
        setActiveBg (images[newIndex]); 
        return newIndex;});
    };
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries )=> {
    //             entries.forEach((entry) => {
    //                 if(entry.isIntersecting){
    //                      const index = cardRefs.current.indexOf(entry.target);
    //                      if(index !== -1){
    //                         setActiveBg(images[index])
    //                      }
    //                     }
    //                 }
    //             );
    //         },
    //         {threshold: 0.6}
    //     );
    //         cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    //         return () => { observer.disconnect(); };
    //     }, []);
    return (
        <>
    <div className ="heroine"
    style={{backgroundImage: `url(${activeBg})`}}>
        <div className ="heroine-overlay"></div>
        <button className="hamburger-btn"
         onClick={() => {
         console.log("clicked")
         setSidebarOpen(true)}}>
            <i className ="bi bi-list fs-1 "></i>
            </button>
        <div className="heroine-content">
            <h1 className="text-xl font-bold text-white justify-center">Yuvalink</h1></div></div>
        <div className="hero-bottom"></div> 
        <div className ="white-overlay shadow-2xl rounded-2xl">
            <div className="carousel-card">
                <button className="arrow left" onClick={prev}>
                     <i className="bi bi-*-left"></i>
                </button>
                <img src={images[index]}/>
                <button className="arrow right" onClick={next}>
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
    {/* <div classNAme="live-feed-header">
        <h3>Live Disaster Feed</h3>
        <button className="view-all-btn"
        onClick={() => setShowAllFeed(true)}>
            View All
        </button>
    </div> */}
    <NewsFeed onViewAll={()=>setShowAllFeed(true)}/>   
        {/* <div className="image-card-section">
            {images.map((img, index) => (
                <div key ={index}
                ref ={(el) => (cardRefs.current[index] = el)}
                className ="image-card"
                    onClick={() => setActiveBg (img)}>
                    <img src={img} alt="backgriund option"/>
                    </div>
            ))}
                    
        </div> */}
        <div className="bottom-grid">
         <Statspanel/>
        <ChatRoom
        expanded={chatOpen}
        onExpand={()=>setChatOpen(true)}
        onClose={()=>setChatOpen(false)}/>
        </div>
        
        </div>
         <Sidebar 
            isOpen={sidebarOpen}
            onClose ={()=>setSidebarOpen(false)}
            onOpenNews={()=>{
                setShowAllFeed(true);
                setSidebarOpen (false);
            }}
            onChatClick={()=> setChatOpen(true)}
            />
        <section className="about-section">
            <h2>About YuvaLink</h2>
            <p> Yuvalink is a comprehensive volunteer mangement platform dedicated to connecting passionate individuals with meaningful disaster relief and community service opportunites across India.We believe in the power of collective action and coordinate volunteers with the skills needed to make real impact during critical times.</p>
        </section>
        <footer className="footer">
            <div className="footer-links">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Contact Us</span>
                <span>Partner Sites</span>
            </div>
        <p className="copyright">
            2025 YuvaLink.ALL rights reserved.
        </p>
        </footer>
        {showAllFeed&&(
            <div className="overlay-backdrop">
                <div className="overlay-card">
                    <div className="overlay-header">
                        <h2 className="font-bold">Live Disaster Feeds</h2>
                        <button className="close-btn" onClick={()=>setShowAllFeed(false)}><i className="bi bi-x fs-3"></i></button>
                    </div>
                 <div className="overlay-grid">
                    {[1,2,3,4,5,6].map((_, i) => (
                        <div key={i} className="feed-card">
                            <h4>Earthquake-Uttarakhand</h4>
                            <p>Magnitude 5.1 earthquake detected</p>
                            <span>USGS * 6 mins ago</span>
                            <div className="feed-action">
                                <button className="activate-btn">Activate</button>
                            </div>
                        </div>
                    ))}
                 </div>
                </div>
            </div>
        )}
         </>

    );

}
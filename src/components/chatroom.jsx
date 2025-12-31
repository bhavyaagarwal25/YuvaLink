import {useState} from "react";
import "../ui/chatroom.css";
export default function chatroom({expanded,onExpand,onClose}){
    // const[expanded,setExpanded] = useState(false);
    return(
       <>
       <div className="chat-card"> 
       <div className="chat-header ">
          <h3 className="chat-title">Incident chat</h3>
          <button className="expand-btn"
          onClick={onExpand}
        title="Expand chat">
        <i className="bi bi-arrows-fullscreen"></i>
          </button>
       </div>
     
       <div className="chat-messages">
        <div className="chat-msg chat-msg-user">
            <span className="sender">volunteer</span>
              Copy that</div>
        <div className="chat-msg chat-msg-admin">
            <span className="sender">Admin</span>
               Team a to zone A
        </div>
       </div>
       <div className="chat-input mt-auto"> 
       <input className="chat-input-field" placeholder="type message..."></input>
       <button className="send-btn">
        <i className="bi bi-send-fill"></i>
       </button>
       </div>
       </div>
       {expanded &&(
       <div className="chat-overlay">
        <div className="chat-modal">
        <div className="chat-header">
        <h3>Incident Chat</h3>
        <button 
        className="close-btn" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
        </button>
        </div> 
        <div className="chat-messages expanded">
            <div className="chat-msg chat-msg-user"><span className="sender">Volunter</span>understood</div>
            <div className="chat-msg chat-msg-admin">
                <span className="sender">Admin</span>Stay ALert</div>

        </div>
        <div className="chat-input">
            <input placeholder="type message..."></input>
            <button className="send-btn">
                <i className="bi bi-send-fill"></i>
            </button>
        </div>
        </div>
       </div>)}
         </>
         );}
export default function Sidebar({isOpen,onClose,onOpenNews,onChatClick}){
    return(
        <>
        {isOpen &&(
            <div onClick={onClose}
            className = "fixed inset-0 bg-black/40 z-[9998]"/>
        )}
        <div
         className={`fixed top-0 left-0 h-full w-15  z-[9999] p-2 
            transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            style={{backgroundColor: "#1F3347"}}>
        <ul className="space-y-6 text-blue-700">
            <li className="cursor-pointer">
                <i className="bi bi-house-fill fs-3"></i>
               </li>
            <li className="cursor-pointer" onClick={onChatClick}>
                <i className="bi bi-chat-left-dots-fill fs-3"></i></li>
            <li className="cursor-pointer " onClick={onOpenNews}><i className="bi bi-newspaper fs-3"></i></li>
            <li className="cursor-pointer"><i className="bi bi-file-bar-graph-fill fs-3"></i></li>
               <li className=" cursor-pointer "><i className= "bi bi-person-fill fs-3"></i></li>
            <li className="cursor-pointer"><i className="bi bi-gear-fill fs-3"></i></li>
        </ul>
        </div>
        </>
    );
}
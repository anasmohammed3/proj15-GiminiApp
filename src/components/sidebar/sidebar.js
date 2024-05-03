import React, { useContext, useState } from 'react';
import { images } from "../images";
import "./sidebar.css";
import { Context } from '../../context/Context';

const Sidebar = () => {

   // State to manage sidebar open/close status
  const [open, setOpen] = useState(false);
     
  // Accessing context variables and functions
  const { onSent, prevAi, setRecentAi, newChat } = useContext(Context);

     // Function to load AI
    const loadAi = async (ai) => {
    setRecentAi(ai); // Set recent AI
    await onSent(ai); // Send AI request
  };
      
   // Function to toggle sidebar menu
   const toggleMenu = () => {
    setOpen(!open);
  };



  return (
    <section className="sidebar">

           {/* Menu icon */}
         <img src={images.menu_icon}  className="menu" onClick={toggleMenu}></img>
           
            {/* Top section */}
       <div className='top'>
            <div onClick={()=>newChat()} className='chat'>
            <img src={images.plus_icon}></img>
            {open?<p>new chat</p>:null}
            </div>
       </div>

                 
                 

                    {/* Recent chats */}  
            {open?
            <div className='recent'>
            <p className='recent-title'>recent</p>

            {/* Mapping through previous AIs */}
            {prevAi.map((item,index) =>{

                    return(
                        <div onClick={()=>loadAi(item)} className='what'>
                        <img src={images.message_icon}></img>
                        <p>{item.slice(0,18)} ...</p>
                        </div>
                    )
                })}
            </div>
        :null}            
      




             {/* Bottom section */}
            <div className='down'>
            <div className='help'>
                <img src={images.question_icon}></img>
                {open?<p>help</p>:null }
            </div>


            <div className='activity'>
                <img src={images.history_icon}></img>
                {open?<p>activity</p>:null}
            </div>


            <div className='setting'>
                <img src={images.setting_icon}></img>
                {open?<p>settings</p>:null}
            </div>
        </div>
    </section>
  )
}

export default Sidebar















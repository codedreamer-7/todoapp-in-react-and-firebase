
import React from 'react';

import homeImg from "../images/home.svg";
import homeActiveImg from "../images/home-active.svg";

import calenderImg from "../images/calender.svg";
import calenderActiveImg from "../images/calender-active.svg";

import notificationImg from "../images/notification.svg";
import notificationActiveImg from "../images/notification-active.svg";

import addIcon from "../images/addIcon.svg";


export const BottomNavbar = ({active}) => {
    return (
        <div className="bottom-nav">
           {
            active === 'home' ? 
            <div className='bottom-btn active pointer'>
                <img src={homeActiveImg} className="pr-2"/>
                <span>HOME</span>
            </div> : 
            <div className='bottom-btn pointer'>
                <img src={homeImg} />
            </div>
         }

         {
           active === 'calender' ? 
           <div className='bottom-btn active pointer'>
               <img src={calenderActiveImg} className="pr-2" />
               <span>CALENDAR</span>
           </div> : 
           <div className='bottom-btn pointer'>
               <img src={calenderImg}  />
           </div>  
         }

         {
           active === 'notification' ? 
           <div className='bottom-btn active pointer'>
               <img src={notificationActiveImg} className="pr-2" />
               <span>NOTIFICATIONS</span>
           </div> : 
           <div className='bottom-btn pointer'>
               <img src={notificationImg}/>
           </div>  
         }

         <div className="add-task-btn pointer">
            <img src={addIcon}/>
         </div>
        </div>
    )
}

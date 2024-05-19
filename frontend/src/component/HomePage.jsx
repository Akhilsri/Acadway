import React from 'react'
import NoticeBoard from './carousel';
import './topNav.css'
import './Navbar2.css'
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { IoNotificationsOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { loginWithRedirect , logout, isAuthenticated, user} = useAuth0();
  return (
    <>
    <div className="topNav">
        <input placeholder="Search" className="search" type="search" name="" id="" />
        <div className="icons">
        <IoNotificationsOutline />
        <SlCalender />
        <FaRegUser />
        </div>
        <div className="login">
        {isAuthenticated ? (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>) : ( <button onClick={() => loginWithRedirect()}>Log In</button>) }
        </div>
       
       
  
        
    </div>
  
    {/* <NoticeBoard/> */}
      
    </>
  )
}

export default HomePage

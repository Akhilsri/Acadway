import React from 'react'
import NoticeBoard from './carousel';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const HomePage = () => {
  return (
    <>
    <div className="topNav">
        <input placeholder="Search" className="search" type="search" name="" id="" />
        <div className="topIcons">
        <CircleNotificationsIcon>Hii</CircleNotificationsIcon>
       <CalendarMonthIcon></CalendarMonthIcon>
       <AssignmentIndIcon></AssignmentIndIcon>
        </div>
    </div>
    <NoticeBoard/>
      
    </>
  )
}

export default HomePage

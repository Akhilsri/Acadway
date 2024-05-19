import React from 'react'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { LuGoal } from "react-icons/lu";
import { IoLibraryOutline } from "react-icons/io5";
import { FaAmazonPay } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { useAuth0 } from '@auth0/auth0-react';

const Navbar2 = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
    <div className="navContainer">
        <ul>
        <Link to="/"><li><IoHomeOutline/></li></Link>
        <Link to="#"><li><LuGoal /></li></Link>
        {isAuthenticated && <Link to="/attendence"><li><IoLibraryOutline /></li></Link>}
        {/* <Link to="/attendence"><li><IoLibraryOutline /></li></Link> */}
        <Link to="#"><li><FaAmazonPay /></li></Link>
        <Link to="#"><li><FaRegUser /></li></Link>
            </ul>
        </div>
    </>
  )
}

export default Navbar2

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import LoginPage from './component/LoginPage'
import HomePage from './component/HomePage'
import { Router, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar2 from './component/Navbar2'
import AttendenceRegister from './component/AttendenceRegister'
import SplashPage from './component/SplashPage'

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><HomePage/><Navbar2/></>
    },
    {
      path : "/attendence",
      element : <><AttendenceRegister/><Navbar2/></>
    },
    {
      path : "/login",
      element : <><SplashPage/><Navbar2/></>
    }
  ])

  return (
    <>  
   
      {/* <HomePage/>    */}
      {/* <LoginPage/ > */}
      {/* <Navbar/> */}
      {/* <Navbar2/> */}
      {/* <AttendenceRegister/> */}
      <RouterProvider router={router}/>
      {/* <SplashPage/>  */}
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import LoginPage from './component/LoginPage'
import HomePage from './component/HomePage'
import { Router, createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><HomePage/><Navbar/></>
    },
    {
      path : "/login",
      element : <><Navbar/><LoginPage/></>
    }
  ])

  return (
    <>
      {/* <HomePage/> */}
      {/* <LoginPage/> */}
      
      <RouterProvider router={router}/>
    </>
  )
}

export default App

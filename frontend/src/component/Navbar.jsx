import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

const Navbar = () => {
  return (
    <div className='nav'>
      <ul>
        <Link className="link" to="/"><li>Home</li></Link>
        <Link className="link" to="/about"><li>Career</li></Link>
        <Link className="link" to="/login"><li>Library</li></Link>
        <Link className="link" to="/login"><li>Pay</li></Link>
        <Link className="link" to="/login"><li>Profile</li></Link>
      </ul>
      </div>
  )
}

export default Navbar

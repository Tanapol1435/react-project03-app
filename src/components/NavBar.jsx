import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function NavBar() {
  return (
    <>
      <div style={{textAlign:"center"}}>
        <h4>
            <Link to="/home"style={{textDecoration:"none", margin:"5px"}}>Home</Link>
            <Link to="/contact"style={{textDecoration:"none", margin:"5px"}}>Contact</Link>
            <Link to="/register"style={{textDecoration:"none", margin:"5px"}}>Register</Link>
            <Link to="/" style={{textDecoration:"none", margin:"5px"}}>Login</Link>
            <Link to="/about"style={{textDecoration:"none", margin:"5px"}}>About</Link>
        </h4>
        <Header />
        <hr />
      </div>
    </>
  )
}

export default NavBar

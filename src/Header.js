import React from 'react'
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
function Header() {
  return (
    <div>
      <Link to="/Login" eventKey="link-2" className='linkto'>Login</Link>
        <Link to="/SignUp" eventKey="link-3" className='linkto'> Register</Link>
        <Link to="/Weather" eventKey="link-4" className='linkto'> Weather</Link>
    </div>
  )
}

export default Header
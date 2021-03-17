import React from 'react'
import './style.css'
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><a href="#">Home</a></li>
            <li><a href="#">AboutUs</a></li>
            <li><a href="#">Posts</a></li>
            <li><a href="#">ContactUs</a></li>
        </ul>
    </div>
   )

 }

export default Navbar
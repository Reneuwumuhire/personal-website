import React from 'react'
import { Link, Route } from 'react-router-dom'
import './SideMenu.css';
// import { FaBars } from 'react-icons/fa';




function SideMenu() {
    return (
        <Route>
            <div className="sideMenu">
                <Link className="nav__links" to="/">Home</Link>
                <Link className="nav__links" to="/contact" >Contact Me</Link>
                <Link className="nav__links" to="/about" >About Me</Link>
                <Link className="nav__links" to="/work"  >My Work</Link>

            </div>
        </Route>
    )
}

export default SideMenu

import React from 'react'
import { Link } from 'react-router-dom'
// import { FaBars } from 'react-icons/fa';




function SideMenu() {
    return (
        <div className="sideMenu">
            <Link to="/" style={{ textDecoration: 'none', color: 'white', padding: '10px' }}>Home</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'white', padding: '10px' }}>Contact Me</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'white', padding: '10px' }}>About Me</Link>
            <Link to="/work" style={{ textDecoration: 'none', color: 'white', padding: '10px' }}> My Work</Link>

        </div>
    )
}

export default SideMenu

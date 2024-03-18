//Importing Dependencies and Components 
import React from 'react'
import { Link, NavLink } from 'react-router-dom'; // Importing Link and NavLink from react-router-dom to move between pages 
import './sidebar.scss'; // Calling the styles for the sidebar - Created in sass 
import Logo from '../../assets/images/logoc.png'; // Importing my own logo image

import { MdOutlineDesignServices } from "react-icons/md" // Importing the services(portfolio) icon from react-icons
import { FaDeviantart, FaEnvelope, FaHome, FaUser, FaArtstation, FaInstagram } from "react-icons/fa"; // Importing the other icons from react-icons

// Creating the Sidebar component
const Sidebar = () => {
  return (
    <>
    {/* Nav Bar Element */}
    <div className="nav-bar">
        <Link className="logo" to="/"> 
            <img src={Logo} alt='logo'></img>
         </Link>   
         <nav>
            {/* Navigation Links */}
            <NavLink exact="true" activeclassname="active" to='/'>
                <FaHome  color='#fff' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                <FaUser color='#fff' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='portfolio-link' to='/portfolio'>
                <MdOutlineDesignServices  color='#fff' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
                <FaEnvelope color='#fff' />
            </NavLink>
         </nav>
         {/* Social Media Links */}
         <div className='social-links'>
         <ul>
            <li>
                <a href="https://www.deviantart.com/eggman231" target="_blank" rel="noreferrer">
                    <FaDeviantart color='#fff' />
                </a>
            </li>
            <li>
                <a href="https://www.artstation.com/chrisdickson7" target="_blank" rel="noreferrer">
                    <FaArtstation color='#fff' />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/cdickson231/" target="_blank" rel="noreferrer">
                    <FaInstagram color='#fff' />
                </a>
            </li>
         </ul>
    </div>
    </div>
    {/* Bottom Navbar element - only appears on small screens - <500px */}
    <div className="bottom-nav-bar">
        <ul>
            <li>
              <NavLink exact="true" activeclassname="active" to='/'>
                <FaHome color='#fff' />
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                <FaUser color='#fff' />
              </NavLink>
            </li>
            <li>
            <NavLink exact="true" activeclassname="active" className='portfolio-link' to='/portfolio'>
                <MdOutlineDesignServices  color='#fff' />
            </NavLink>
            </li>
            <li>
            <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
                <FaEnvelope color='#fff' />
            </NavLink>
            </li>
        </ul>
    </div>
    </>
);

}
// Exporting the Sidebar component to be used in ./App 
export default Sidebar
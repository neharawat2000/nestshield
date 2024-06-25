import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../../Style/navbar.css"

import logo from '../../resources/logo.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
    return(
        <>
            <nav className="navbar">
                <div className="first">
                    <img src={logo} className="logo" alt="company-logo" />
                    <button className="nav-bar" onClick={toggleMenu}>
                        <FaBars className="icon"/>
                    </button>
                </div>
                <div className="middle" >
                    <div className={`navbar-links ${isOpen ? 'active' : 'second'}`}>
                        <div className="links" >
                            <NavLink to= "/" style={({ isActive }) => ({
                                color: isActive ? "#B7DCFF" : "#FFFFFF", 
                                fontWeight: isActive ? 600 : 400,
                                textDecorationLine:isActive ? "underline" : "none"
                            })}>
                                Home
                            </NavLink>

                            <NavLink to= "/home-warranty" style={({ isActive }) => ({
                                color: isActive ? "#B7DCFF" : "#FFFFFF", 
                                fontWeight: isActive ? 600 : 400,
                                textDecorationLine:isActive ? "underline" : "none"
                            })}>
                                Home Warranty
                            </NavLink>

                            <NavLink to= "/support" style={({ isActive }) => ({
                                color: isActive ? "#B7DCFF" : "#FFFFFF", 
                                fontWeight: isActive ? 600 : 400,
                                textDecorationLine:isActive ? "underline" : "none"
                            })}>
                                Support
                            </NavLink>

                            <NavLink to= "/blog" style={({ isActive }) => ({
                                color: isActive ? "#B7DCFF" : "#FFFFFF", 
                                fontWeight: isActive ? 600 : 400,
                                textDecorationLine:isActive ? "underline" : "none"
                            })}>
                                Blog
                            </NavLink>
                        </div>
                        <div className="last">
                            <button className="contactBtn">
                                CONTACT US
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
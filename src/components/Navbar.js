import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


const Navbar = ({onChange, searchBy}) => {

    const shows = useRef(null);

    useEffect(() => {
        shows.current.checked = true;
    },[]);

    return(
        <nav className="navbar navbar-dark" id="navBar">
            <div className="container-fluid">

                <Link to="/home" className="navbar-brand logo"><span><FiMonitor size="2.5em"/></span> <span id="name">TVmaze</span></Link>
                
                <div className="buttonWrap">
                    <input  type="radio" name="searchBy" id="people" onClick={searchBy}/>
                    <label  className="radioLable" htmlFor="people">Actors</label>
                    <input  type="radio" name="searchBy" id="shows" ref={shows} onClick={searchBy}/>
                    <label  className="radioLable" htmlFor="shows">Shows</label>
                </div>
                
                <div id="searchWrap" className="d-flex">
                    <div id="searchIcon"><FaSearch size="1rem" id="icon"/></div>
                    <input id="searchBox"  type="search" placeholder="Enter show or actor" aria-label="Search" onChange={onChange}/>
                </div>
                
            </div>
        </nav>
    );

}

export default Navbar;
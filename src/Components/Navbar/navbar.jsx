import React, { useState } from "react";
import './navbar.css';
import {AiFillHome} from 'react-icons/ai';
import {FaHistory} from 'react-icons/fa';
import {LuMessagesSquare} from 'react-icons/lu';
import {MdProductionQuantityLimits} from 'react-icons/md';
import {FaBars} from 'react-icons/fa';
const Navbar =() => {
    const[activeNav,setActiveNav]=useState('#');
    const[preclass,setpreclass]=useState(false)
  return(
    <div className="navbar topnav">
    <div>
       <h3 className="logo"> Company Name</h3>
    </div>
    <div className={preclass ? "dropdown" : "links"}>
    <a  href="#" onClick={() => setActiveNav('#')} className={activeNav=== '#'? 'active' :''}> <AiFillHome className="pp"/> Home</a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav=== '#about'? 'active' :''} > <FaHistory className="pp"/> About</a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav=== '#contact'? 'active' :''} > <LuMessagesSquare className="pp"/> Contact</a>
    <a href="#product" onClick={() => setActiveNav('#product')} className={activeNav=== '#product'? 'active' :''} > <MdProductionQuantityLimits className="pp"/> Products</a>
    </div>
    <div className="toggle">
       <a href="#" onClick={() => setpreclass(!preclass)}><FaBars/>
       </a>
       </div>
    {/* <div className={preclass ? "dropdown open" : "dropdown"}>
      <a  href="#" onClick={() => setActiveNav('#')} className={activeNav=== '#'? 'active' :''}><AiFillHome/> Home</a></li>
      <li><a href="#about" onClick={() => setActiveNav('#about')} className={activeNav=== '#about'? 'active' :''} > <FaHistory/> About</a></li>
      <li><a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav=== '#contact'? 'active' :''} ><LuMessagesSquare/> Contact</a></li>
      <li><a href="#product" onClick={() => setActiveNav('#product')} className={activeNav=== '#product'? 'active' :''} ><MdProductionQuantityLimits/> Products</a></li>
    </div> */}
    </div>
  )
}
export default Navbar;
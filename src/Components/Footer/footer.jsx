import React from "react";
import './footer.css';
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
// import {BsFacebook} from 'react-icons/bs'
const Footer =() =>{
   return(
    <footer>
       <div className="footer-content">
       <h2 className="footer-heading">Company name</h2>
       <p className="footer-para"> Minim aliquip occaecat mollit nostrud officia cupidatat velit est labore 
         labore ullamco pariatur esse. Nisi ad nostrud aliquip minim ipsum ipsum amet non.
         Nisi laborum nisi id esse ullamco consectetur officia eu quis adipisicing excepteur
         tempor sint nisi
        </p>
        <ul className="socials">
          <li><a href="#"><BsFacebook className="icons"/></a></li>
           <li><a href="#"><BsTwitter className="icons"/></a></li>
           <li><a href="#"><AiFillYoutube className="icons"/></a></li>
           <li><a href="#"><FaInstagramSquare className="icons"/></a></li>
        </ul>
        <div className="footer-bottom">
        <p>copyright © 2023 </p>
        
        </div>
       </div>
    </footer>
   )
}
export default Footer
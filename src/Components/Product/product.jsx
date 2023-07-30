import  React from "react";
import img1 from './spices.png';
import './product.css';
const Product =() =>{
    return(
        
        <div className="body">
        <a href="#" target="_blank">
            <div className="wrapper">
               <img src={img1}></img>
               <div className="text-box">
                   <h2>Spices</h2>
                  <p>Mollit veniam ex sunt aute irure consequat sint. Deserunt tempor ex esse ullamco voluptate. Incididunt ut sit do voluptate aliqua cillum aute commodo sunt sunt aliqua. Eu dolore est qui ex et ea adipisicing dolor ex proident culpa fugiat. Occaecat eu deserunt qui aliquip velit velit non.</p>

                </div>
            </div>
        </a>
        </div> 
    )
}
export default Product;
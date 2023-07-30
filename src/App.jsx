
import React from 'react';
import History from './Components/History/History'
import Footer from './Components/Footer/footer';
import Navbar from './Components/Navbar/navbar';
import Feedback from './Components/Feedback/feedback';
import Contact from './Components/Contact/contact';
import Product from './Components/Product/product';
import Product2 from './Components/Product2/product2';
import Product3 from './Components/Product3/product3';
import Carousel from './Components/Carousel/carousel';
const App = () => {
    return (
      <>
        <Navbar/>
        <Carousel/>
        <History/>
        <Product/>
        {/* <Product2/> */}
        <Product3/>
        <Feedback/> 
        <Contact/> 
         <Footer/>
      </>
    )
  }
  export default App
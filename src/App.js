import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import scroll1 from "./images/scroll1.png";
import scroll2 from "./images/scroll1-1.png";
import scroll3 from "./images/scroll1-2.png";
import scroll4 from "./images/scroll1-3.png";
import scroll5 from "./images/scroll1-4.png";
import scroll6 from "./images/scroll2.png";
import scroll7 from "./images/scroll2-1.png";
import scroll8 from "./images/scroll2-2.png";
import scroll9 from "./images/scroll2-3.png";
import scroll10 from "./images/scroll2-4.png";
import "./App.css";

const images1 = [scroll1, scroll2, scroll3, scroll4, scroll5];
const images2 = [scroll6, scroll7, scroll8, scroll9, scroll10];

const ImageSlider = ({ images, speed, delay }) => {
  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images];

  return (
    <div className="image-row-container">
      <motion.div
        className="image-row"
        animate={{ x: [0, -100 * images.length + "%"] }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
          delay: delay, 
        }}
      >
        {duplicatedImages.map((img, index) => (
          <img
            src={img}
            alt={`Slide ${index}`}
            key={`image-${index}`}
            className="scroll-image"
          />
        ))}
      </motion.div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark mt-2 fixed-top">
        <div className="container-fluid d-flex justify-content-between">
          <div className="logo">
            <img src={logo} alt="Logo" className="img-fluid" />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 100 20" fill="none">
  <path d="M0 0H100V3H0V0Z" fill="#D9D9D9"/>
  <path d="M0 17H100V20H0V17Z" fill="#D9D9D9"/>
</svg>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid main-content  pt-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-left">
            <h3 className="fw-bold text-white">
              OUR PHOTOGRAPHY MASTER CLASS
             
              GETS YOU INSPIRED <br/>& PREPARED FOR THE INDUSTRY
            </h3>
            <p className="lead">WORKS BY STUDENT</p>
          </div>
        </div>
      </div>

      {/* Image Sliders */}
      <div className="container-fluid image-container">
        <ImageSlider images={images1} speed={30} delay={0} />
        <ImageSlider images={images2} speed={30} delay={5} />
      </div>
    </div>
  );
}

export default App;

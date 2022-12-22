import React from "react";
import ImageSlider from "../pages/ImageSlider";
const Slider = () => {
  const slides = [
    { url: "Image1.jpg", title: "Image1" },
    { url: "Image2.jpg", title: "Image2" },
    { url: "Image3.jpg", title: "Image3" },
    { url: "Image4.jpg", title: "Image4" },
    { url: "Image5.jpg", title: "Image5" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
 
  );
};

export default Slider;
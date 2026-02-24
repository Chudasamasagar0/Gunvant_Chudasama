import React, { useState, useEffect } from "react";
import "./CSS/Slider.css";

import img1 from "../assets/Aavkaro.png";
import img2 from "../assets/Aek tu shree hari.png";
import img3 from "../assets/Aek_taro_aadhar.png";
import img4 from "../assets/raghav thi madhav.png";
// import img5 from "../assets/slide5.jpg";

const images = [img1, img2, img3, img4];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>

      {/* Dots */}
      {/* <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
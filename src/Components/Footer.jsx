import React from "react";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left */}
        <div className="footer-left">
          GUNVANT CHUDASAMA
        </div>

        {/* Center */}
        <div className="footer-center">
          © 2026 Gunvant Chudasama. All rights reserved.
        </div>

        {/* Right */}
        <div className="footer-right">
          <a href="/contact">Contact</a>
          {/* <a href="#" className="book-btn">Book Now</a> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
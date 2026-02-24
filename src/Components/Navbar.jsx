import React, { useState } from "react";
import "./CSS/Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          GUNVANT CHUDASAMA
        </div>

        {/* Menu Icon (Mobile) */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Menu Items */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/youtube" onClick={() => setIsOpen(false)}>Youtube</Link></li>
          <li><Link to="/Gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
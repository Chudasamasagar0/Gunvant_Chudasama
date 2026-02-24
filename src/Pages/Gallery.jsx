import React from "react";
import "./CSS/Gallery.css";

// Example Imports (Replace with your actual image paths)
import img1 from "../assets/Bhikhudan.jpg";
import img2 from "../assets/shabudin rathod.png";
import img3 from "../assets/jagdish.png";
import img4 from "../assets/sairam.png";
import img5 from "../assets/mayabhai.jpg";
import img6 from "../assets/Dhirubhai.jpg";
import img7 from "../assets/Devrajbhai.png";
import img8 from "../assets/vasnatbhai.jpg";
import img9 from "../assets/jitubhai.png";
import img10 from "../assets/kirtidan.jpg";
import img11 from "../assets/osmanmir.png";
import img12 from "../assets/jaybhai.jpg";


import img13 from "../assets/moraribapu.jpg";
import img14 from "../assets/rameshbhai.png";
import img15 from "../assets/giribapu.png";
import img16 from "../assets/muktanand.png";
import img17 from "../assets/pramukh swami.png";
import img18 from "../assets/jigneshdada.jpg";
import img19 from "../assets/bhundra.png";
import img20 from "../assets/dwarkesh.jpg";
import img21 from "../assets/jinchandray.jpg";
import img22 from "../assets/SB.png";
import img23 from "../assets/vrajbhai.png";


import img24 from "../assets/R1.jpg";
import img25 from "../assets/R2.jpg";
import img26 from "../assets/R3.png";
import img27 from "../assets/R4.png";
import img28 from "../assets/R5.jpg";
import img29 from "../assets/R6.jpg";
import img30 from "../assets/R7.jpg";
import img31 from "../assets/R8.jpg";
import img32 from "../assets/R9.png";

const Gallery = () => {
  // Logic to handle categories easily
  const categories = [
    {
      title: "Gujarati Artist (ગુજરાતી કલાજગત)",
      images: [
        { src: img1, alt: "Artist 1", caption: "With Bhikhudan Gadhavi" },
        { src: img2, alt: "Artist 2", caption: "With Shabudin Rathod" },
        { src: img3, alt: "Artist 3", caption: "With Jagdish" },
        { src: img4, alt: "Artist 4", caption: "With Sairam" },
        { src: img5, alt: "Artist 5", caption: "With Mayabhai" },
        { src: img6, alt: "Artist 6", caption: "With Dhirubbhai" },
        { src: img7, alt: "Artist 7", caption: "With Devrajbhai" },
        { src: img8, alt: "Artist 8", caption: "With Vasnatbhai" }, 
        { src: img9, alt: "Artist 9", caption: "With Jitubhai" },
        { src: img10, alt: "Artist 10", caption: "With Kirtidan" },
        { src: img11, alt: "Artist 11", caption: "With Osmanmir" },
        { src: img12, alt: "Artist 12", caption: "With Jaybhai" },
      ],
    },
    {
      title: "Monks and Saints (સાધુ સંતો)",
      images: [
        { src: img13, alt: "Saint 1", caption: "Blessings" },
        { src: img14, alt: "Saint 2", caption: "Ashram Visit" },
        { src: img15, alt: "Saint 3", caption: "Spiritual Meet" },
        { src: img16, alt: "Saint 4", caption: "Muktanand Swami" },
        { src: img17, alt: "Saint 5", caption: "Pramukh Swami" },
        { src: img18, alt: "Saint 6", caption: "Jigneshdada" },
        { src: img19, alt: "Saint 7", caption: "Bhundra" },
        { src: img20, alt: "Saint 8", caption: "Dwarkesh" },
        { src: img21, alt: "Saint 9", caption: "Jinchandray" },
        { src: img22, alt: "Saint 10", caption: "SB" },
        { src: img23, alt: "Saint 11", caption: "Vrajbhai" },
      ],
    },
    {
      title: "Political & Actors (રાજકીય & અભિનેતા)",
      images: [
        { src: img24, alt: "Leader 1", caption: "With PM" },
        { src: img25, alt: "Leader 2", caption: "Cabinet Meet" },
        { src: img26, alt: "Leader 3", caption: "Film Set" },
        { src: img27, alt: "Leader 4", caption: "With Chief Minister" },
        { src: img28, alt: "Leader 5", caption: "With Governor" },
        { src: img29, alt: "Leader 6", caption: "With MLA" },
        { src: img30, alt: "Leader 7", caption: "With MP" },
        { src: img31, alt: "Leader 8", caption: "With Business Leader" },
        { src: img32, alt: "Leader 9", caption: "With Actor" },
      ],
    },
  ];

  return (
    <section className="gallery-section">
      {/* Page Title */}
      <div className="gallery-header">
        <h1>Gallery</h1>
        <div className="line-accent"></div>
        <p>
          Meetings with Politicians, Business Leaders & Performance Highlights
        </p>
      </div>

      {categories.map((cat, index) => (
        <div className="gallery-category" key={index}>
          <h2 className="cat-title">{cat.title}</h2>
          <div className="gallery-grid">
            {cat.images.map((img, i) => (
              <div className="gallery-card" key={i}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
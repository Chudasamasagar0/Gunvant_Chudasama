import React from "react";
import "./CSS/Home.css";
import heroImage from "../assets/hero_main.png";
import aboutImage from "../assets/About_section.jpeg";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-image-area">
          <img src={heroImage} alt="Hasya King" className="main-hero-img" />
          {/* Enhanced Vignette for full-screen desktop blending */}
          <div className="hero-vignette"></div>
        </div>

        <div className="hero-content-area">
          <div className="hero-text-wrapper">
            <p className="tagline">GUJARAT'S FAVORITE COMEDIAN</p><br/>
            <h1 className="hero-title">
              રમુજ નો
              <span className="gold-text"> રાજા</span>
            </h1>
            <p className="hero-description">
              Bringing laughter to millions with authentic Gujarati humor,
              storytelling, and an unforgettable stage presence.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INFO SECTION ================= */}
      <section className="info-stats">
        <div className="stat-card">
          <h3>1500+</h3>
          <p>Shows Performed</p>
        </div>
        <div className="stat-card">
          <h3>15+</h3>
          <p>Countries</p>
        </div>
        <div className="stat-card">
          <h3>22+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Awards Won</p>
        </div>
      </section>
      <Slider />

      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-img-box">
            <img src={aboutImage} alt="Gunvant Chudasama" />
          </div>
          <div className="about-text-box">
            <h2 className="section-title">
              THE MAN BEHIND <br />
              <span className="gold-text">THE LAUGHS</span>
            </h2>
            <p>
              Born and raised in the heart of Gujarat, Hasya King has been
              making audiences roar with laughter for over 25 years. His unique
              blend of observational comedy and mimicry has earned him a devoted
              fanbase across India and abroad.
            </p>
            <a href="/about" className="story-link">Read Full Story →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
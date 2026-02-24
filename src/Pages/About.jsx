import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import about1 from "../assets/about_first.jpeg";
import about2 from "../assets/about_second.jpeg";
import about3 from "../assets/raghav thi madhav.png";
import about4 from "../assets/Aek_taro_aadhar.png";
import about5 from "../assets/Aek tu shree hari.png";
import about6 from "../assets/Aavkaro.png";

import "./CSS/About.css";

const timelineData = [
  { year: "2004", img: about1, text: "Started performing at small local events and community gatherings." },
  { year: "2005", img: about2, text: "In 2005, he emerged as the winner of the popular comedy show “Ramujo No Raja” aired on ETV Channel, gaining wide recognition for his exceptional talent and performance." },
  { year: "2008", img: about1, text: "Performed internationally and connected with global audiences." },
  { year: "2015", img: about2, text: "Established a reputation as a renowned comedian and storyteller." },
  { year: "2022", img: about3, text: "Launched “Raghav Thi Madhav(રાઘવ થી માધવ)” Concept Show" },
  { year: "2022", img: about4, text: "In 2022, he launched the show “Aek Taro Aadhar (એક તારો આધાર) ”, further expanding his creative journey and connecting with audiences through a powerful concept." },
  { year: "2023", img: about5, text: "In 2023, he launched the show “Akhil Brahmand Ma Aek Tu Shree Hari (અખિલ બ્રહ્માંડ માં એક તું શ્રી હરિ) ” with a new concept, captivating audiences with a unique blend of humor and storytelling." },
  { year: "2024", img: about6, text: "In 2024, he launched the show “Aavkaro ( આવકારો ) ” with a new concept, captivating audiences with a unique blend of humor and storytelling." },
  { year: "2024", img: about2, text: "In 2024, he launched the show “ Gaje che Geet Jaya Hem na(  ગાજે છે ગીત જ્યાં હેમના  ) ” with a new concept, captivating audiences with a unique blend of humor and storytelling." },
  { year: "2025", img: about2, text: "In 2025, he launched the show “Enjoyigraphi ( એન્જોયગ્રાફી ) ” with a new concept, captivating audiences with a unique blend of humor and storytelling." },
  
];

const About = () => {
  return (
    <section className="about-page">
      {/* Cinematic Hero Slider */}
      <div className="hero-slider">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero-slide">
              <img src={about1} alt="Gunvant Chudasama" />
              <div className="hero-overlay">
                <span className="badge">THE LEGEND</span>
                <h1>Gunvant <span className="highlight">Chudasama</span></h1>
                <p>25+ Years of Laughter & Cultural Legacy</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-slide">
              <img src={about2} alt="Global Stage" />
              <div className="hero-overlay">
                <span className="badge">INTERNATIONAL</span>
                <h1>World Class <span className="highlight">Humor</span></h1>
                <p>Spreading Gujarati Culture Across Borders</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Modern Split Intro */}
      <div className="intro-section">
        <div className="intro-container">
          <div className="intro-image">
            <div className="image-wrapper">
              <img src={about1} alt="Artist Portrait" />
              <div className="experience-badge">25+ Years</div>
            </div>
          </div>
          <div className="intro-content">
            <h2 className="section-title">The Artist Behind <br/>The Laughter</h2>
            <p className="lead">
              Gunvant Chudasama isn't just a comedian; he is a storyteller of the Gujarati soul.
            </p>
            <p>
              With over two decades of mastery in observational comedy and cultural mimicry, 
              he has transformed the stage into a mirror of society, making millions laugh 
              at the beauty of everyday life.
            </p>
          </div>
        </div>
      </div>

      {/* Professional Journey Timeline */}
      <div className="journey-section">
        <div className="journey-header">
          <h2>Our Journey</h2>
          <div className="line-accent"></div>
        </div>
        
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div className="timeline-row" key={index}>
              <div className="timeline-marker">
                <div className="dot"></div>
                {index !== timelineData.length - 1 && <div className="connector"></div>}
              </div>
              <div className="timeline-card">
                <div className="card-year">{item.year}</div>
                <div className="card-body">
                  <img src={item.img} alt={item.year} />
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
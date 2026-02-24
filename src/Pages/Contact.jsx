import React from "react";
import "./CSS/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">

      {/* Top Heading */}
      <div className="contact-heading">
        <h1>GET IN TOUCH</h1>
        <p>For bookings, collaborations, or just to say hello!</p>
      </div>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">
          <h2>LET'S CONNECT</h2>
          <p>
            Whether you want to book a show, discuss a collaboration, or just
            share some love  I’d love to hear from you!
          </p>

          <div className="info-item">
            booking@hasyaking.com
          </div>

          <div className="info-item">
             +91 98765 43210
          </div>

          <div className="info-item">
             Rajkot, Gujarat, India
          </div>
        </div>

        {/* Right Side Form */}
        <div className="contact-form">
          <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email Address</label>
            <input type="email" placeholder="your@email.com" />

            <label>Mobile Number</label>
            <input type="number" placeholder="1234567890" />

            <label>Message</label>
            <textarea placeholder="Tell us about your event or just say hi..."></textarea>

            <button type="submit">
               Send Message
            </button>
          </form>
        </div>

      </div>

    </section>
  );
};

export default Contact;
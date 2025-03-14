import React from "react";
import "../styles.css"; // Import global styles
import { useNavigate } from "react-router-dom";

const Footer = () => {
const navigate = useNavigate(); 
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Stay in touch</p>
        <div className="subscribe-container">
          <input type="email" placeholder="Email Address" className="email-input" />
          <button className="btn-signup" onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </div>

      <div className="footer-links">
        <a href="#">About Us</a>
        <a href="#">Subscription</a>
        <a href="#">Advertise with us</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="footer-bottom">
        <p><span className="footer-logo">ECS</span> Basundhara, Kathmandu</p>
      </div>
    </footer>
  );
};

export default Footer;

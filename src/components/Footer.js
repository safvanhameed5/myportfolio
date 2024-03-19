import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/_safvan.hameed7" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
        <a href="https://www.facebook.com/safvanah.ah/" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/in/safvanhameed" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2024 Safvan Hameed</p>
    </div>
  );
}

export default Footer;

import React from "react";
import appStore from "../../../images/Appstore.png";
import playStore from "../../../images/playstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download app for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>
      <div className="midFooter">
        <h1>TAPROBANA</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2022 &copy; MRX</p>
      </div>
      <div className="rightFooter">
        <h4>Folllow Us</h4>
        <a href="www.facebook.com">Facebook</a>
        <a href="www.facebook.com">Youtube</a>
        <a href="www.facebook.com">Discord</a>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import MainScreenNav from "./MainScreenNav";
import MainScreenSocial from "./MainScreenSocialMedia";
import Maindontaion from "./MainScreenDonation";
import '../styles/MainScreenFooter.css';
const Footer = () => {
    return (
      <footer className="main-footer">
        <p>© 2024 مثلاً الواقع تعليمي أفضل</p>
        <MainScreenNav />
        <MainScreenSocial/>
        <Maindontaion />
      </footer>
    );
  };

  export default Footer;
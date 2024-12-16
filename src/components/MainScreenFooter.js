import React from "react";
import MainScreenNav from "./MainScreenNav";
import MainScreenSocial from "./MainScreenSocialMedia";
import Maindontaion from "./MainScreenDonation";
import '../styles/mainscreenfooter.css';
const MainScreenFooter = () => {
    return (
      <footer className="main-footer">
        <p>© 2024 مثلاً الواقع تعليمي أفضل</p>
        <MainScreenNav />
        <MainScreenSocial/>
        <Maindontaion />
      </footer>
    );
  };
  
  export default MainScreenFooter;
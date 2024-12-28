import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainScreenAbout from './components/MainScreen_about_desc_card/MainScreenAbout';
import MainScreenCourses  from "./components/MainScreen_about_desc_card/MainScreenCourseCard";
import MainScreenDesc from "./components/MainScreen_about_desc_card/MainScreenDesc";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
       <MainScreenAbout/>
       <MainScreenCourses/>
       <MainScreenDesc/>

    </>
     
  </React.StrictMode>
);


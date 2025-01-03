import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/MainScreen-Navbar/NavBar";
import MainScreenDesc from "../../components/mainscreen/MainScreenDesc";
import MainScreenCourses from '../../components/mainscreen/MainScreenCourseCard';
import MainScreenAbout from "../../components/mainscreen/MainScreenAbout";
import ProfileLink from "../../components/ProfileLink/ProfileLink";
import './MainPage.css';


const MainPage = () => {
  return (
    <div className="main-screen-body">
      
    <NavBar/>
    <div style={{padding: "4rem"}}></div>

    <ProfileLink/>

    <MainScreenDesc/>
      
    <MainScreenCourses/>

    <MainScreenAbout/>

    <Footer/>

  </div>
  );
  
};

export default MainPage;

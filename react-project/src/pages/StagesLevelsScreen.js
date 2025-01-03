import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/MainScreen-Navbar/NavBar';
import StagesCardLevels from '../components/StagesLevels/StagesCardLevels'; 
import imageFirstLevel from '../images/image-First-Level.webp';
import imageSecondLevel from '../images/image-Second-Level.jpeg';
import imageThirdLevel from '../images/image-Third-Level.jpeg';
import imageFourthLevel from '../images/image-Fourth-Level.jpeg';
import Footer from '../components/Footer/Footer';

function StagesLevelsScreen() {
  return (
    <div className="stages-levels-screen">
      <BrowserRouter>
        <NavBar />
        <div className="login-screen-header-gap"></div>

        <StagesCardLevels
          LevelName="المستوى الأول"
          LevelDiscription="المستوى الاول يعتبر بسيط يتعرف المتعلم على الأساسيات ويبدأ بتطبيق المفاهيم الأساسية"
          image={imageFirstLevel}
        />

        <StagesCardLevels
          LevelName="المستوى الثاني"
          LevelDiscription="المستوى الثاني يقدم مفاهيم أكثر تعقيدًا ويشمل مهام تتطلب مستوى متوسط من المهارات"
          image={imageSecondLevel}
        />

        <StagesCardLevels
          LevelName="المستوى الثالث"
          LevelDiscription="المستوى الثالث مصمم للطالب ذوي الخبرة ويحتوي على مهام صعبة تتطلب مستوى متقدم"
          image={imageThirdLevel}
        />

        <StagesCardLevels
          LevelName="المستوى الرابع"
          LevelDiscription="المستوى الرابع هو الأصعب ويشمل تحديات متقدمة مشكلات معقدة تتطلب مهارات متطورة"
          image={imageFourthLevel}
        />
        <Footer />
      </BrowserRouter>
      </div>
  );
}

export default StagesLevelsScreen;

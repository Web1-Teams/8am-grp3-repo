import React from "react";
import '../styles/mainscreennav.css'


const MainScreenNav = ()=>{
    return(
        <div className="main-footer">
         <nav>
        <ul>
          <li><a href="#">من نحن</a></li>
          <li><a href="#">الأسئلة المتكررة</a></li>
          <li><a href="#">الشروط والأحكام</a></li>
          <li><a href="#">سياسة الخصوصية</a></li>
          <li><a href="#">اتصل بنا</a></li>
        </ul>
      </nav>
        </div>
    )
}

export default MainScreenNav;
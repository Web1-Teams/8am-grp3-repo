import './main_screen_about_desc_card.css'

const CourseCard = ({ image, alt, title, description, buttonText }) => {
    return (
      <div className="course-card">
        <img src={image} alt={alt} />
        <h3>{title}</h3>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    );
  };
 const MainScreenCourses = () => {
    const courses = [
      {
        image: "https://via.placeholder.com/300",
        alt: "كورس 1",
        title: "اللغة العربية",
        description: "تعلم اللغة العربية من خلال كورسات تفاعلية.",
        buttonText: "ابدأ الآن",
      },
      {
        image: "https://via.placeholder.com/300",
        alt: "كورس 2",
        title: "الرياضيات",
        description: "طور مهاراتك في الرياضيات عبر دروس وفيديوهات تعليمية.",
        buttonText: "ابدأ الآن",
      },
      {
        image: "https://via.placeholder.com/300",
        alt: "كورس 3",
        title: "العلوم",
        description: "استكشف عالم العلوم من خلال كورسات مبتكرة.",
        buttonText: "ابدأ الآن",
      },
      {
        image: "https://via.placeholder.com/300",
        alt: "كورس 4",
        title: "اللغة الإنجليزية",
        description: "تعلم اللغة الإنجليزية بأسلوب سلس وبسيط.",
        buttonText: "ابدأ الآن",
      },
    ];
  
    return (
      <section id="main-screen-courses" className="main-screen-courses">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            alt={course.alt}
            title={course.title}
            description={course.description}
            buttonText={course.buttonText}
          />
        ))}
      </section>
    );
  };
  
export default MainScreenCourses;

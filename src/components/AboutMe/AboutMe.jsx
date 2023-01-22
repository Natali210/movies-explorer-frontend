import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import photo from "../../images/student-photo.jpg";

function AboutMe() {
  return (
    <section id="student" className="about-me">
      <div className="about-me__framework">
        <h3 className="about-me__block-name">Студент</h3>
        <div className="about-me__content">
          <div className="about-me__info">
            <p className="about-me__title">Наталья</p>
            <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__text">
              Я больше 8 лет работаю в сфере IT, но с разработкой всегда была связана косвенно, при этом эта сфера казалась мне очень интересной. Так я решилась на обучение веб-разработке. Теперь в моем портфолио есть уже несколько проектов, с которыми вы можете ознакомиться на этой странице. Надеюсь, это только начало. 
            </p>
            <a className="about-me__link" target="#_blank" href="https://github.com/Natali210">Github</a>
          </div>
          <img className="about-me__student-photo" alt="Фото" src={photo} />
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;
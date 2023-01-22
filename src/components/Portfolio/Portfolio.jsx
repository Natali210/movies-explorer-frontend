import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__block-name">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__project">
          <a className="portfolio__item" href="https://github.com/Natali210/how-to-learn" target="#_blank">Статичный сайт</a>
          <a href="https://github.com/Natali210/how-to-learn" target="#_blank">
            <img className="portfolio__link" alt="Ссылка" src={arrow}/>
          </a>
        </li>
        <li className="portfolio__project">
          <a className="portfolio__item" href="https://github.com/Natali210/russian-travel" target="#_blank">Адаптивный сайт</a>
          <a href="https://github.com/Natali210/russian-travel" target="#_blank">
            <img className="portfolio__link" alt="Ссылка" src={arrow}/>
          </a>
        </li>
        <li className="portfolio__project">
          <a className="portfolio__item" href="https://github.com/Natali210/react-mesto-api-full" target="#_blank">Одностраничное приложение</a>
          <a href="https://github.com/Natali210/react-mesto-api-full" target="#_blank">
            <img className="portfolio__link" alt="Ссылка" src={arrow}/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
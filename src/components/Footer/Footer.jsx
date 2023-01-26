import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__framework">
        <h5 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h5>
        <div className="footer__info">
          <p className="footer__copyright">&copy;2022</p>
          <ul className="footer__links">
            <li className="footer__item"></li>
            <a className="footer__link" href="https://practicum.yandex.ru/" target="#_blank">Яндекс.Практикум</a>
            <li className="footer__item">
              <a className="footer__link" href="https://github.com/Natali210" target="#_blank">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
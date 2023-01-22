import "./Techs.css";

function Techs() {
  return (
    <section id="techs" className="technology">
      <div className="technology__framework">
        <h3 className="technology__block-name">Технологии</h3>
        <h2 className="technology__title">7 технологий</h2>
        <p className="technology__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="technology__items">
          <li className="technology__item">HTML</li>
          <li className="technology__item">CSS</li>
          <li className="technology__item">JS</li>
          <li className="technology__item">React</li>
          <li className="technology__item">Git</li>
          <li className="technology__item">Express.js</li>
          <li className="technology__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
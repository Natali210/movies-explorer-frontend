import "./AboutProject.css";

function AboutProject() {
  return (
    <section id="project" className="about-project">
      <div className="about-project__framework">
        <h2 className="about-project__block-name">О проекте</h2>
        <div className="about-project__content">
          <div className="about-project__content-frame">
            <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__content-frame">
            <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__study-scheme">
          <div className="about-project__stage-frame">
            <div className="about-project__stage-line about-project__stage-line_black">1 неделя</div>
            <p className="about-project__stage-description">Back-end</p>
          </div>
          <div className="about-project__stage-frame">
            <div className="about-project__stage-line">4 недели</div>
            <p className="about-project__stage-description">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
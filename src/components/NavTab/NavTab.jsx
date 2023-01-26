import "./NavTab.css";

function NavTab() {
  return (
    <nav className="nav">
      <div className="nav__list">
        <a className="nav__button" href="#project">О проекте</a>
        <a className="nav__button" href="#techs">Технологии</a>
        <a className="nav__button" href="#student">Студент</a>
      </div>
    </nav>
  ); 
}


export default NavTab;
import Header from "../Header/Header";
import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";
import "./Main.css";

function Main() {
  return (
    <>
      <main className="main">
        <Header />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Footer />
      </main>
    </>
  );
}

export default Main;
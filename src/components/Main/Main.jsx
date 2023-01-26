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
    <Header />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
    <Footer />
    </>
  );
}

export default Main;
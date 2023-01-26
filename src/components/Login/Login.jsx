import "./Login.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="form__auth">
      <Logo />
      <h2 className="form__title">Рады видеть!</h2>
      <form className="form__framework">
        <label className="form__input-name">E-mail<input className="form__input" required defaultValue="pochta@yandex.ru" type="text"/></label>
        <label className="form__input-name">Пароль<input className="form__input" required defaultValue="TestPassword123" type="password"/></label>
        <button type="submit" className="form__button">Войти</button>
        <p className="form__signin-text">Еще не зарегистрированы?<Link to="/signup" className="form__signin-link">Регистрация</Link></p>
      </form>
    </section>
  );
}

export default Login;
import "./Register.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="form__auth">
      <Logo />
      <h2 className="form__title">Добро пожаловать!</h2>
      <form className="form__framework">
        <label className="form__input-name">Имя<input className="form__input" required defaultValue="Виталий" type="text"/></label>
        <label className="form__input-name">E-mail<input className="form__input" required defaultValue="pochta@yandex.ru" type="text"/></label>
        <label className="form__input-name">Пароль<input className="form__input form__input_wrong" required defaultValue="TestPassword123" type="password"/>
          <span className="form__error">Что-то пошло не так...</span>
        </label>
        <button type="submit" className="form__button">Зарегистрироваться</button>
        <p className="form__signin-text">Уже зарегистрированы?<Link to="/signin" className="form__signin-link">Войти</Link></p>
      </form>
    </section>
  );
}

export default Register;
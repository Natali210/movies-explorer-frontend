import "./Login.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { validationConfig } from '../../utils/constants';
import { useValidForm } from '../../hooks/validatorForms';

function Login({ submitLogin }) {
  const { values, isValid, errors, handleChange } = useValidForm(validationConfig.USER);

  function formSubmit(evt) {
    submitLogin(values);
    evt.preventDefault();
  } 

  return (
    <section className="form__auth">
      <Logo />
      <h2 className="form__title">Рады видеть!</h2>
      <form className="form__framework" onSubmit={formSubmit}>
        <label className="form__input-name">E-mail
          <input className={`form__input ${errors.email ? "form__input_wrong" : ""}`}
          value={values.email || ""} 
          type="email" required name="email"
          onChange={handleChange}
          />
          <span className="form__error">{errors.email || ""}</span>
        </label>
        <label className="form__input-name">Пароль
          <input className={`form__input ${errors.password ? "form__input_wrong" : ""}`} 
          value={values.password || ""} 
          type="password" required name="password" 
          onChange={handleChange}
          minLength="8"
          /> 
          <span className="form__error">{errors.password || ""}</span>
        </label>
        <button className={!isValid ? "form__button form__button_disabled" : "form__button"} 
        disabled={!isValid} type="submit">
        Войти
        </button>
        <p className="form__signin-text">Еще не зарегистрированы?<Link to="/signup" className="form__signin-link">Регистрация</Link></p>
      </form>
    </section>
  );
}

export default Login;
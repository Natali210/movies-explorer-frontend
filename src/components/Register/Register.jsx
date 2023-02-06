import "./Register.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { validationConfig } from '../../utils/constants';
import { useValidForm } from '../../hooks/validatorForms';

function Register({ submitRegister }) {
  const { values, isValid, errors, handleChange } = useValidForm(validationConfig.USER);

  function submitRegisterForm(evt) {
    evt.preventDefault();
    const { name, email, password } = values;
    submitRegister(name, email, password);
    if (!isValid) return;
  }

  return (
    <section className="form__auth">
      <Logo />
      <h2 className="form__title">Добро пожаловать!</h2>
      <form className="form__framework" onSubmit={submitRegisterForm}>
        <label className="form__input-name">Имя
          <input 
          className={`form__input ${errors.name ? 'form__input_wrong' : ''}`} 
          required value={values.name || ''} name="name"
          type="text" onChange={handleChange}
          minLength="2"
          />
          <span className="form__error">{errors.name || ''}</span>
        </label>
        <label className="form__input-name">E-mail
          <input className={`form__input ${errors.email ? "form__input_wrong" : ""}`} 
          name="email" type="email"
          onChange={handleChange}
          required value={values.email || ""}
          />
          <span className="form__error">{errors.email || ""}</span>
        </label>
        <label className="form__input-name">Пароль
          <input className={`form__input ${errors.password ? "form__input_wrong" : ""}`} 
          required name="password" value={values.password || ""} 
          type="password" onChange={handleChange} minLength="8"/>
          <span className="form__error">{errors.password || ""}</span>
        </label>
        <button type="submit"
        className={isValid ? "form__button" : "form__button form__button_disabled"}
        disabled={!isValid}
        >Зарегистрироваться</button>
        <p className="form__signin-text">Уже зарегистрированы?<Link to="/signin" className="form__signin-link">Войти</Link></p>
      </form>
    </section>
  );
}

export default Register;
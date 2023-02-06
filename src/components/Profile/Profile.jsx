import "./Profile.css";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { emailRegExp, nameRegExp } from "../../utils/constants";
import { validationConfig } from "../../utils/constants";
import { useValidForm } from "../../hooks/validatorForms";

function Profile({ changedUserData, unauthorizedUser }) {
  const currentProfile = useContext(CurrentUserContext);
  const { isValid, values, errors, resetForm, handleChange } = useValidForm(validationConfig.USER);

  const validToUpdateProfile =
  (values.email !== currentProfile.email || values.name !== currentProfile.name) && nameRegExp.test(values.name) && emailRegExp.test(values.email);

  useEffect(() => { if (currentProfile) 
    {resetForm(currentProfile, {}, true);
    }
  }, [currentProfile, resetForm]);

  function submitButton(evt) {
    evt.preventDefault();
    changedUserData(values);
    if (!isValid) return;
  }

  return (
    <>
    <section className="profile">
      <h2 className="profile__greeting">{`Привет, ${currentProfile.name}!`}</h2>
      <form className="profile__info">
        <label className="profile__info-item">
          <p className="profile__input-title">Имя</p>
          <input className={`profile__input ${errors.name ? "profile__input_wrong" : ""}`} 
          value={values.name || ""} minLength="2" onChange={handleChange}
          type="text" required name="name"/>
        </label>
        <label className="profile__info-item">
          <p className="profile__input-title">E-mail</p>
          <input className={`profile__input ${errors.email ? "profile__input_wrong" : ""}`} 
          value={values.email || ""} type="email" onChange={handleChange}
          required name="email"/>
        </label>
      </form>
      <div className="profile__actions">
        <button className={isValid ? "profile__link" : "profile__link profile__link_disabled"} disabled={!validToUpdateProfile} type="submit" onClick={submitButton} >Редактировать</button>
        <button className="profile__link profile__link_red" onClick={unauthorizedUser} type="button">Выйти из аккаунта</button>
      </div>
    </section>
    </>
  );
}

export default Profile;
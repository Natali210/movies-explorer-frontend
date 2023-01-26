import "./Profile.css";
import Header from "../Header/Header";
function Profile() {
  return (
    <>
    <Header />
    <section className="profile">
      <h2 className="profile__greeting">Привет, Виталий!</h2>
      <form className="profile__info">
        <label className="profile__info-item">
          <p className="profile__input-title">Имя</p>
          <input className="profile__input" type="text" defaultValue="Виталий" required/>
        </label>
        <label className="profile__info-item">
          <p className="profile__input-title">E-mail</p>
          <input className="profile__input" type="email" defaultValue="pochta@yandex.ru" required/>
        </label>
      </form>
      <div className="profile__actions">
        <p className="profile__link">Редактировать</p>
        <p className="profile__link profile__link_red">Выйти из аккаунта</p>
      </div>
    </section>
    </>
  );
}

export default Profile;
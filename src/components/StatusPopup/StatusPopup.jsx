import "./StatusPopup.css";
import success from "../../images/success.svg";
import unsuccess from "../../images/error.svg";

const StatusPopup = ({ isOpen, onClose, isConfirmed, successInfo, unsuccessInfo }) => {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose} aria-label="Закрыть" />
          {isConfirmed && (
          <div className="popup__info-block">
            <img className="popup__image" alt="Успешно" src={success} />
            <p className="popup__text">{successInfo}</p>
          </div> 
          )}
          {!isConfirmed && (
          <div className="popup__info-block">
            <img className="popup__image" alt="Ошибка" src={unsuccess} />
            <p className="popup__text">{unsuccessInfo}</p>
          </div> 
        )}
      </div>
    </div>
  );
}; 
        
export default StatusPopup;
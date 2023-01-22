import "./NotFound.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function NotFound() {
  const history = useHistory();
  function handleClick() {history.goBack()}

  return (
    <section className="notfound">
    <h2 className="notfound__name">404</h2>
    <p className="notfound__descriprion">Страница не найдена</p>
      <Link className="notfound__back" onClick={handleClick}>Назад</Link>
    </section>
  );
}

export default NotFound;
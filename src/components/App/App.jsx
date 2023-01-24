import "./App.css";
import { Route, Switch } from "react-router-dom";
import { URLS } from "../../utils/constants";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="page">
      <main className="root">
        <Switch>
          <Route path={URLS.LANDING} exact><Main /></Route>
          <Route path={URLS.MOVIES} exact><Movies /></Route>
          <Route path={URLS.MYMOVIES} exact><SavedMovies /></Route>
          <Route path={URLS.MYPROFILE} exact><Profile /></Route>
          <Route path={URLS.REGISTER} exact><Register /></Route>
          <Route path={URLS.LOGIN} exact><Login /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
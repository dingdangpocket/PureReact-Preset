import styles from "./App.module.scss";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link,
  HashRouter,
  NavLink,
  Routes,
} from "react-router-dom";
import Home from "./views/home/home";
import Login from "./views/login/login";
function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;

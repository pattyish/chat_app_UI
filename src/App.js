import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact/>
        <Route path="/login" component={LoginPage}  exact/>
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/dashboard" component={DashboardPage}  exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

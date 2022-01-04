import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" component = {LoginPage}/>
        <Route path="/register" component = {RegisterPage}/>
        <Route path="/dashboard" component = {DashboardPage}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

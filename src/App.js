import React from "react";
import io from "socket.io-client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatroomPage from "./pages/ChatroomPage";
import DashboardPage from "./pages/DashboardPage";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import makeToast from "./Toaster";

function App() {
  const [socket, setSocket] = React.useState(null);
  const setupSocket = () => {
    const token = localStorage.getItem("CC_Token");
    if (token.length > 0 && !socket) {
      const newSocket = io("http://localhost:8000/", {
        query: {
          token: localStorage.getItem("CC_Token"),
        },
      });
      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        makeToast("error", "Socket Disconnected!!");
      });

      newSocket.on("connect", () => {
        makeToast("success", "Socket Connected!!");
      });
      setSocket(newSocket);
    }
  };
  React.useEffect(() => {
    setupSocket();
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route
          path="/login"
          render={() => <LoginPage setupSocket={setupSocket} />}
          exact
        />
        <Route path="/register" component={RegisterPage} exact />
        <Route
          path="/dashboard"
          render={() => <DashboardPage socket={socket} />}
          exact
        />
        <Route
          path="/chatroom/:id"
          render={() => <ChatroomPage socket={socket} />}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

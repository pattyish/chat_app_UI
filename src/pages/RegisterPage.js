import React from "react";
import axios from "axios";
import makeToast from "../Toaster";
// import { Redirect } from "react-router-dom";

const RegisterPage = () => {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const registerUser = (props) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    axios
      .post("http://localhost:8000/user/register", { name, email, password })
      .then((response) => {
        makeToast("success", response.data.message);
        // <Redirect to="/login" />;
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log(err);
        makeToast("error", err.response.data.message);
      });
  };
  return (
    <div className="card">
      <div className="cardHeader">Register</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            ref={nameRef}
          />
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abc@example.com"
          ref={emailRef}
        />
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            ref={passwordRef}
          />
        </div>
        <button onClick={registerUser}>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;

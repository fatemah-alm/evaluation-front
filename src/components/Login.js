import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link, useNavigate } from "react-router-dom";
import authStore from "../stores/authStore";

const Login = () => {
  const [user, setUser] = useState();
  const [isCorrect, setIsCorrect] = useState(true);
  const navigate = useNavigate();
  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });
  const handleSubmit = (event) => {
    setIsCorrect(true);
    event.preventDefault();
    authStore.signin(user, navigate, setIsCorrect);
  };
  return (
    <div className="auth-inner">
      <form onSubmit={handleSubmit}>
        <h3 className="fonts">Login</h3>
        <div className="form-group">
          <label className="label">username</label>
          <input
            type="text"
            name="username"
            className="form-control label"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="label margin1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control label"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        {!isCorrect && (
          <p className="in-correct">* incorrect username or password</p>
        )}
        <button
          type="submit"
          className="btn .btn-outline-dark btn-block margin1"
        >
          Submit
        </button>

        <p className="forgot-password text-right">
          Forgot <Link to="/">password?</Link>
        </p>
      </form>
    </div>
  );
};

export default observer(Login);

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authStore from "../stores/authStore";
const Register = () => {
  const [user, setUser] = useState();
  const [isCorrect, setIsCorrect] = useState(true);
  const navigate = useNavigate();

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    setIsCorrect(true);
    console.log(user);
    event.preventDefault();
    authStore.signup(user, navigate, setIsCorrect);
  };
  return (
    <div className="auth-inner">
      <form onSubmit={handleSubmit}>
        <h3 className="fonts">Register</h3>
        {/* <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div> */}
        <div className="form-group">
          <label className="label">username</label>
          <input
            type="text"
            name="username"
            className="form-control label"
            placeholder="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="label">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control label"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        {!isCorrect && <p className="in-correct">* password is too short!</p>}
        <button
          type="submit"
          className="btn .btn-outline-dark btn-block margin1"
        >
          Submit
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/sign-in">Log in?</Link>
        </p>
      </form>
    </div>
  );
};
export default Register;

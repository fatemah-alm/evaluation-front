import React from "react";
import "../App.css";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import authStore from "../stores/authStore";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
      <div className="nav-bar">
        <Link className="navbar-brand logo" to={"/sign-in"}>
          {/* <img
            src={require("../assets/simple-evaluation-logo-like-review-or-searching-2BWWGYT.jpeg")}
            className="logo"
          /> */}
          Evaluation System
        </Link>

        <div
          className="collapse navbar-collapse logged-in"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav ml-auto nav-items ">
            {authStore.user ? (
              <li className="nav-item end">
                <Link
                  className="nav-link"
                  onClick={() => authStore.unSetUser()}
                  to={"/sign-in"}
                >
                  logout
                  {"   "}
                  <FiLogOut size={17} />
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default observer(NavBar);

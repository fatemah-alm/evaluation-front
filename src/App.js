import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Report from "./components/Report";
import JudgeScreen from "./components/JudgeScreen";
import TeamsPage from "./components/TeamsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="auth-wrapper">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects/:projectId" element={<Report />} />
          <Route path="/projects/:projectId/x" element={<JudgeScreen />} />
          <Route path="/teams/:projectId/:judgeId" element={<TeamsPage />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;

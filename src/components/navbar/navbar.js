import Search from "../images/icons/search.svg";
import Notification from "../images/icons/notification.svg";
import Admin from "../images/admin-icon-png-12.jpg";
import "./navbar.css";
import { Routes, Route } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <Routes>
        <Route path="/" element={<h1 className="navbar-title">Overview</h1>} />
        <Route path="main" element={<h1 className="navbar-title">Tickets</h1>} />
      </Routes>
      <img src={Search} alt="Search icon" />
      <img src={Notification} alt="Notification icon" className="notic-icon" />
      <button className="btn-admin">
        <a href="https://github.com/JasurbekXorinjonov">Jasurbke Xorinjonov</a>
        <img src={Admin} alt="Admin icon" />
      </button>
    </div>
  );
}

export default Navbar;

import Search from "../images/icons/search.svg";
import Notification from "../images/icons/notification.svg";
import Admin from "../images/admin-icon-png-12.jpg";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <h1 className="navbar-title">Tickets</h1>
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

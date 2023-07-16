import "./main.css";
import Sort from "../images/icons/sort.svg";
import Filter from "../images/icons/filter.svg";
import User1 from "../images/icons/user1.png";
import Vertical from "../images/icons/more - vertical.svg";
import { BtnmainHigh, BtnmainLow, BtnmainNormal } from "./Btnmain";

function Main() {
  return (
    <div className="main-conatiner">
      <div className="main-header">
        <h1>All tickets</h1>
        <button type="submit" className="sort-btn">
          <img src={Sort} alt="Sort icon" />
          <span>Sort</span>
        </button>
        <button type="submit" className="sort-btn">
          <img src={Filter} alt="Filter icon" className="icon-filter" />
          <span>Filter</span>
        </button>
      </div>
      {/* main-header */}
      <div className="main-content">
        <div className="content-nav flex">
          <p className="nav-title">Ticket details</p>
          <p className="nav-title">Customer name</p>
          <p className="nav-title">Date</p>
          <p className="nav-title">Priority</p>
        </div>
        <div className="cards">
          <div className="card flex">
            <img src={User1} alt="User" className="user" />
            <div className="card-text">
              <p>Contact Email not Linked</p>
              <p>Updated 1 day ago</p>
            </div>
          </div>
          <div className="card card-text">
            <p>Tom Cruise</p>
            <p>on 24.05.2019</p>
          </div>
          <div className="card card-text">
            <p>May 26, 2019</p>
            <p>6:30 PM</p>
          </div>
          <div className="card flex ai-center">
            <BtnmainHigh name="HIGH" />
            <img src={Vertical} alt="Vertical icon" />
          </div>
        </div>
        {/* Cards */}
        <div className="cards">
          <div className="card flex">
            <img src={require("../images/user2.jpg")} alt="User" className="user" />
            <div className="card-text">
              <p>Contact Email not Linked</p>
              <p>Updated 1 day ago</p>
            </div>
          </div>
          <div className="card card-text">
            <p>Tom Cruise</p>
            <p>on 24.05.2019</p>
          </div>
          <div className="card card-text">
            <p>May 26, 2019</p>
            <p>6:30 PM</p>
          </div>
          <div className="card flex ai-center">
            <BtnmainLow name="LOW" />
            <img src={Vertical} alt="Vertical icon" />
          </div>
        </div>
        <div className="cards">
          <div className="card flex">
            <img src={require("../images/user3.jpg")} alt="User" className="user" />
            <div className="card-text">
              <p>Contact Email not Linked</p>
              <p>Updated 1 day ago</p>
            </div>
          </div>
          <div className="card card-text">
            <p>Tom Cruise</p>
            <p>on 24.05.2019</p>
          </div>
          <div className="card card-text">
            <p>May 26, 2019</p>
            <p>6:30 PM</p>
          </div>
          <div className="card flex ai-center">
            <BtnmainHigh name="HIGH" />

            <img src={Vertical} alt="Vertical icon" />
          </div>
        </div>
        <div className="cards">
          <div className="card flex">
            <img src={require("../images/user4.jpg")} alt="User" className="user" />
            <div className="card-text">
              <p>Contact Email not Linked</p>
              <p>Updated 1 day ago</p>
            </div>
          </div>
          <div className="card card-text">
            <p>Tom Cruise</p>
            <p>on 24.05.2019</p>
          </div>
          <div className="card card-text">
            <p>May 26, 2019</p>
            <p>6:30 PM</p>
          </div>
          <div className="card flex ai-center">
            <BtnmainNormal name="NORMAL" />
            <img src={Vertical} alt="Vertical icon" />
          </div>
        </div>
        <div className="cards">
          <div className="card flex">
            <img src={require("../images/user5.jpg")} alt="User" className="user" />
            <div className="card-text">
              <p>Contact Email not Linked</p>
              <p>Updated 1 day ago</p>
            </div>
          </div>
          <div className="card card-text">
            <p>Tom Cruise</p>
            <p>on 24.05.2019</p>
          </div>
          <div className="card card-text">
            <p>May 26, 2019</p>
            <p>6:30 PM</p>
          </div>
          <div className="card flex ai-center">
            <BtnmainHigh name="HIGH" />
            <img src={Vertical} alt="Vertical icon" />
          </div>
        </div>
        <div className="cards">
          <div className="card flex">
            <img src={require("../images/user6.jpg")} alt="User" className="user" />
            <div className="card-text">
              <p>Contact Email not Linked</p>
              <p>Updated 1 day ago</p>
            </div>
          </div>
          <div className="card card-text">
            <p>Tom Cruise</p>
            <p>on 24.05.2019</p>
          </div>
          <div className="card card-text">
            <p>May 26, 2019</p>
            <p>6:30 PM</p>
          </div>
          <div className="card flex ai-center">
            <BtnmainNormal name="NORMAL" />

            <img src={Vertical} alt="Vertical icon" />
          </div>
        </div>
        <div className="cards">
          <div className="card flex">
            <img src={require("../images/user7.jpg")} alt="User" className="user" />
            <div className="card-text">
              <p>Contact Email not Linked</p>
              <p>Updated 1 day ago</p>
            </div>
          </div>
          <div className="card card-text">
            <p>Tom Cruise</p>
            <p>on 24.05.2019</p>
          </div>
          <div className="card card-text">
            <p>May 26, 2019</p>
            <p>6:30 PM</p>
          </div>
          <div className="card flex ai-center">
            <BtnmainLow name="LOW" />

            <img src={Vertical} alt="Vertical icon" />
          </div>
        </div>
        <div className="cards">
          <div className="card flex">
            <img src={require("../images/user8.jpg")} alt="User" className="user" />
            <div className="card-text">
              <p>Contact Email not Linked</p>
              <p>Updated 1 day ago</p>
            </div>
          </div>
          <div className="card card-text">
            <p>Tom Cruise</p>
            <p>on 24.05.2019</p>
          </div>
          <div className="card card-text">
            <p>May 26, 2019</p>
            <p>6:30 PM</p>
          </div>
          <div className="card flex ai-center">
            <BtnmainNormal name="NORMAL" />

            <img src={Vertical} alt="Vertical icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

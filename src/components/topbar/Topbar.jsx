import React from "react";
import "./Topbar.css";
import bank from "../assets/UI icon/bank/filled.svg";
import notification from "../assets/UI icon/notification/light.svg";
import message from "../assets/UI icon/message/light.svg";
import profile from "../assets/UI icon/laugh/filled.svg";
import add from "../assets/UI icon/add/light.svg";
import Searchbar from "../searchbar/Searchbar";

const Topbar = () => {
  return (
    <div classname="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">
            <img src={bank} alt="logo" />
          </div>
        </div>
        <div className="topRight">
          <Searchbar />

          <div className="button">
            <button className="buttonAction" type="submit">
              <img src={add} alt="add" className="add" />
              <span>create</span>
            </button>
          </div>
          <div className="topbarIconContainer">
            <img src={message} alt="message" />
            <span className="iconBadge">22</span>
          </div>

          <div className="topbarIconContainer">
            <img src={notification} alt="notification" />
            <span className="iconBadge">22</span>
          </div>

          <div className="profile">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

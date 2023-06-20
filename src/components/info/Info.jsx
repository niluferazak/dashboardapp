import React from "react";
import "./info.css";
import down from "../assets/UI icon/arrow_down/light.svg";
import up from "../assets/UI icon/arrow_up/light.svg";
import bag from "../assets/UI icon/briefcase/light.svg"
import graph from "../assets/UI icon/activity/light.svg"
import info from "../assets/UI icon/info/filled.svg"

const Info = () => {
  return (
    <div className="info">
      <div className="infoItem">
        <div className="img1">
            <img src={bag} alt="bag" />
        </div>
        <div className="customers">
        <span className="infoTitle">Customers</span>
        <img src={info} alt="" className="infoStyle" />
        </div>
        <div className="infoRate">
        <span className="infoNumber">
            <h1>1024</h1>
          </span>
          <span className="rate">
            <img src={down} alt="down" className="up"/>
            37.8%
          </span>
          
        </div>
      </div>

      <div className="infoItem">
      <div className="img2">
            <img src={graph} alt="bag" />
        </div>
        <span className="infoTitle">Income</span>
        <img src={info} alt="" className="infoStyle"/>
        <div className="infoRate">
        <span className="infoNumber">
            <h1>256k</h1>
          </span>
          <span className="rate1">
            
            <img src={up} alt="down" className="down"/>
            
            37.8%
          </span>
          
          
        </div>
      </div>
    </div>
  );
};

export default Info;

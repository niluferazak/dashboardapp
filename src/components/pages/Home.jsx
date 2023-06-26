import React from "react";
import "./Home.css";
import Info from "../info/Info";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  return (
    <>
    
    <div className="home">
      <h1>Dashboard</h1>
      <div className="dashboard">
        
        <h2>Overview </h2>
        
        <Info />
        
        <span>Welcome  <span>   857 customers   </span>  with a</span>
        <span >personal message</span>
        <button className="button">Send message</button>
      </div>
      
    </div>
    </>
  );
};

export default Home;

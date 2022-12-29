import React from "react";
import NavBar from "../components/NavBar";
import MyApps from "../components/MyApps";
import TraineryHCM from "../components/TraineryHCM";
import TraineryTRAK from "../components/TraineryTrak2";
import Footer from "../components/Footer";
import "./styles/notifications.css";
const Notifications = () => {
  return (
    <div>
      <NavBar />
      <div className="main-container">
        <MyApps />
        <TraineryHCM />
        <TraineryTRAK />
      </div>
      <footer className="footer-pin">
        <Footer />
      </footer>
    </div>
  );
};

export default Notifications;

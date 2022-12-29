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
      <div>
        <MyApps />
        <TraineryHCM />
        <TraineryTRAK />
      </div>
      <Footer />
    </div>
  );
};

export default Notifications;

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./styles/notifications.css";
import One from "../assets/TraineryLMS-Logo.png";
import Two from "../assets/COMPBldr logo.png";
import TrainerLerning from "../components/TrainerLerning";
import TraineryTrak from "../components/TraineryTrak";
import TrakApps from "../components/TrakApps";
import Recents from "../components/Recents";
import AppUpdates from "../components/AppUpdates";
const Notifications = () => {
  // eslint-disable-next-line no-unused-vars
  const [number, setNumber] = useState(2);
  const [select, setSelect] = useState(true);
  return (
    <div>
      <NavBar />
      <div styles={{ felxDirection: "column" }}>
        <div className="apps">
          My apps <span className="textBlue">{number}</span>
        </div>
        <div>
          <div
            className="box1"
            style={{ border: select ? "2px solid #295bdc" : " " }}
            onClick={() => setSelect(true)}
          >
            <img
              alt=""
              src={One}
              width="110"
              height="18.15"
              className="lmsLogo"
            />
          </div>
          <span className="default">
            <input type="checkbox" />
            Set as default
          </span>
          <div
            className="box2"
            style={{ border: !select ? "2px solid #295bdc" : " " }}
            onClick={() => setSelect(false)}
          >
            <img
              alt=""
              src={Two}
              width="100.64"
              height="18.05"
              className="lmsLogo"
            />
          </div>
          <span className="default">
            <input type="checkbox" />
            Set as default
          </span>
        </div>
        <div className="border" style={{ top: "148px" }}></div>
      </div>
      <div className="trainLearn">
        <TrainerLerning />
      </div>
      <div className="trainTrak">
        <TraineryTrak />
      </div>
      <div className="trakApps">
        <TrakApps />
      </div>
      {/* <Recents />
      <AppUpdates /> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Notifications;

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./styles/notifications.css";
import { Card } from "antd";
import One from "../assets/TRAKLearning.png";
import Two from "../assets/TRAKCoaching.png";
// import TrainerLerning from "../components/TrainerLerning";
// import TraineryTrak from "../components/TraineryTrak";
import CardTesting from "../components/TraineryTrak2";
// import TrakApps from "../components/TrakApps";
// import Recents from "../components/Recents";
// import AppUpdates from "../components/AppUpdates";
import CardTesting2 from "../components/TraineryHCM";
const Notifications = () => {
  // eslint-disable-next-line no-unused-vars
  const [number, setNumber] = useState(2);
  const [select, setSelect] = useState(true);
  return (
    <div>
      <section>
        <NavBar />
        <div styles={{ felxDirection: "column" }}>
          <div style={{ background: "white", marginTop: "15px" }}>
            <div className="apps2">
              CLIENT ID : USER001{" "}
              <span style={{ paddingLeft: "30px" }}>
                {" "}
                CLIENT NAME : JOHN DOE
              </span>
            </div>
          </div>
          <Card
            size="small"
            title={
              <div>
                My apps <span className="textBlue">{number}</span>
              </div>
            }
            style={{
              width: 400,
              marginLeft: 100,
              paddingBottom: 10,
              marginTop: 15,
              borderRadius: 15,
            }}
          >
            <div>
              <div
                className="box11"
                style={{ border: select ? "2px solid #295bdc" : " " }}
                onClick={() => setSelect(true)}
              >
                <img
                  alt=""
                  src={One}
                  width="100.64"
                  height="18.05"
                  className="lmsLogo"
                />
              </div>
              <div
                className="box22"
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
            </div>
          </Card>
        </div>

        <CardTesting2 />
        <CardTesting />
        {/* <Recents />
      <AppUpdates /> */}
      </section>

      <Footer />
    </div>
  );
};

export default Notifications;

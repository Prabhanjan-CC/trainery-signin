import React from "react";

import One from "../assets/traksafety logo.png";
import Two from "../assets/TRAKLearning.png";
import Three from "../assets/TRAKCoaching.png";
import Four from "../assets/TRAKCertification.png";
import "./styles/layoutStyles.css";
const TrakApps = () => {
  return (
    <div>
      <div>
        <div className="apps">Trak Apps</div>
        <div>
          <div className="box1" style={{ border: "1px" }}>
            <img
              alt=""
              src={One}
              width="101.56"
              height="19.15"
              className="lmsLogo"
            />
          </div>
          <div className="box2">
            <img
              alt=""
              src={Two}
              width="101.56"
              height="13.15"
              className="lmsLogo"
            />
          </div>
          <div className="box2">
            <img
              alt=""
              src={Three}
              width="99.56"
              height="13.15"
              className="lmsLogo"
            />
          </div>
          <div className="box2">
            <img
              alt=""
              src={Four}
              width="99.56"
              height="13.15"
              className="lmsLogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrakApps;

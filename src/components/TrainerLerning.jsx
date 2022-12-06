import React from "react";

import One from "../assets/TraineryLMS-Logo.png";
import Two from "../assets/Streamery logo.png";
import "./styles/layoutStyles.css";
const TrainerLerning = () => {
  return (
    <div>
      <div>
        <div className="apps">Trainery HCM</div>
        <div>
          <div className="box1" style={{ border: "0px" }}>
            <img
              alt=""
              src={One}
              width="110"
              height="18.15"
              className="lmsLogo"
            />
          </div>
          <div className="box2">
            <img
              alt=""
              src={Two}
              width="100.64"
              height="18.05"
              className="lmsLogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerLerning;

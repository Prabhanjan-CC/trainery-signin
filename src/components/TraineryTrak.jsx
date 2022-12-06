import React from "react";

import One from "../assets/COMPBldr logo.png";
import Two from "../assets/reviewcloud logo.png";
import "./styles/layoutStyles.css";
const TraineryTrak = () => {
  return (
    <div>
      <div>
        <div className="apps">Trainery Trak</div>
        <div>
          <div className="box1" style={{ border: "1px" }}>
            <img
              alt=""
              src={One}
              width="100.64"
              height="18.05"
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

export default TraineryTrak;

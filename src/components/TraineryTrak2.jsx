import React, { useState } from "react";
import { Card } from "antd";
import One from "../assets/TRAKLearning.png";
import Two from "../assets/TRAKCoaching.png";
import "./styles/layoutStyles.css";
const TraineryTrak2 = () => {
  const [select, setSelect] = useState(true);
  return (
    <div>
      <Card
        size="small"
        title="TRAINERY TRAK"
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        style={{
          width: 400,
          marginLeft: 100,
          paddingBottom: 10,
          marginTop: 35,
          borderRadius: 15,
        }}
      >
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
      </Card>
    </div>
  );
};

export default TraineryTrak2;

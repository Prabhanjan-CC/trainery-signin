import React, { useState } from "react";
import { Card } from "antd";
import One from "../assets/TRAKLearning.png";
import Two from "../assets/TRAKCoaching.png";
import "./styles/layoutStyles.css";
const TraineryTrak2 = () => {
  const [select, setSelect] = useState(true);
  return (
    <div style={{ width: "75%", margin: "0 auto" }}>
      <Card
        size="small"
        hoverable
        style={{
          width: "auto",
          paddingBottom: 10,
          marginTop: 35,
          borderRadius: 15,
        }}
      >
        <>
          <div className="myapps">
            TRAINERY TRAK<span className="textBlue">2</span>{" "}
          </div>
          <div
            className="box"
            style={{ border: select ? "0.2rem solid #295bdc" : " " }}
            onClick={() => setSelect(true)}
          >
            <img
              alt=""
              src={One}
              width="97.64"
              height="15.05"
              className="lmsLogo"
            />
          </div>
          <div
            className="box"
            style={{ border: !select ? "0.2rem solid #295bdc" : " " }}
            onClick={() => setSelect(false)}
          >
            <img
              alt=""
              src={Two}
              width="97.64"
              height="15.05"
              className="lmsLogo"
            />
          </div>
        </>
      </Card>
    </div>
  );
};

export default TraineryTrak2;

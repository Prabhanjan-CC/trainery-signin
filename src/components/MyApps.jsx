import React, { useState } from "react";
import { Card } from "antd";
import { Checkbox } from "antd";
import One from "../assets/TRAKLearning.png";
import Two from "../assets/TRAKCoaching.png";
import "./styles/layoutStyles.css";
const MyApps = () => {
  // eslint-disable-next-line no-unused-vars
  const [number, setNumber] = useState(2);
  const [select, setSelect] = useState(true);

  return (
    <div style={{ maxWidth: "114.3rem", width: "90%" }}>
      <Card
        size="small"
        hoverable
        style={{
          width: "auto",
          marginLeft: "18%",
          paddingBottom: 10,
          marginTop: 35,
          borderRadius: 15,
        }}
      >
        <div className="myapps">
          My apps<span className="textBlue">{number}</span>{" "}
        </div>
        <div className="grid-container">
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
          <div className="item">
            Set as Default <Checkbox style={{ paddingLeft: "0.5rem" }} />
          </div>
        </div>
        <div className="grid-container">
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

          <div className="item">
            Set as Default <Checkbox style={{ paddingLeft: "0.5rem" }} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MyApps;

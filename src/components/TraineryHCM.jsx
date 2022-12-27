import React from "react";
import { Card } from "antd";
import One from "../assets/COMPBldr logo.png";
import Two from "../assets/TraineryLMS-Logo.png";
import Three from "../assets/ReviewCloud_Logo_Color.png";
import Four from "../assets/delegateHR_Logo_Color.png";
import "./styles/layoutStyles.css";
const CardTesting2 = () => {
  return (
    <div>
      <Card
        size="small"
        style={{
          width: 975,
          marginLeft: 168,
          paddingBottom: 10,
          marginTop: 35,
          borderRadius: 15,
        }}
      >
        <>
          <div className="myapps">
            TRAINERY HCM<span className="textBlue">4</span>{" "}
          </div>
          <div className="box">
            <img
              alt=""
              src={One}
              width="101.56"
              height="19.15"
              className="lmsLogo"
            />
          </div>
          <div className="box">
            <img
              alt=""
              src={Two}
              width="101.56"
              height="19.15"
              className="lmsLogo"
            />
          </div>
          <div className="box">
            <img
              alt=""
              src={Three}
              width="100.64"
              height="18.05"
              className="lmsLogo"
            />
          </div>
          <div className="box">
            <img
              alt=""
              src={Four}
              width="99.56"
              height="23.15"
              className="lmsLogo"
            />
          </div>
        </>
      </Card>
    </div>
  );
};

export default CardTesting2;

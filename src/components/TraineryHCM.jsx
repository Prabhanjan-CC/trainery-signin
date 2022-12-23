import React from "react";
import { Card } from "antd";
import One from "../assets/COMPBldr logo.png";
import Two from "../assets/TraineryLMS-Logo.png";
import Three from "../assets/reviewcloud logo.png";
import Four from "../assets/TRAKCertification.png";
const CardTesting2 = () => {
  return (
    <div>
      <Card
        size="small"
        title="TRAINERY HCM"
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        style={{
          width: 720,
          marginLeft: 100,
          paddingBottom: 10,
          marginTop: 35,
          borderRadius: 15,
        }}
      >
        <div className="box11" style={{ border: "1px" }}>
          <img
            alt=""
            src={One}
            width="101.56"
            height="19.15"
            className="lmsLogo"
          />
        </div>
        <div className="box22">
          <img
            alt=""
            src={Two}
            width="101.56"
            height="19.15"
            className="lmsLogo"
          />
        </div>
        <div className="box22">
          <img
            alt=""
            src={Three}
            width="100.64"
            height="18.05"
            className="lmsLogo"
          />
        </div>
        <div className="box22">
          <img
            alt=""
            src={Four}
            width="99.56"
            height="13.15"
            className="lmsLogo"
          />
        </div>
      </Card>
    </div>
  );
};

export default CardTesting2;

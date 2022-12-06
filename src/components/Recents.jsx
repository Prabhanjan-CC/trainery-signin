import React from "react";
import "./styles/Recents.css";
import Icon1 from "../assets/Group 10.png";
import Icon2 from "../assets/Group2.png";
import Icon3 from "../assets/Group3.png";
const Recents = () => {
  return (
    <div>
      <div className="text1"> Recent Notifications</div>
      <div className="note1">
        <img alt="" src={Icon1} width="35" height="35" className="icons" />
        <div className="box-text">
          John Smith{" "}
          <span style={{ color: "black" }}>
            has invited you to join <br />{" "}
            <span style={{ fontWeight: "500" }}>sample message</span>
          </span>
          <span className="light-text">3 days ago</span>
        </div>
      </div>
      <div className="note1" style={{ top: "180px" }}>
        <img alt="" src={Icon2} width="35" height="35" className="icons" />
        <div className="box-text">
          John Smith{" "}
          <span style={{ color: "black" }}>
            has invited you to join <br />{" "}
            <span style={{ fontWeight: "500" }}>sample message</span>
          </span>
          <span className="light-text">3 days ago</span>
        </div>
      </div>
      <div className="note1" style={{ top: "240px" }}>
        <img alt="" src={Icon3} width="35" height="35" className="icons" />
        <div className="box-text">
          John Smith{" "}
          <span style={{ color: "black" }}>
            has invited you to join <br />{" "}
            <span style={{ fontWeight: "500" }}>sample message</span>
          </span>
          <span className="light-text">3 days ago</span>
        </div>
      </div>
      <div className="note1" style={{ top: "300px" }}>
        <img alt="" src={Icon1} width="35" height="35" className="icons" />
        <div className="box-text">
          John Smith{" "}
          <span style={{ color: "black" }}>
            has invited you to join <br />{" "}
            <span style={{ fontWeight: "500" }}>sample message</span>
          </span>
          <span className="light-text">3 days ago</span>
        </div>
      </div>
      <div className="note1" style={{ top: "360px" }}>
        <img alt="" src={Icon2} width="35" height="35" className="icons" />
        <div className="box-text">
          John Smith{" "}
          <span style={{ color: "black" }}>
            has invited you to join <br />{" "}
            <span style={{ fontWeight: "500" }}>sample message</span>
          </span>
          <span className="light-text">3 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default Recents;

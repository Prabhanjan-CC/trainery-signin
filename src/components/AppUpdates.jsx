import React from "react";
import "./styles/AppUpdates.css";
import Icon1 from "../assets/icon1App.png";
import Icon2 from "../assets/Group 10 (3).png";
import Icon3 from "../assets/Group 10 (4).png";
const AppUpdates = () => {
  return (
    <div>
      <div className="text-new">Application Updates</div>
      <div className="note1-new">
        <img alt="" src={Icon1} width="40" height="40" className="icons-new" />
        <div className="box-text-new">
          CompBldr{" "}
          <span style={{ color: "black" }}>
            has invited you to join <br />{" "}
            <span style={{ fontWeight: "500" }}>sample message</span>
          </span>
          <span className="light-text">3 days ago</span>
        </div>
      </div>
      <div className="note1-new" style={{ top: "557px" }}>
        <img alt="" src={Icon2} width="40" height="40" className="icons-new" />
        <div className="box-text-new">
          Streamery{" "}
          <span style={{ color: "black" }}>
            has invited you to join <br />{" "}
            <span style={{ fontWeight: "500" }}>sample message</span>
          </span>
          <span className="light-text">3 days ago</span>
        </div>
      </div>
      <div className="note1-new" style={{ top: "617px" }}>
        <img alt="" src={Icon3} width="40" height="40" className="icons-new" />
        <div className="box-text-new">
          TraineryLMS{" "}
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

export default AppUpdates;

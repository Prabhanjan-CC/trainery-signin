import React from "react";
import "./styles/Navbar-footer.css";
import Logo from "../assets/logo_trainery.png";
// import bellIcon from "../assets/Vector.png";
import Profie from "../assets/profile.png";
const NavBar = () => {
  return (
    <div className="container">
      <img alt="" src={Logo} width="138.75" height="30" className="imgStyle" />
      {/* <img
        alt=""
        src={bellIcon}
        width="18"
        height="22.34"
        className="bellIcon"
      /> */}
      <div className="textsNav">
        <div className="textsTwo">
          <div className="newText"> JOHN DOE</div>
          <div className="newText2"> CLIENT ID : USER001</div>
        </div>
        <img alt="" src={Profie} width="30" height="30" className="Profile" />
      </div>
    </div>
  );
};

export default NavBar;

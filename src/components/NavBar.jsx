/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/Navbar-footer.css";
import Logo from "../assets/logo_trainery.png";
// import bellIcon from "../assets/Vector.png";
import Profie from "../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import Cookies from "universal-cookie";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
const NavBar = () => {
  const cookies = new Cookies();
  const history = useNavigate();
  const handleLogout = () => {
    cookies.remove("jwt_Auth");
    history("/");
  };

  const items = [
    {
      label: <strong>Hello John</strong>,
    },
    {
      type: "divider",
    },
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            console.log("View Profile Clicked");
          }}
        >
          View Profile
          {/* <Checkbox style={{ paddingLeft: "20px" }} /> */}
        </div>
      ),
      disabled: true,
    },
    {
      key: "2",
      label: (
        <div onClick={handleLogout}>
          Logout
          {/* <Checkbox style={{ paddingLeft: "29px" }} /> */}
        </div>
      ),
      icon: <SmileOutlined />,
    },
  ];

  return (
    <div className="container">
      <img alt="" src={Logo} width="138.75" height="30" className="imgStyle" />
      <div className="textsNav">
        <div className="textsTwo">
          <div className="newText"> JOHN DOE</div>
          <div className="newText2"> CLIENT ID : USER001</div>
        </div>
        <Dropdown menu={{ items }}>
          <img
            alt=""
            src={Profie}
            width="30"
            height="30"
            className="Profile"
            onClick={handleLogout}
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default NavBar;

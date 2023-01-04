/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/Navbar-footer.css";
import Logo from "../assets/logo_trainery.png";
// import bellIcon from "../assets/Vector.png";
import Profie from "../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { Menu, Dropdown } from "antd";

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
const NavBar = () => {
  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/");
  };

  // const items2 = (
  //   <Menu>
  //     <Menu.ItemGroup key="1" title="Hello user">
  //       <Menu.Item key="1">
  //         <div
  //           onClick={() => {
  //             console.log("View Profile Clicked");
  //           }}
  //         >
  //           View Profile
  //           {/* <Checkbox style={{ paddingLeft: "20px" }} /> */}
  //         </div>
  //       </Menu.Item>
  //       <Menu.Item key="2">
  //         <div onClick={handleLogout}>
  //           Logout
  //           {/* <Checkbox style={{ paddingLeft: "29px" }} /> */}
  //         </div>
  //       </Menu.Item>
  //     </Menu.ItemGroup>
  //   </Menu>
  // );

  const items = [
    {
      label: "Hello User",
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

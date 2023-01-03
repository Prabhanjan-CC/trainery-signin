import React, { useState } from "react";
import "./styles/sign-in-up.css";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo_trainery.png";
import Ellipse from "../assets/Ellipse5.png";
import Image1 from "../assets/image1.png";
import Union from "../assets/Union.png";
const NewSignUp = () => {
  const [email, setEmail] = useState("");
  //const [password,setPassword]=useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [acceptEmail, setAcceptEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  //

  const history = useNavigate();
  const home = () => {
    history("/");
  };

  const togglePasswordVisiblity = () => {
    setHidePassword(!hidePassword);
  };
  //
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
      setAcceptEmail(true);
    }

    setEmail(event.target.value);
  };

  const handleNext = () => {
    if (acceptEmail) {
      console.log("came here");
      setShowPassword(true);
    }
  };
  const handleSubmit = () => {};
  return (
    <div className="gg">
      <div className="main-co">
        <div className="cont">
          <div className="left">
            <img
              alt=""
              src={Logo}
              width="138.75"
              height="30"
              className="logo1"
            />
            <div className="signIn_text1">Sign up</div>
            <div className="text-para1">
              Enter the below details and create your own account.
            </div>
            <input
              placeholder="Orgnization Name"
              className="input-col-page2"
              onChange={handleChange}
              value={email}
              style={{}}
            />
            <input
              placeholder="Email address or mobile number"
              className="second-box"
              onChange={handleChange}
              value={email}
            />
            <div className="password-box">
              <input
                placeholder="Password"
                className="input-col21"
                type={hidePassword ? "text" : "password"}
              />
              <i
                className="fa fa-eye"
                aria-hidden="true"
                onClick={togglePasswordVisiblity}
              />
            </div>
            <button className="btn21" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div className="right">
            <img
              alt=""
              src={Union}
              width="77.48px"
              height="67px"
              className="img31"
            />
            <img
              alt=""
              src={Ellipse}
              width="150"
              height="150"
              className="img1"
            />
            <div className="para-text1">
              Growing your people,
              <br />
              growing your company, together
            </div>
            <img
              alt=""
              src={Image1}
              width="435.87px"
              height="146.78px"
              className="peopleImg"
            />
          </div>
        </div>
      </div>
      <div className="end-text1">
        To go back and Login{" "}
        <span style={{ color: " #295BDC", cursor: "pointer" }} onClick={home}>
          Click here
        </span>
        <button
          style={{ marginLeft: "1rem" }}
          onClick={() => history("/notifications")}
        >
          notification page
        </button>
      </div>
    </div>
  );
};

export default NewSignUp;

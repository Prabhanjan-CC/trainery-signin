import React, { useState, useEffect } from "react";
import "./styles/sign-in-up.css";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo_trainery.png";
import Ellipse from "../assets/Ellipse5.png";
import Image1 from "../assets/image1.png";
import Union from "../assets/Union.png";

import Axios from "../api/Axios";

const Newsignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [acceptEmail, setAcceptEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  //

  const history = useNavigate();

  const navigate = () => {
    history("/signup");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history("/notifications");
    }
  }, [history]);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const res = await Axios.post("/login/", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", res.data.token);
      history("/notifications");
    } catch (err) {
      console.log(err);
    }
  };

  // const handleSubmit2 = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("https://testapps.trainery.com/api/login/", {
  //       email: email,
  //       password: password,
  //     })
  //     .then((res) => {
  //       // localStorage.setItem("token", res.data.token);
  //       console.log(res);
  //     })
  //     .catch((err) => console.error(err));
  // };
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
            <div className="signIn_text1">Sign in</div>
            <div className="text-para1">
              One Trainery account for Everything eLearning and HR Solutions
            </div>
            <input
              placeholder="Email address or mobile number"
              className="input-col1"
              type={"email"}
              onChange={handleChange}
              value={email}
            />
            {!showPassword ? (
              <>
                <button className="btn1" onClick={handleNext}>
                  Next
                </button>

                <div className="forgot-text1">Forgot password?</div>
              </>
            ) : (
              <div>
                <div className="password-box">
                  <input
                    placeholder="Password"
                    className="input-col21"
                    type={hidePassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i
                    className="fa fa-eye"
                    aria-hidden="true"
                    onClick={togglePasswordVisiblity}
                  />
                </div>

                <button className="btn21" onClick={handleSubmit}>
                  Next
                </button>
                <div className="forgot-text21">Forgot password?</div>
              </div>
            )}
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
        Don't have an account?{" "}
        <span
          style={{ color: " #295BDC", cursor: "pointer" }}
          onClick={navigate}
        >
          Create account
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

export default Newsignin;

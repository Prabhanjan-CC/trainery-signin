import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/sign-in-up.css";
import Logo from "../assets/logo_trainery.png";
import Ellipse from "../assets/Ellipse5.png";
import Image1 from "../assets/image1.png";
import Union from "../assets/Union.png";
const SignIn = () => {
  const [email, setEmail] = useState("");
  //const [password,setPassword]=useState("");
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
    <div>
      <div className="mainContainer">
        <img alt="" src={Logo} width="138.75" height="30" className="logo" />
      </div>
      <img
        alt=""
        src={Ellipse}
        width="150"
        height="150"
        className="imgStyle2"
      />
      <div className="line"></div>
      <div className="signIn_text">Sign in</div>
      <div className="text-para">
        One Trainery account for Everything eLearning and HR Solutions
      </div>
      <input
        placeholder="Email address or mobile number"
        className="input-col"
        onChange={handleChange}
        value={email}
      />
      {!showPassword ? (
        <>
          <button className="btn" onClick={handleNext}>
            Next
          </button>
          <div className="forgot-text">Forgot password?</div>
        </>
      ) : (
        <div>
          <input
            placeholder="Password"
            className="input-col2"
            type={hidePassword ? "text" : "password"}
          />
          <div className="eyeIcon">
            <i
              className="fa fa-eye"
              aria-hidden="true"
              onClick={togglePasswordVisiblity}
            />
          </div>

          <button className="btn2" onClick={handleSubmit}>
            Next
          </button>
          <div className="forgot-text2">Forgot password?</div>
        </div>
      )}

      <div className="para-text">
        Growing your people,
        <br />
        growing your company, together
      </div>
      <img
        alt=""
        src={Image1}
        width="435.87px"
        height="146.78px"
        className="img2"
      />
      <div className="end-text">
        Don't have an account?{" "}
        <span
          style={{ color: " #295BDC", cursor: "pointer" }}
          onClick={navigate}
        >
          Create account
        </span>
      </div>
      <img alt="" src={Union} width="77.48px" height="67px" className="img3" />
      <button onClick={() => history("/notifications")}>
        notification page
      </button>
    </div>
  );
};

export default SignIn;
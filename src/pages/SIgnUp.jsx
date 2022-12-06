import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo_trainery.png";
import Ellipse from "../assets/Ellipse5.png";
import Image1 from "../assets/image1.png";
import Union from "../assets/Union.png";
import "./styles/sign-in-up.css";
// eslint-disable-next-line no-unused-vars
import SimpleImageSlider from "react-simple-image-slider";

const SIgnUp = () => {
  const history = useNavigate();
  const home = () => {
    history("/");
  };

  const [email, setEmail] = useState("");
  //const [password,setPassword]=useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [acceptEmail, setAcceptEmail] = useState(false);

  const [hidePassword, setHidePassword] = useState(false);

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

  const handleSubmit = () => {
    if (acceptEmail) {
      console.log("came here");
    }
  };
  // eslint-disable-next-line no-unused-vars
  const images = [
    { url: Image1 },
    { url: Image1 },
    { url: Image1 },
    { url: Image1 },
    { url: Image1 },
  ];
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
      <div className="signIn_text">Sign up</div>
      <div className="text-para">
        Enter the below details and create your own account.
      </div>
      <input
        placeholder="Orgnization Name"
        className="input-col"
        onChange={handleChange}
        value={email}
        style={{ top: "280px" }}
      />
      <input
        placeholder="Email address or mobile number"
        className="input-col"
        onChange={handleChange}
        value={email}
        style={{ top: "352px" }}
      />

      <div>
        <input
          placeholder="Password"
          className="input-col2"
          type={hidePassword ? "text" : "password"}
          style={{ top: "424px" }}
        />
        <div className="eyeIcon" style={{ top: "442px" }}>
          <i
            className="fa fa-eye"
            aria-hidden="true"
            onClick={togglePasswordVisiblity}
          />
        </div>

        <button className="btn-submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>

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
      {/* <SimpleImageSlider
        width={435.87}
        height={146.78}
        images={images}
        showBullets={true}
        showNavs={true}
        className="img2"
      /> */}
      <div className="end-text">
        To go back and Login{" "}
        <span style={{ color: " #295BDC", cursor: "pointer" }} onClick={home}>
          Click here
        </span>
      </div>
      <img alt="" src={Union} width="77.48px" height="67px" className="img3" />
    </div>
  );
};

export default SIgnUp;

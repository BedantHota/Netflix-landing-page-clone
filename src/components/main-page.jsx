import React, { useState } from "react";
// import * as bootstrap from "react-bootstrap";
import Heading from "./Heading";
import Input from "./input-component";

function Main() {
  return (
    <div className="fluid-container my-Cont ">
      <div className="header">
        <img
          alt="netflix-logo"
          className="netflix-logo"
          src="https://i.ibb.co/YkPRqPF/download-1.png"
        />
        <button className="signInBtn">Sign In</button>
      </div>
      <div className="heading">
        <center>
          <Heading
            className="firstHeading"
            text="Unlimited movies, TV shows and more."
            align="center"
            color="white"
          />
          <Heading
            className="secondHeading"
            text="Watch anywhere. Cancel at any time."
            align="center"
            color="white"
          />
          <Heading
            className="thirdHeading"
            text="Ready to watch? Enter your email to create or restart your membership."
            align="center"
            color="white"
          />
        </center>
      </div>
      <center>
        <Input inputName="firstInput" btnName="firstInput" id="first" />
      </center>
    </div>
  );
}

export default Main;

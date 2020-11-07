import React from "react";
import Heading from "./Heading";

function thirdMain() {
  const getScreenWidth = window.screen.width;

  return (
    <div className="section2">
      <div className="row">
        <div
          className={`col-lg-6 ${
            getScreenWidth <= 768 ? "order-first" : "order-last"
          }`}
        >
          <div className="textInRight">
            <Heading
              text="Download your shows to watch offline."
              className="headingRight"
            />
            <p className="headingPara">
              Save your favourites easily and always have
              <br />
              something to watch.
            </p>
          </div>
        </div>
        <div
          className={`col-lg-6 ${
            getScreenWidth <= 768 ? "order-last" : "order-first"
          }`}
        >
          <center>
            <img
              className="netflix-mob"
              src="https://i.ibb.co/yyTSNHH/mobile.png"
              alt="Netflix-On-Tv"
            />
          </center>
        </div>
      </div>
    </div>
  );
}

export default thirdMain;

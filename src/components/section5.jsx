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
          <div className="textInRight1">
            <center>
              <Heading
                text="Get the Netflix Kids experience."
                className="headingRight1"
              />
              <p className="headingPara1">
                Kids enjoy their favourites in profiles made just
                <br /> for them, and parental controls ensure they’re
                <br /> watching the right things.
              </p>
            </center>
          </div>
        </div>
        <div
          className={`col-lg-6 ${
            getScreenWidth <= 768 ? "order-last" : "order-first"
          }`}
        >
          <center>
            <img
              className="netflix-kids"
              src="https://i.ibb.co/TcPM5gB/default.jpg"
              alt="Netflix-Kids"
            />
          </center>
        </div>
      </div>
    </div>
  );
}

export default thirdMain;

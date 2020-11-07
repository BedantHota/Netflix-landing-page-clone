import React from "react";
import Heading from "./Heading";

function secondMain() {
  return (
    <div className="section2">
      <div className="row">
        <div className="col-lg-6 order-first">
          <div className="textInGrid">
            <Heading text="Enjoy on your TV." className="size-lg" />
            <p className="size-md">
              Watch on smart TVs, Playstation, Xbox, Chromecast,
              <br /> Apple TV, Blu-ray players and more.
            </p>
          </div>
        </div>
        <div className="col-lg-6 order-last">
          <center>
            <img
              className="netflix-tv"
              src="https://i.ibb.co/02rqbWG/Untitled-design.png"
              alt="Netflix-On-Tv"
            />
          </center>
        </div>
      </div>
    </div>
  );
}

export default secondMain;

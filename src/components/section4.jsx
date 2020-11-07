import React from "react";
import Heading from "./Heading";

function secondMain() {
  return (
    <div className="section2">
      <div className="row">
        <div className="col-lg-6">
          <div className="textInGrid">
            <Heading text="Enjoy everywhere." className="size-lg" />
            <p className="size-md">
              Stream unlimited movies and TV shows on <br />
              your phone, tablet, laptop, and TV.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <center>
            <img
              className="netflix-all"
              src="https://i.ibb.co/HttwWvS/Untitled-design.png"
              alt="Netflix-On-Tv"
            />
          </center>
        </div>
      </div>
    </div>
  );
}

export default secondMain;

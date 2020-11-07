import React from "react";

function Collapse(props) {
  // const [isClicked, setClick] = useState(false);
  return (
    <center>
      <div>
        <p>
          <button
            className="collapse-btn"
            type="button"
            data-toggle="collapse"
            data-target={"#" + props.dataTarget}
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <p className="text">{props.question}</p>
            <img
              id="icon-plus"
              src="https://i.ibb.co/2PHMzYS/icons8-plus-24.png"
              className="plus-icon"
              alt="plus-icon"
            />
          </button>
        </p>
        <div className="collapse" id={props.dataTarget}>
          <div
            style={{ height: props.height }}
            className="card card-body collapse-msg"
          >
            {props.text}
          </div>
        </div>
      </div>
    </center>
  );
}

export default Collapse;

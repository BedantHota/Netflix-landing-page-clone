import React from "react";

function Heading(props) {
  return (
    <p
      className={props.className}
      style={{
        textAlign: props.align,
        color: props.color
      }}
    >
      {props.text}
    </p>
  );
}

export default Heading;

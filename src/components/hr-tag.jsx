import React from "react";

function HR(props) {
  return (
    <hr
      className={props.class}
      style={{
        height: props.height,
        borderWidth: "0",
        color: props.color,
        backgroundColor: props.bg
      }}
    />
  );
}

export default HR;

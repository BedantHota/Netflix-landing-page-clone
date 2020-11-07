import React, { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Input(props) {
  const [email, setEmail] = useState("");
  const [isDisplay, setDisplay] = useState(false);
  const [isValid, setValidity] = useState(false);

  function getChange(event) {
    const emailInput = event.target.value;
    setEmail(emailInput);
    checkValidation(emailInput);
  }

  function checkValidation(emailInput) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setValidity(true);
    } else {
      setValidity(false);
    }
  }

  function displayText(btn, input) {
    if (btn === input) {
      setDisplay(isValid ? false : true);
    } else {
      setDisplay(false);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    const btnName = e.target.name;
    const inputName = document.getElementById(props.id).name;
    displayText(btnName, inputName);
  }

  return (
    <div className="first-top input-item row">
      <form>
        <input
          id={props.id}
          name={props.inputName}
          value={email}
          placeholder="Email address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className="input"
          onChange={getChange}
          style={{ borderBottom: isDisplay ? "2px solid #ffa00a" : "none" }}
        />

        <button
          className="startBtn"
          type="submit"
          name={props.btnName}
          onClick={handleClick}
        >
          GET STARTED <ArrowForwardIosIcon />
        </button>
        <br />
        <p
          className="hidden-message"
          style={{ visibility: isDisplay ? "visible" : "hidden" }}
        >
          Email is not valid.
        </p>
      </form>
    </div>
  );
}

export default Input;

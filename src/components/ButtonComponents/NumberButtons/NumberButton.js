import React from "react";
import {numbers} from "../../../data"

const NumberButton = (props) => {
  const {number} = props;
  return (
    <div className = "number-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {number}
    </div>
  )
};

export default NumberButton;
import React from "react";

export default function OperatorButton(props) {
  const {operator} = props;
  return (
    <button className = "operator-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    {operator}
    </button>
  );
};

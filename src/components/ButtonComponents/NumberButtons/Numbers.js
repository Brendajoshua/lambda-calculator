import React from "react";

//import any components needed
import NumberButton from "./NumberButton"
//Import your array data to from the provided data file
import { data } from "../../../data"

const Numbers = () => {
  // STEP 2 - add the imported data to state
  return (
    <div className = "numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         data.numbers.map(number =>
          <NumberButton
          key={number}
          number = {number}
          />
          )
       }
    </div>
  
  );
};

export default Numbers;
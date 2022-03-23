import React, { useState } from "react";
import "./InputBox.css";

import "../../Screens/SignupPages/Signup.css";

export const InputBox = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  const [textValue, setTextValue] = useState("");

  const focusHandler = () => {
    setIsFocus(true);
  };

  const blurHandler = () => {
    textValue.length ? setIsFocus(true) : setIsFocus(false);
  };

  const changeHandler = (e) => {
    setTextValue(e.target.value);
    // State lift up
    props.getData(e.target.value);
  };

  return (
    <div className="input_box">
      <label
        className={`input_box_label ${isFocus && "focus"} text-md`}
        htmlFor={props.idValue}
      >
        {props.title}
        {props.required ? <span className={"fg-danger"}> *</span> : <></>}
      </label>
      <input
        onFocus={focusHandler}
        onBlur={blurHandler}
        className="input-field"
        value={textValue}
        onChange={changeHandler}
        id={props.idValue}
        type={props.type}
        required={props.required}
      />
    </div>
  );
};

export const SelectBox = (props) => {
  return (
    <div className="form-item">
      <label htmlFor={props.for} className="text-md">
        {props.label}
        <span className="fg-danger"> *</span>
      </label>
      <select
        value={props.value}
        name={props.for}
        id={props.for}
        className="input-field"
        onChange={(e) => {
          props.onChange(e);
        }}
        // defaultValue={props.default}
        required
      >
        <option value="" disabled selected>
          {props.default}
        </option>
        {props.options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      {/* </div> */}
    </div>
  );
};

export default InputBox;

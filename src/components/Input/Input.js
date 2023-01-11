import React from "react";
import "./Input.css";

export const Input = (props) => {
  const { size = "medium", ...rest } = props;
  return <input type="text" className={`input ${size}`} {...rest} />;
};

import React from "react";
import "./Alert.css";

const Alert = (props) => {
  return (
    <>
      <div className="alert alert-success">
        {props.message}
      </div>
    </>
  );
};

export default Alert;

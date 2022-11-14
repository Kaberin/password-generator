import React, { useRef } from "react";
import "./Functional.scss";
import Button from "./Button/Button";
import InputRange from "./InputRange/InputRange";
import Checkboxes from "./Checkboxes/Checkboxes";
function Functional(props) {
  const alertRef = useRef(null);
  function write() {
    navigator.clipboard.writeText(props.password).then(() => {
      if (props.password === "Select length and security") {
        return;
      }
      alertRef.current.classList.add("show");
      setTimeout(() => {
        alertRef.current.classList.remove("show");
      }, 1000);
    });
    props.writeHistory();
  }
  return (
    <div className="functional">
      <h4 className="alert" ref={alertRef}>
        Copied!
      </h4>
      <div className="functional__clipboard">
        <p className="functional__password">{props.password}</p>
      </div>
      <Button write={write} />
      <InputRange setLength={props.setLength} />
      <Checkboxes
        generatePassword={props.generatePassword}
        length={props.length}
      />
    </div>
  );
}

export default Functional;

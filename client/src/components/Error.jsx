import React from "react";
import "./styles/error.css";
import bg from "./images/err2.gif";

export default function Error() {
  return (
    <div>
      <div className="continer">
        <img className="err-anim mx-auto d-flex img-fluid" src={bg} alt="" />
        <div id="info"></div>
      </div>
    </div>
  );
}

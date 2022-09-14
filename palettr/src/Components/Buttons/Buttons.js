import React from "react";
import "./Buttons.css";

export default function Buttons() {
  return (
    <section>
      <div className="buttonsContainer">
        <button className="button">{"<3"}</button>
        <button className="button">{"</3"}</button>
      </div>
      <div className="shuffleContainer">

      <button className="button shuffle">
        Shuffle!
      </button>
      </div>
    </section>
  );
}

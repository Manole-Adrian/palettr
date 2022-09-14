import React from "react";
import "./Buttons.css";

export default function Buttons(props) {
  function handleClick() {
    const randCol = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    fetch(
      `https://www.thecolorapi.com/scheme?rgb=rgb(${randCol[0]},${randCol[1]},${randCol[2]})&mode=quad`
    )
      .then((res) => res.json())
      .then((result) => props.setColorsArr(result.colors));
  }
  console.log(props.colorsArr[0]);
  return (
    <section>
      <div className="buttonsContainer">
        <button
          className="button"
          onClick={handleClick}
          style={{
            backgroundColor: props.colorsArr[0].hex.value,
            color: props.colorsArr[4].hex.value,
          }}
        >
          {"</3"}
        </button>
        <button
          className="button"
          onClick={handleClick}
          style={{
            backgroundColor: props.colorsArr[4].hex.value,
            color: props.colorsArr[0].hex.value,
          }}
        >
          {"<3"}
        </button>
      </div>
      <div className="shuffleContainer">
        <button className="button shuffle" style={{
            backgroundColor: props.colorsArr[1].hex.value,
            color: props.colorsArr[3].hex.value,
          }}>Shuffle!</button>
      </div>
    </section>
  );
}

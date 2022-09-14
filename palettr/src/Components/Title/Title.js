import React from "react";
import "./Title.css";

export default function Title(props) {
  return (
    <div className="titleContainer">
      <h1 className="title" style={{
            backgroundColor: props.colorsArr[0].hex.value,
            color: props.colorsArr[4].hex.value,
          }}>PalettR</h1>
      <h2 className="subtitle" style={{
            backgroundColor: props.colorsArr[4].hex.value,
            color: props.colorsArr[0].hex.value,
          }}>Your Colour Palette Swiper</h2>
    </div>
  );
}

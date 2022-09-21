import React from "react";
import "./LikedPage.css";

export default function LikedPage(props) {
  return (
    <ul className="likedContainer" >
        {props.likedPalettes.map((colorsArr,index) => {
            return (<li className={`likedPaletteContainer`} style={{animationDelay:(index*100).toString+"ms"}}>{colorsArr.map((color) => {
                return (
                  <div
                    className="likedColor"
                    style={{ backgroundColor: color.hex.value }}
                  >
                    {" "}
                  </div>
                );
              })}</li>)
        })}

    </ul>  
  );
}

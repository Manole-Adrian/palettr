import React from "react";
import "./Menubar.css";

import ShowButton from "./Showbutton/Showbutton";

export default function Menubar(props) {

    const [isHidden, setHidden] = React.useState(false)

  return <nav className="menubarContainer" style={{top:isHidden ? "0rem"  : "-4rem"}}>
    <ul className="menubar">
        <li>View Liked</li>
        <li>Change Mode</li>
        <li>
            <ul className="paletteContainer">
                <div className="curPalette"> Current Palette: </div>
                {props.colorsArr.map(color => {
                    return (<li className="color" style={{backgroundColor: color.hex.value}}> </li>)
                })}
                
            </ul>
        </li>
    </ul>
    <ShowButton setHidden={setHidden} isHidden = {isHidden}/>
  </nav>;
}

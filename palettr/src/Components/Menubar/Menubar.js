import React from "react";
import "./Menubar.css";

import ShowButton from "./Showbutton/Showbutton";

export default function Menubar() {

    const [isHidden, setHidden] = React.useState(false)

  return <nav className="menubarContainer" style={{top:isHidden ? "0rem"  : "-4rem"}}>
    <ul className="menubar">
        <li>View Liked</li>
        <li>Change Text Color</li>
    </ul>
    <ShowButton setHidden={setHidden} isHidden = {isHidden}/>
  </nav>;
}

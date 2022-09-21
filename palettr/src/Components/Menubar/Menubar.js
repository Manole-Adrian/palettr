import React from "react";
import "./Menubar.css";

import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import ShowButton from "./Showbutton/Showbutton";

export default function Menubar(props) {
  const [isHidden, setHidden] = React.useState(false);

  function handleChange(event) {
    props.setPaletteMode(event.target.value);
  }

  function handleClick() {
    props.setViewLiked((prev) => !prev);
  }

  return (
    <nav
      className="menubarContainer"
      style={{ top: isHidden ? "0rem" : "-4rem" }}
    >
      <ul className="menubar">
        <li>
          <Button variant="outlined" color="inherit" onClick={handleClick}>
            View Liked
          </Button>
        </li>
        <li>
          <FormControl fullwidth className="changeModeForm" size="small">
            <InputLabel id="change-mode">Change Mode</InputLabel>
            <Select
              autowidth
              labelId="change-mode"
              value={props.paletteMode}
              label="Change Mode"
              onChange={handleChange}
            >
              <MenuItem value={"monochrome"}>Monochrome</MenuItem>
              <MenuItem value={"monochrome-dark"}>Monochrome Dark</MenuItem>
              <MenuItem value={"monochrome-light"}>Monochrome Light</MenuItem>
              <MenuItem value={"analogic"}>Analogic</MenuItem>
              <MenuItem value={"complement"}>Complement</MenuItem>
              <MenuItem value={"analogic-complement"}>
                Analogic-Complement
              </MenuItem>
              <MenuItem value={"triad"}>Triad</MenuItem>
              <MenuItem value={"quad"}>Quad</MenuItem>
            </Select>
          </FormControl>
        </li>
        <li>
          <ul className="paletteContainer">
            <div className="curPalette"> Current Palette: </div>
            {props.colorsArr.map((color) => {
              return (
                <li
                  className="color"
                  style={{ backgroundColor: color.hex.value }}
                >
                  {" "}
                </li>
              );
            })}
          </ul>
        </li>
        <div className="menubarSubtitleContainer">
        <h2 className="menubarSubtitle">Created by Manole Adrian</h2>
        <h3 className="menubarInfo">using the color API</h3>
        </div>
      </ul>
      <ShowButton setHidden={setHidden} isHidden={isHidden} />
    </nav>
  );
}

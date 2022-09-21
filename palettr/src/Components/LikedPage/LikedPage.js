import React from "react";
import "./LikedPage.css";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VisibilityIcon from '@mui/icons-material/Visibility';

import Snackbar from '@mui/material/Snackbar';

export default function LikedPage(props) {
  const [page, setPage] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);
  };

  function movePage(incr) {
    if (incr === -1 && page === 0) {
      return;
    } else if (
      incr === 1 &&
      page ===
        (props.likedPalettes.length % 12 === 0
          ? props.likedPalettes.length / 12 - 1
          : Math.floor(props.likedPalettes.length / 12))
    ) {
      return;
    }
    setPage((prev) => prev + incr);
  }

  function removePalette(palette) {
    props.setLikedPalettes(prevArr => {
      let newArr = []
      newArr = prevArr.filter(el => el !== palette)
      return newArr;
    })
  }

  function setCurPalette(palette) {
    props.setColorsArr(palette)
  }

  function copyToClipboard(code) {
    navigator.clipboard.writeText(code)
    handleClick()
  }

  return (
    <section>
      <ul className="likedContainer">
        {props.likedPalettes.map((colorsArr, index) => {
          if (index >= page * 12 && index < page * 12 + 12)
            return (
              <li
                className={`likedPaletteContainer`}
                style={{
                  animationDuration:
                    (300 + (index % 12) * 50).toString() + "ms",
                }}
                
              >
                {colorsArr.map((color) => {
                  return (
                    <div
                      className="likedColor"
                      style={{ backgroundColor: color.hex.value }}
                      onClick={() => copyToClipboard(color.hex.clean)}
                    >
                      {" "}
                    </div>
                  );
                })}
                <button onClick={() => {removePalette(colorsArr)}} className="viewButton deleteButton">
                  <DeleteOutlineIcon />
                </button>
                <button onClick={() => {setCurPalette(colorsArr)}} className="viewButton changeButton">
                  <VisibilityIcon />
                </button>
              </li>
            );
        })}
      </ul>
      <div className="pageButtonContainer">
        <button
          style={{
            backgroundColor: props.colorsArr[0].hex.value,
            color: props.colorsArr[4].hex.value,
          }}
          onClick={() => movePage(-1)}
          className={`pageButton ${page === 0 ? "disabled" : ""}`}
        >
          {"<"}
        </button>
        <button
          style={{
            backgroundColor: props.colorsArr[0].hex.value,
            color: props.colorsArr[4].hex.value,
          }}
          onClick={() => movePage(1)}
          className={`pageButton ${
            page ===
            (props.likedPalettes.length % 12 === 0
              ? props.likedPalettes.length / 12 - 1
              : Math.floor(props.likedPalettes.length / 12))
              ? "disabled"
              : ""
          }`}
        >
          {">"}
        </button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={1200}
        onClose={handleClose}
        message="Copied to clipboard!"
      />
    </section>
  );
}

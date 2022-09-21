import React from "react";
import "./Buttons.css";

export default function Buttons(props) {
  function handleClick(isLike) {
    if (isLike === "like") {
      props.setLikedPalettes((prevArr) => {
        const newArr = []
        prevArr.forEach(el => {
          newArr.push(el)
        })
        newArr.push(props.colorsArr);
        return newArr;
      });
    }
    const randCol = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    fetch(
      `https://www.thecolorapi.com/scheme?rgb=rgb(${randCol[0]},${randCol[1]},${randCol[2]})&mode=${props.paletteMode}`
    )
      .then((res) => res.json())
      .then((result) => props.setColorsArr(result.colors));
  }

  function shuffle() {
    console.log("Shuffled!");
    props.setColorsArr((array) => {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      const newArray = [];
      array.forEach((el) => {
        newArray.push(el);
      });
      return newArray;
    });
  }

  console.log(props.colorsArr[0]);
  return (
    <section>
      <div className="buttonsContainer">
        <button
          className="button"
          onClick={() => {
            handleClick("dislike");
          }}
          style={{
            backgroundColor: props.colorsArr[0].hex.value,
            color: props.colorsArr[4].hex.value,
          }}
        >
          {"</3"}
        </button>
        <button
          className="button"
          onClick={() => {
            handleClick("like");
          }}
          style={{
            backgroundColor: props.colorsArr[4].hex.value,
            color: props.colorsArr[0].hex.value,
          }}
        >
          {"<3"}
        </button>
      </div>
      <div className="shuffleContainer">
        <button
          className="button shuffle"
          style={{
            backgroundColor: props.colorsArr[1].hex.value,
            color: props.colorsArr[3].hex.value,
          }}
          onClick={shuffle}
        >
          Shuffle!
        </button>
      </div>
    </section>
  );
}

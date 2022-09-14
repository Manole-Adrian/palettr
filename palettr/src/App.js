import "./App.css";
import Title from "./Components/Title/Title";
import Menubar from "./Components/Menubar/Menubar";
import Buttons from "./Components/Buttons/Buttons";
import React from "react";

function App() {
  const randCol = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];
  const [colorsArr, setColorsArr] = React.useState([])
  const [responseCode, setResponseCode] = React.useState(0)
  React.useEffect(() => {
    fetch(
      `https://www.thecolorapi.com/scheme?rgb=rgb(${randCol[0]},${randCol[1]},${randCol[2]})`
    )
      .then((res) => res.json())
      .then((result) => {
        setResponseCode(result.code ? -1 : 1)
        setColorsArr(result.colors)});
  }, []);
  return (
    <div className="App"  style={{backgroundColor: responseCode === 1 ? colorsArr[2].hex.value : "gray", height:"100vh"}}>
      <Menubar colorsArr = {colorsArr} />
      {responseCode === 1 && <Title colorsArr={colorsArr} />}
      {responseCode === 1 && <Buttons setColorsArr = {setColorsArr} colorsArr = {colorsArr} />}
    </div>
  );
}

export default App;

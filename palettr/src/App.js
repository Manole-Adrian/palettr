import './App.css';
import Title from "./Components/Title/Title"
import Menubar from "./Components/Menubar/Menubar"
import Buttons from "./Components/Buttons/Buttons"


function App() {
  return (
    <div className="App">
      <Menubar />
      <Title />
      <Buttons />
    </div>
  );
}

export default App;

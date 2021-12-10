import ReactDOM from "react-dom";
import "./reset.css"
import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";

function App(){
  return (
    <>
    <GameScreen />
    </>
  )
}

ReactDOM.render(<App /> , document.querySelector(".root"))
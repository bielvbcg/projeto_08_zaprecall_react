import ReactDOM from "react-dom";
import "./reset.css"
import StartScreen from "./StartScreen";


function App(){
  return (
    <>
      <StartScreen></StartScreen>
    </>
  )
}

ReactDOM.render(<App /> , document.querySelector(".root"))
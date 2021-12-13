import ReactDOM from "react-dom";
import React from "react";

import "./reset.css"

import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";
import SucessScreen from "./SucessScreen";
import FailureScreen from "./FailureScreen"

function App(){
  const [screen , setScreen] = React.useState(0)

  return (
    <>
      {screen === 0 ? <StartScreen setScreen={setScreen} /> :  
      screen === 1 ? <GameScreen setScreen={setScreen}/> : 
      screen === 2 ? <SucessScreen /> :
      screen === 3 ? <FailureScreen /> : ""}
    </>
  )
}

ReactDOM.render(<App /> , document.querySelector(".root"))
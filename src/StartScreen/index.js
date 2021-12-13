import "./style.css"
import logo from "../assets/logo.png"
import next from "../assets/next.png"

export default function StartScreen({setScreen}){
  return (
    <>
      <div className="startScreen">
        <div><img src={logo} alt="ZapRecall" /></div>

        <button onClick={() => setScreen(1) }>
          <p>Praticar React</p>
          <img src={next} />
        </button>
      </div>
    </>
  )
}
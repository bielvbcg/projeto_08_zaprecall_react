import "./style.css"
import logo from "../assets/logo.png"
import next from "../assets/next.png"

export default function StartScreen(){
  return (
    <>
      <div className="startScreen">
        <div><img src={logo} alt="ZapRecall" /></div>
        <button>
          <p>Praticar React</p>
          <img src={next} />
        </button>
      </div>
    </>
  )
}
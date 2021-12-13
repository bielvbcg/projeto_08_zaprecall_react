import "./style.css"

import miniLogo from "../assets/logo-mini.png"
import sad from "../assets/sad.png"


export default function FailureScreen(){
  return (
    <div className="gameScreen">

      <div className="miniLogo"><img src={miniLogo} alt="ZapRecall" /></div>
      <div className="sucesso">
        <h1>Putz..<img src={sad} alt="emoji triste com vc por n ter dado uma no " /></h1> <br />
      <span>Você esqueceu alguns flashcards..Não desanime! Na próxima você consegue!</span>
      </div>

    </div>
  )
}
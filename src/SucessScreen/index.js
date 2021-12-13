import "./style.css"
import miniLogo from "../assets/logo-mini.png"
import festa from "../assets/party.png"

export default function SucessScreen(){
  return (
    <div className="gameScreen">

      <div className="miniLogo"><img src={miniLogo} alt="ZapRecall" /></div>
      <div className="sucesso">
        <h1>PARABÉNS! <img src={festa} alt="emoji sorrindo fazendo festa" /></h1> <br />
        <span>Você não esqueceu de nenhum flashcard!</span>
      </div>

    </div>
  )
}
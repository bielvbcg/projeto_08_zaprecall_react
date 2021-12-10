import "./style.css"
import miniLogo from "../assets/logo-mini.png"

export default function GameScreen(){
  return (
    <>
      <div className="gameScreen">
        <div className="miniLogo"><img src={miniLogo} alt="ZapRecall" /></div>
        
        <div className="flashCard">

          <div className="cardNumber">1/8</div>
          <h1>O que é JSX?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt deserunt necessitatibus vitae, eveniet fugit ratione, inventore asperiores ducimus nesciunt quam a. Architecto, corporis suscipit?</p>
          <Respostas />
          
        </div>
      </div>
    </>
  )
}

function Respostas(){
  return (
    <>
      <ul className="respostas">
        <li className="aprendiAgora">Aprendi <br />agora</li>
        <li className="naoLembrei">Não <br />lembrei</li>
        <li className="comEsforço">Lembrei com esforço</li>
        <li className="zap">Zap!</li>
      </ul>
    </>
  )
}
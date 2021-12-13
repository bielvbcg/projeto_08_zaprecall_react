import React from "react"
import "./style.css"
import miniLogo from "../assets/logo-mini.png"
import turn from "../assets/turn.png"

const cards = [
  { pergunta: "O que é JSX?" , resposta: "Uma extensão de linguagem do JavaScript"},
  { pergunta: "O React é ___", resposta: "uma biblioteca JavaScript para construção de interfaces"},
  { pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
  { pergunta: "Podemos colocar __ dentro do JSX" , resposta: "expressões"},
  { pergunta: "O ReactDOM nos ajuda __ ", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
  { pergunta: "Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências"},
  { pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes"},
  { pergunta: "Usamos estado(state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
]

let zaps = 0;

export default function GameScreen({setScreen}){
  const [cardAtual , setCardAtual] = React.useState(0)

  return (
      <div className="gameScreen">

        <div className="miniLogo"><img src={miniLogo} alt="ZapRecall" /></div>
        <FlashCard 
          card={cards[cardAtual]}
          cardAtual={cardAtual}
          setCardAtual={setCardAtual}
          setScreen={setScreen}
        />

      </div>
  )
}

function FlashCard({ card: {pergunta , resposta} , cardAtual , setCardAtual , setScreen}) {
  const [flipped , setFlipped] = React.useState(false)
  const [choice , setChoice] = React.useState(0)

  function turnButtom(){
    if(choice === 0) setFlipped(true)

    else if(cardAtual < cards.length - 1){
      setCardAtual(cardAtual + 1)
      setChoice(0)
    }

    else if(zaps === cards.length){
      setScreen(2)
    }

    else setScreen(3)
  }

  return (
    <div data-identifier="flashcard" className={`${flipped ? "flashCard" : "flashCard cartaFrente"} ${choice === 1 ?  "aprendiAgora" : choice === 2 ? "naoLembrei" : choice === 3 ? "comEsforço" : choice === 4 ? "zap" : ""}`}>

      <div data-identifier="counter" className="cardNumber" >{cardAtual + 1}/8</div>

        <h1>{pergunta}</h1>
        <p>{flipped && resposta}</p>
        {flipped && <Respostas setChoice={setChoice} setFlipped={setFlipped}/> }

      {!flipped && <div className="turn" data-identifier="start-zap-recall" onClick={() => turnButtom()}><img data-identifier="arrow" src={turn} alt="Setinha pra direita" /></div>}

      </div>
  )
}

function Respostas({setChoice , setFlipped}){
  return (
      <ul className="respostas" >
      <li className="aprendiAgora" onClick={() => {setChoice(1); setFlipped(false) }}>Aprendi agora</li>
      <li className="naoLembrei" onClick={() => { setChoice(2); setFlipped(false)}}>Não lembrei</li>
      <li className="comEsforço" onClick={() => { setChoice(3); setFlipped(false)}}>Lembrei com esforço</li>
      <li className="zap" onClick={() => { setChoice(4); setFlipped(false); zaps++}}>Zap!</li>
      </ul>
  )
}
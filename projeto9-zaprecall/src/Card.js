import styled from 'styled-components';
import React from "react"
import setavirar from "./assets/img/seta_virar.png"
import Icones from "./Icones"

function Card({ title, index, tapCard, status }) {
    return (
      <Cartao>
        <div className={`${status}`} onClick={() => tapCard(index)}>
        {title}
        <Icones status={status}/>
      </div>
      </Cartao>
      
    );
  }
  
  function CardComPergunta({ questoes, respostas, index, marcacoes }) {
    const [virou, setVirou] = React.useState(false)
    return (
        <>
        {!virou ? 
            (<CartaoAberto>
                {questoes} 
                <img src={setavirar} alt="" onClick={() => setVirou(true)}/>
            </CartaoAberto>) 
            : 
            <CartaoRespostas>
                {respostas}
                <Botao>
                    <button className="naolembrei" onClick={() => marcacoes(index, 'erro')}>Não lembrei</button>
                    <button className="quaselembrei" onClick={() => marcacoes(index, 'quase')}>Quase não lembrei!</button>
                    <button className="zap" onClick={() => marcacoes(index, 'certo')}>Zap!</button>
                </Botao>
                
            </CartaoRespostas>}
        </>
    )
  }
  
  export default function FlashCard({ title, tap, index, tapCard, questoes, respostas, status, marcacoes}) { 
    return (
      <>
        {!tap ? (
          <Card key={index} title={title} index={index} tapCard={tapCard} status={status} /> 
        ) : (
          <CardComPergunta questoes={questoes} respostas={respostas} marcacoes={marcacoes} index={index} />
        )}
      </>
    );
  }

  const Cartao = styled.div`
        width: 300px;
        height: 50px;
        display: flex;
        justify-content: space-around;
        text-align: center
        align-items: center;
        background-color: white;
        color: black;
        border-radius: 5px;
        margin: 10px 0px;
        padding: 10px 10px;
        cursor: pointer;
        font-family: "Recursive", cursive;
        flex-direction: column;
  `

  const CartaoAberto = styled.div`
        width: 300px;
        height: 131px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        color: black;
        border-radius: 5px;
        margin: 10px 0px;
        padding: 10px 10px;
        cursor: pointer;
        font-family: "Recursive", cursive;
        flex-direction: column;
  `

  const CartaoRespostas = styled.div
  `
  width: 300px;
  height: 131px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: "Recursive", cursive;
  flex-direction: column;
  `
  const Botao = styled.div`
  button{
    width: 86px;
    height: 38px;
    color: white;
    font-family: recursive;
    font-weight: 400;
    font-size: 12px;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    justify-content: space-around;
    border-radius: 4px;
    margin-right: 10px;
    
  }
  button:hover {
    filter: brightness(0.7);
  }
  .naolembrei{
    background-color: #FF3030;
  }
  .quaselembrei{
    background-color:#FF922E;
  }
  .zap{
    background-color: #2FBE34;
  }`

  
import React from "react";
import Deck from "./Deck";
import logo from "./assets/img/logo.png";
import Card from "./Card";
import styled from 'styled-components';
import Icones from "./Icones"


console.log(Deck);

let pergunta = Deck.map((value) => {
  return {
    ...value,
    tap: false,
    status: 'play',
  };
});
pergunta = pergunta.sort(() => Math.random() - 0.5)

export default function Questoes() {
  const [questoes, setQuestoes] = React.useState(pergunta);
  const [respostas, setRespostas] = React.useState(0);

  function tapCard(cardI) {
    let perguntaMarcada = questoes.map((value, index) => {
      if (index === cardI) {
        return {
          ...value,
          tap: true,
        };
      } else {
        return {
          ...value,
          tap: false
        };
      }
    });
    setQuestoes([...perguntaMarcada]);
  }

  function marcacoes(cardI, status) {
    let perguntaMarcada = questoes.map((value, index) => {
      if (index === cardI) {
        return {
          ...value,
          tap: false,
          status: status,
        };
      } else {
        return {
          ...value,
          tap: false
        };
      }
    });
    setQuestoes([...perguntaMarcada]);
    setRespostas(respostas+1);
  }


  return (
    <div className="deck">
      <Topo>
        <img src={logo} alt="" />
        <h1>Zap Recall</h1>
      </Topo>
      <Conteudo>
        {questoes.map((value, index) => (
          <Card
            key = {index}
            title={`Pergunta ${index + 1}`}
            tap={value.tap}
            index={index}
            tapCard={tapCard}
            questoes={value.questao}
            respostas={value.resposta}
            status={value.status}
            marcacoes={marcacoes}
          />
        ))}
      </Conteudo>
      <Rodape>
        <div className="conclusao">{respostas}/{questoes.length} CONCLUÍDOS!</div>
        <div className="ajuste">
        { questoes.map (value => {
          if (value.status !== 'play') {
            return <Icones status={value.status} />
          }
        })}
        </div>
      </Rodape>
    </div>
  );
}

const Topo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    z-index: 1;
    position: fixed:
    top: 0;
    left: 0;
    img {
        width: 52px;
        height: 60px;
        margin-right: 25px;
    }

    h1{
        font-family: Righteous;
        font-size: 36px;
        display: flex;
        font-weight: 400;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: #ffffff;
    }
`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    .card {
        width: 300px;
        height: 65px;
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
      }
`

const Rodape = styled.div `
    z-index: 1;
    background-color: white;
    display: flex;
    heigth: 400px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size:28px;
    font-family: 'Recursive';
    flex-direction: column;
    justify-content: center;
    text-align: center

   .conclusao{
    display: flex;
    align-items: center;
    text-align: center;
   }

   .ajuste{

   }
`
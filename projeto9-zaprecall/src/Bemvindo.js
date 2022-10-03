import Logo from "./assets/img/logo.png";
import styled from 'styled-components';

export default function Bemvindo({ setVisible }) {
  return (
    <Bemvinde>
      <img src={Logo} alt="Zap Recall!" />
      <h1>ZapRecall</h1>
      <button onClick={() => setVisible(false)}> Iniciar Recall!</button>
    </ Bemvinde>
  );
}

const Bemvinde = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    justify-content: space-between;
    margin-top: 40px;

    h1 {
        font-family: Righteous;
        font-size: 36px;
        display: flex;
        font-weight: 400;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: #ffffff;
    }

    button {
        font-size: 20px;
        width: 246px;
        height: 54px;
        background: #ffffff;
        border: 1px solid #d70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: Recursive;
        color: #d70900;
        cursor: pointer;
      }
`
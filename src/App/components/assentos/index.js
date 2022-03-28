import Footer from "../footer";
import { useState } from "react";
import styled from "styled-components";
import { RenderizaAssentos } from "./assentos";
function Assentos() {
  const [assentos,setAssentos] = useState([])
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState(0)
  function enviarDados(event) {
    event.preventDefault()
    console.log ({
      assentos:assentos,
      nome:nome,
      cpf:cpf
    })
  }
  return (
    <Main>
      <form onSubmit={enviarDados}>
      <RenderizaAssentos setAssentos={setAssentos} assentos={assentos}/>
      <SectionDetails>
        <AssentoDetailSelecionado>
          <h3>Selecionado</h3>
        </AssentoDetailSelecionado>
        <AssentoDetailDisponivel>
          <h3>Disponível</h3>
        </AssentoDetailDisponivel>
        <AssentoDetailIndisponivel>
          <h3>Indisponível</h3>
        </AssentoDetailIndisponivel>
      </SectionDetails>
      <InputNome>
        <h3>Nome do comprador:</h3>
        <input  type="text" placeholder="Digite seu nome..." onChange={e => setNome(e.target.value)} required></input>
      </InputNome>
      <InputCPF>
        <h3>CPF do comprador:</h3>
        <input  type="text" placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)} required></input>
      </InputCPF>
      <SectionReservar>
        <button className="reservar" type="submit">
          <h3>Reservar assento(s)</h3>
        </button>
      </SectionReservar>
      </form>
      <Footer />
    </Main>
  );
}

const AssentoDetailSelecionado = styled.div`
  background: #8dd7cf;
  margin: 0 37px;
  border-radius: 50px;
  width: 26px;
  height: 26px;
  display:flex;
  justify-content:center;
`;
const AssentoDetailDisponivel = styled.div`
  background: #c3cfd9;
  margin: 0 37px;
  border-radius: 50px;
  width: 26px;
  height: 26px;
  display:flex;
  justify-content:center;
`;
const AssentoDetailIndisponivel = styled.div`
  background: #fbe192;
  margin: 0 37px;
  border-radius: 50px;
  width: 26px;
  height: 26px;
  display:flex;
  justify-content:center;
`;
const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 14px;
`;
const SectionDetails = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-bottom: 40px;
  & h3 {
    position: relative;
    bottom: -30px;
  }
`;
const InputNome = styled.section`
  width: 100%;
  height: 76px;
  margin-bottom: 7px;
  & h3 {
    font-size: 18px;
    line-height: 21px;
    color: #293845;
  }
  & input {
    font-family: "Roboto";
    width: 100%;
    height: 51px;
    font-style: italic;
    font-size: 18px;
    line-height: 21px;
    color: #afafaf;
    padding-left: 18px;
  }
`;
const InputCPF = styled.section`
  width: 100%;
  height: 76px;
  margin-bottom: 7px;
  & h3 {
    font-size: 18px;
    line-height: 21px;
    color: #293845;
  }
  & input {
    font-family: "Roboto";
    width: 100%;
    height: 51px;
    font-style: italic;
    font-size: 18px;
    line-height: 21px;
    color: #afafaf;
    padding-left: 18px;
  }
`;

const SectionReservar = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 160px;
  & button {
    height: 42px;
    width: 225px;
    background-color: #e8833a;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
  }
`;

export default Assentos;

import Footer from "../footer";
import styled from "styled-components";
import axios from "axios";
import AssentoFunction from "./seats";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Assentos(props) {
  const navigate = useNavigate()
  const [hora, setHora] = useState();
  const [dia, setDia] = useState();
  const [titulo, setTitulo] = useState();
  const [numeros, setNumeros] = useState([]);
  const [poster, setPoster] = useState("");
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const {setData, data} = props;
  const [assentos,setAssentos] = useState([]);
  const { idSessao } = useParams();
  const [renderizaAssentos, setRenderizaAssentos] = useState([]);
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((response) => {
      const assentosData = response.data.seats;
      const dia = response.data.day.weekday;
      const diaMes = response.data.day.date;
      const hora = response.data.name;
      const titulo = response.data.movie.title;
      const poster =  response.data.movie.posterURL
      setData({...data,diaMes:diaMes})
      setTitulo(titulo);
      setPoster(poster)
      setDia(dia);
      setHora(hora);
      setRenderizaAssentos(assentosData);
    });
  }, []);
  function validaDados(event) {
    event.preventDefault()
    if(assentos.length===0){
      alert("Faltou os assentos!")
    } else {
      setData({...data,numeros:numeros,dia:dia,hora:hora,nome:nome,cpf:cpf});
      const reserva = {
        ids:assentos,
        nome:nome,
        cpf:cpf
      }
      const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",reserva);
      promise.then(
        navigate("/sucesso")
      )
      }
    }
  return (
    <>
    <SectionSubHeader>
        <h2>Selecione o horário</h2>
      </SectionSubHeader>
    <Main>
      <form onSubmit={validaDados}>
      <SectionAssentos>
      {renderizaAssentos.map((props, index) => (
        <AssentoFunction seat={props} key={index} setAssentos={setAssentos} setNumeros={setNumeros} />
      ))}
    </SectionAssentos>
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
      <Footer titulo={titulo} hora={hora} dia={dia} poster={poster}/>
    </Main>
    </>
  );
}
const SectionSubHeader = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  & h2 {
    font-size: 24px;
    line-height: 28px;
    color: #293845;
  }
  `
const SectionAssentos = styled.section`
  box-sizing: content-box;
  min-height: 203px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

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

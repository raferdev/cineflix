import "./styles.css";
import Footer from "../footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Assentos() {
  return (
    <main className="main-assentos">
      <RenderizaAssentos />
      <section className="details">
        <div className="assento detail selecionado">
          <h3>Selecionado</h3>
        </div>
        <div className="assento detail disponivel">
          <h3>Disponível</h3>
        </div>
        <div className="assento detail indisponivel">
          <h3>Indisponível</h3>
        </div>
      </section>
      <section className="nome">
        <h3>Nome do comprador:</h3>
        <input type="text" placeholder="Digite seu nome..."></input>
      </section>
      <section className="cpf">
        <h3>CPF do comprador:</h3>
        <input type="text" placeholder="Digite seu CPF..."></input>
      </section>
      <section className="sec-reservar">
        <button className="reservar">
          <h3>Reservar assento(s)</h3>
        </button>
      </section>
      <Footer />
    </main>
  );
}
function RenderizaAssentos() {
  const { idSessao } = useParams();
  const [assentos, setAssentos] = useState([]);
  const [selecionado, setSelecionado] = useState(false);
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((response) => {
      const assentosData = response.data;
      setAssentos(assentosData.seats);
    });
  }, []);
  return (
    <section className="assentos">
      {assentos.map((seat) => {
        return (
          <button
            onClick={() => setSelecionado(()=> selecionado ? false : true)}
            className={selecionado ? "assento selecionado" : "assento"}
          >
            <h3>{seat.name}</h3>
          </button>
        );
      })}
    </section>
  );
}
export default Assentos;

import "./styles.css";
import Footer from "../footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
function Sessao(props) {
  const [titulo, setTitulo] = useState("");
  const { data, setData } = props;
  const [sessoes, setSessao] = useState([]);
  const { idFilme } = useParams();
  const [poster, setPoster] = useState("");
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((response) => {
      const nome = response.data.title;
      const poster = response.data.posterURL;
      setPoster(poster);
      setTitulo(nome);
      setSessao(response.data.days);
      setData({ ...data, filme: nome });
    });
  }, []);

  return (
    <>
      <SectionSubHeader>
        <h2>Selecione o horário</h2>
      </SectionSubHeader>
      <main className="main-sessao">
        {sessoes.map((sessao, index) => {
          return (
            <article key={index} className="data-card">
              <h3>
                {sessao.weekday} - {sessao.date}
              </h3>
              <section className="horarios">
                {sessao.showtimes.map((times, index) => {
                  return (
                    <Link key={index} to={`/assentos/${times.id}`}>
                      <div className="horario">
                        <h4>{times.name}</h4>
                      </div>
                    </Link>
                  );
                })}
              </section>
            </article>
          );
        })}
        <Footer titulo={titulo} dia="" hora="" poster={poster} />
      </main>
    </>
  );
}
export default Sessao;
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
`;

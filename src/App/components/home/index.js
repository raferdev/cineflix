import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components"
import "./styles.css";
function Home() {
  const [poster, setPoster] = useState([]);
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((response) => {
    const filmes = response.data;
    setPoster(filmes);
    });
  }, []);
  return (<>
    <SectionSubHeader>
    <h2>Selecione o filme</h2>
  </SectionSubHeader>
    <main className="main-home">
      {poster.map((filme, index) => {
        return (
        <Link key={index} to={"/sessao/" + filme.id}>
          <article className="posters-board">
              <img className="poster" src={filme.posterURL} alt={filme.overview}></img>
          </article>
          </Link>
        );
      })}
    </main>
    </>
  );
}
export default Home;
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
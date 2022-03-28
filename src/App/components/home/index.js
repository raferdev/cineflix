import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";
function Home(props) {
  const {setData} = props
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
  return (
    <main className="main-home">
      {poster.map((filme, index) => {
        return (
        <Link to={"/sessao/" + filme.id}>
          <article className="posters-board" key={index}>
              <img className="poster" src={filme.posterURL}></img>
          </article>
          </Link>
        );
      })}
    </main>
  );
}
export default Home;

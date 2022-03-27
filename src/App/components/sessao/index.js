import "./styles.css";
import Footer from "../footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function Sessao() {
  const [sessoes, setSessao] = useState([]);
  const { idFilme } = useParams();
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((response) => {
      setSessao(response.data.days);
    });
  }, []);

  return (
    <main className="main-sessao">
      {sessoes.map((sessao,index) => {
        return (
          <article key={index} className="data-card">
            <h3>
              {sessao.weekday} - {sessao.date}
            </h3>
            <section className="horarios">
              {sessao.showtimes.map((times,index) => {
                return (
                  <Link key={index} to={`/assentos/${times.id}`}>
                    <button className="horario">
                      <h4>{times.name}</h4>
                    </button>
                  </Link>
                );
              })}
            </section>
          </article>
        );
      })}
      <Footer />
    </main>
  );
}
export default Sessao;

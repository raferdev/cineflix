import "./styles.css";
import Footer from "../footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function Sessao(props) {
  const [titulo,setTitulo] = useState("")
  const {data,setData} = props
  const [sessoes, setSessao] = useState([]);
  const { idFilme } = useParams();
  const [poster, setPoster] = useState("")
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((response) => {
      const nome = response.data.title;
      const poster = response.data.posterURL;
      setPoster(poster)
      setTitulo(nome);
      setSessao(response.data.days);
      setData({...data,filme:nome});
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
      <Footer titulo={titulo} dia="" hora="" poster={poster}/>
    </main>
  );
}
export default Sessao;

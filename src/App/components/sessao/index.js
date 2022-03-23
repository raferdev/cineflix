import "./styles.css";
import Footer from "../footer";
import { Link } from "react-router-dom";
/* import { useState } from "react/cjs/react.production.min"; */
function Sessao() {
 /*    const [ hora, setHora] = useState("") */
    return (
    <main className="main-sessao">
        <article className="data-card">
            <h3>Quinta-feira - 24/06/2021</h3>
            <section className="horarios">
            <Link to="/assentos"><button className="horario"><h4>15:00</h4></button></Link>
            <Link to="/assentos"><button className="horario"><h4>15:00</h4></button></Link>
            </section>
        </article>
        <article className="data-card">
            <h3>Quinta-feira - 24/06/2021</h3>
            <section className="horarios">
            <Link to="assentos"><button className="horario"><h4>15:00</h4></button></Link>
            <Link to="assentos"><button className="horario"><h4>15:00</h4></button></Link>
            </section>
        </article>
        <Footer />
    </main>
    )
}
export default Sessao;
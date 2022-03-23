import "./styles.css";
import Footer from "../footer";
function Sessao() {
    return (
    <main>
        <article className="data-card">
            <h3>Quinta-feira - 24/06/2021</h3>
            <section className="horarios">
            <div className="horario"><h4>15:00</h4></div>
            <div className="horario"><h4>15:00</h4></div>
            </section>
        </article>
        <article className="data-card">
            <h3>Quinta-feira - 24/06/2021</h3>
            <section className="horarios">
            <div className="horario"><h4>15:00</h4></div>
            <div className="horario"><h4>15:00</h4></div>
            </section>
        </article>
        <Footer />
    </main>
    )
}
export default Sessao;
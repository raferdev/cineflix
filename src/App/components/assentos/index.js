import "./styles.css"
import Footer from "../footer";
function Assentos() {
    return (
        <main className="main-assentos">
            <section className="assentos">
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
                <div className="assento"><h3>1</h3></div>
            </section>
            <section className="details">
            <div className="assento detail selecionado"><h3>Selecionado</h3></div>
            <div className="assento detail disponivel"><h3>Disponível</h3></div>
            <div className="assento detail indisponivel"><h3>Indisponível</h3></div>
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
                <button className="reservar"><h3>Reservar assento(s)</h3></button>
            </section>
            <Footer />
        </main>
    )
}
export default Assentos;
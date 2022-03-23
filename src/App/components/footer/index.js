import imgtest from "../../../assets/images/imagetest.png"
import "./styles.css"
function Footer() {
    return (
        <footer>
            <article className="mini-poster-board"><img className="mini-poster" src={imgtest}></img></article>
            <section className="info-filme"><h3>Enola Holmes</h3><h3>Quinta-feira - 15:00</h3></section>
        </footer>
    )
}
export default Footer;
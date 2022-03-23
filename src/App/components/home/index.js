import imgtest from "../../../assets/images/imagetest.png";
import { Link } from "react-router-dom";
import "./styles.css"
function Home() {
    return (
        <main className="main-home">
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
            <article className="posters-board"><Link to="/sessao"><img className="poster" src={imgtest}></img></Link></article>
        </main>
    )
}
export default Home
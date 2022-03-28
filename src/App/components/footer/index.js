import "./styles.css";
function Footer(props) {
  const { titulo, hora, dia,poster } = props;
  return (
    <footer>
      <article className="mini-poster-board">
        <img className="mini-poster" src={poster}></img>
      </article>
      <section className="info-filme">
        <h3>{titulo}</h3>
        <h3>{dia ==="" ? "" : dia + "-" + hora}</h3>
      </section>
    </footer>
  );
}
export default Footer;

import Header from "../header";
import SubHeader from "../header/subHeader/subHeader";
export default function Sucesso(props) {
    const {data} = props;
    const {filme,diaMes, numeros, dia, hora, nome, cpf} = data;
    console.log(data)
    alert('foi')
    return (<>
      <SubHeader sub="Pedido feito com sucesso!"/>
        <h1>foi</h1>
        </>
    )
}
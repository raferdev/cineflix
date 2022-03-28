import AssentoFunction from "../assentos/seats";
import Header from "../header";
import SubHeader from "../header/subHeader/subHeader";
import styled from "styled-components";
export default function Sucesso(props) {
  const { data } = props;
  /*  const {filme,diaMes, numeros, dia, hora, nome, cpf} = data; */
  let numeros = [11, 22, 44, 55];
  return (
    <>
      <SubHeader sub="Pedido feito com sucesso!" />
      <Main>
        <Section>
          <h3>Filme e idSessao</h3>
          <Div>
            <h4>batatataaa</h4>
            <h4>14/12/22 14:00</h4>
          </Div>
        </Section>
        <Section>
          <h3>Ingressos</h3>
          <Div>
            {numeros.map((num, index) => {
              return <h4 key={index}>{"Assento " + num}</h4>;
            })}
          </Div>
        </Section>
        <Section>
          <h3>Comprador</h3>
          <Div>
            <h4>{"Nome: " + "arasasdade"}</h4>
            <h4>{"CPF: " + "13124124124123"}</h4>
          </Div>
        </Section>
      </Main>
    </>
  );
}
const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  flex-shrink: 0;
`;
const Section = styled.section`
  min-height: 110px;
  width:100%;
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
  }
  h4 {
    display:flex;
    flex-wrap:wrap;
    width: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;
const Div = styled.div`
  width: 100%;
`;

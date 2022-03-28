import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Sucesso(props) {
  const navigate = useNavigate();
  const { data, setData } = props;
   const {filme,diaMes, numeros, hora, nome, cpf} = data;
  function finalizar() {
    setData({});
    navigate("/");
  }
  return (
    <>
      <SectionSubHeader>
        <h2>Pedido feito com sucesso!</h2>
      </SectionSubHeader>
      <Main>
        <Section>
          <h3>Filme e sessão</h3>
          <Div>
            <h4>{filme}</h4>
            <h4>{diaMes+" "+hora}</h4>
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
            <h4>{"Nome: " + nome}</h4>
            <h4>{"CPF: " + cpf}</h4>
          </Div>
        </Section>
        <SectionButton>
          <Button onClick={() => finalizar()}>
            <h3>Voltar pra Home</h3>
          </Button>
        </SectionButton>
      </Main>
    </>
  );
}
const SectionSubHeader = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  & h2 {
    text-align: center;
    width: 180px;
    color: #247a6b;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
  }
`;
const SectionButton = styled.section`
  display: flex;
  flex-direction:column;
  justify-content: flex-end;
  align-items: center;
  height: 110px;
  h3 {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #ffffff;
  }
`;
const Button = styled.button`
  height: 42px;
  width: 225px;
  background-color: #e8833a;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  flex-shrink: 0;
`;
const Section = styled.section`
  min-height: 80px;
  width: 100%;
  margin-top:30px;
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
  }
  h4 {
    display: block;
    width: 250px;
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

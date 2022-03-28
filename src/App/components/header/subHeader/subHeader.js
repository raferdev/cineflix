import styled from "styled-components";
export default function SubHeader(props) {
  const { sub } = props;
  return (
    <SectionSubHeader>
      <h2>{sub}</h2>
    </SectionSubHeader>
  );
}
const SectionSubHeader = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  & h2 {
    font-size: 24px;
    line-height: 28px;
    color: #293845;
  }
`;

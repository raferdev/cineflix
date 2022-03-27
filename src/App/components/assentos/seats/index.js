import styled from "styled-components";
export default function AssentoFunction(props) {
    const { seat } = props;
    return (
      <div>
      <Input type="checkbox" id={"user"+seat.name}/>
      <Label type="checkbox" for={"user"+seat.name} value={seat.name}/>
      </div>
    );
  }
  const Label = styled.label`
  display: block;
  width: 26px;
  height: 26px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 50px;
  flex-shrink: 0;
  margin: 9px;
`;

const Input = styled.input`
width:0;
height: 0;
opacity:0;
&:checked + ${Label} {
background: #8dd7cf;
}
`;
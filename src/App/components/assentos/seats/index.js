import styled from "styled-components";
export default function AssentoFunction(props) {
  const { seat,setAssentos } = props;
  if (seat.isAvailable) {
    return (
      <>
        <Input name={seat.id} type="checkbox" id={"user" + seat.name} onChange={()=> setAssentos((assentos) =>{
    const array = [...assentos]
    const index = array.indexOf(seat.id);
    if (index === -1) {
        return [...assentos,seat.id];
    } else {
        array.splice(index, 1);
        return [...array]
    }
})}/>
        <Label type="checkbox" htmlFor={"user" + seat.name} value={seat.id}>
          {seat.name}
        </Label>
      </>
    );
  } else {
    return <Div>{seat.name} </Div>;
  }
}
const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.04em;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 26px;
  height: 26px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 50px;
  flex-shrink: 0;
  margin: 9px;
`;

const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  &:checked + ${Label} {
    background: #8dd7cf;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.04em;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 26px;
  height: 26px;
  background: #fbe192;
  border: 1px solid #808f9d;
  border-radius: 50px;
  flex-shrink: 0;
  margin: 9px;
`;

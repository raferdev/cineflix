import styled from "styled-components";
import AssentoFunction from "../seats";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export function RenderizaAssentos() {
  const { idSessao } = useParams();
  const [assentos, setAssentos] = useState([]);
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((response) => {
      const assentosData = response.data;
      setAssentos(assentosData.seats);
    });
  }, []);
  return (
    <SectionAssentos>
      {assentos.map((props, index) => (
        <AssentoFunction seat={props} key={index} />
      ))}
    </SectionAssentos>
  );
}
const SectionAssentos = styled.section`
  box-sizing: content-box;
  min-height: 203px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

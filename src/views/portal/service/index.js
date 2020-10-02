import React from "react";
import styled from "styled-components";
import Title from "../../../components/titlePage";

export default () => {
  return (
    <>
      <Service>
        {" "}
        <Title title="Services" sub="Reservation and Cocktail bar" />
      </Service>
      ;
    </>
  );
};
const Service = styled.div`
  display: block;
  height: 500px;
  color: #111;
`;

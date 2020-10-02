import React from "react";
import styled from "styled-components";
import Title from "../../../components/titlePage";

export default () => {
  return (
    <>
      <About>
        <Title title="About" sub="Come and try our stakes" />
      </About>
    </>
  );
};

const About = styled.div`
  display: block;
  height: 500px;
  color: #111;
`;

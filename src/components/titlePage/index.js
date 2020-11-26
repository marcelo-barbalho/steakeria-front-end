import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

export default ({ title, sub }) => {
  return (
    <>
      <ConstainerTitle>
        <Container>
          <Title>{title}</Title>
          <Sub>{sub}</Sub>
        </Container>
      </ConstainerTitle>
    </>
  );
};

const Title = styled.div`
  font-size: 40px;
  font-family: "Ubuntu Condensed", sans-serif;
`;
const Sub = styled.div`
  font-size: 25px;
  font-family: "Ubuntu Condensed", sans-serif;
`;
const ConstainerTitle = styled.div`
  background: brown;
  padding: 10px;
  margin-bottom:2rem;
`;

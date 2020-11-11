import React from "react";
import styled from "styled-components";
import {Container, Row, Col} from 'react-bootstrap'

export default () => {
  return (
    <>
      <Info>
        <Container>
        </Container>
          <Row>
            <Col><InnerText>customizar</InnerText></Col>
            <Col><InnerText>customizar</InnerText></Col>
            <Col><InnerText>customizar</InnerText></Col>
          </Row>
      </Info>
    </>
  );
};


const Info = styled.div`
  min-height: 100px;
  width: 100%;
  background: brown;
`;

const InnerText = styled.h4`
  background:#000;
  color:#ccc;
  padding:30px;
  margin:8px;
  text-align:center

`

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Title from "../../../components/titlePage";

export default () => {
  return (
    <>
      <About>
        <Title title="About" sub="Come and try our stakes" />
        <Descriptions>
          <Container>
            <h1>teste about</h1>
          </Container>
        </Descriptions>        
        <Collaborators>
          <Container>
            <Row md={4}>
              <Box>1 of 3</Box>
              <Box xs={6}>2 of 3</Box>
              <Box>3 of 3</Box>
            </Row>
          </Container>
        </Collaborators>
      </About>
    </>
  );
};

const About = styled.div`
  display: block;
  height: 950px;
  /* color: #111; */
`;
const Descriptions = styled.div`
display:flex;
width:100%;
height:200px;


`;
const Collaborators = styled.div`
background:blue;
width:100%;
min-height: 200px;
padding:20px 0;

`
const Box = styled(Col)`
 background:red;
 height:200px;
 width:20%;
 margin:10px;;
`
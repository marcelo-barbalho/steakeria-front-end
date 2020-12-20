import React from "react";
import styled from "styled-components";
import Title from "../../../components/titlePage";
import {Container, Row, Col} from "react-bootstrap" 

export default () => {
  return (
    <>
      <Contact>
        {" "}
        <Title title="Contact" sub="Tel:1234579, Email:12346789@123.com" />
        <Container>
            <Row >
              <Info md={3}>1 of 3</Info>
              <Form md={9}>2 of 3</Form>
            </Row>
          </Container>
      </Contact>
    </>
  );
};
const Contact = styled.div`
  display: block;
  height: 150px;
  color: #111;
`;
const Info = styled(Col)`
 background:blue;
 height:200px;
 width:100%;
`
const Form = styled(Col)`
 background:red;
 height:200px;
 width:100%;
`
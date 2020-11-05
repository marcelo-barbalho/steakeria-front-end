import React from "react";
import styled from "styled-components";
import Title from "../../../components/titlePage";
import {Container, Row, Col} from "react-bootstrap"

export default () => {
  return (
    <>
      <Service>
        {" "}
        <Title title="Services" sub="Reservation and Cocktail bar" />
          <Container>
            <Row md={4}>
              <ServiceItem>1 of 3</ServiceItem>
              <ServiceItem xs={6}>2 of 3</ServiceItem>
              <ServiceItem>3 of 3</ServiceItem>
            </Row>
          </Container>
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
const ServiceItem = styled(Col)`
 background:red;
 height:200px;
 width:20%;
 margin:10px;;
`
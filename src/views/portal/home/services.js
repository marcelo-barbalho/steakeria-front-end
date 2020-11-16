import React from "react";
import styled from "styled-components";
import {Container, Row, Col} from 'react-bootstrap'

export default () => {
  return (
    <>
      <Services>
            <Title>Nossos Serviços</Title>
          
        <Container>
      
          <Row>
            <Item>  bibkbibuibibiub</Item>
            <Item>  bibkbibuibibiub</Item>
            <Item>  bibkbibuibibiub</Item>
        
          </Row>  </Container>
   
      </Services>
    </>
  );
};


const Services = styled.div`
  min-height: 150px;
  width: 100%;
  background:brown;
  color:#ccc;
  padding: 2em 0`;

const Item = styled(Col)`
text-align:center;
margin:5px;
background: #000;
height:100px;
padding:1em;
`
const Title = styled.h3`
text-align:center;
margin-bottom:1em;
`


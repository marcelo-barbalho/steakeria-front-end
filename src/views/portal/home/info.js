import React from "react";
import styled from "styled-components";
import {Container, Row, Col} from 'react-bootstrap'

export default () => {
  return (
    
      <Info>
        <Container>
      
          <Row>
          <Item> <h4>customizar</h4></Item>
            <Item> <h4>customizar</h4></Item>
            <Item> <h4>customizar</h4></Item>
          
          </Row>  </Container>
      </Info>
    
  );
};


const Info = styled.div`
  min-height: 100px;
  width: 100%;
  background: brown;
  padding:1rem;
`;

const Item = styled(Col)`
  background:#000;
  color:#ccc;
  padding:20px 0;
  margin:8px;
  text-align:center;
  
  >h4{
    width:80%;
    border-bottom:1px solid brown;
    margin:auto;
  }
`

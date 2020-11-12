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
            <Item>
                bibkbibuibibiub
            </Item>
            <Item>
              kjsdcdsckjsdcsd
            </Item>
            <Item>
              djcjkjsdncnsjdkncnsd
            </Item>
          </Row>
        </Container>
      </Services>
    </>
  );
};


const Services = styled.div`
  min-height: 150px;
  width: 100%;
  background:brown;
`;

const Item = styled(Col)`
text-align:center;
margin:5px;
background: #000;
height:100px;
color:#ccc

`
const Title = styled.h3`
text-align:center;
color:#ccc
`


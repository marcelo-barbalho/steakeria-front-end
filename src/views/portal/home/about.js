import React from "react";
import styled from "styled-components";
import placeImg from '../../../assets/images/SALÃO-CAVE.jpg'
import { Col, Row, Container } from "react-bootstrap";

export default () => {
  return (
    
      <About>
        <Container>
        <Row>
          <Col>
            <CustomImg src={placeImg} alt='Conheça nosso restaurante'/>
          </Col>
          <Col className="about-text">
            <Title>titulo</Title>
            <AboutUs>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti voluptatibus repellat eligendi qui! Possimus, animi veritatis quaerat atque explicabo ipsam, qui hic optio quod pariatur rem totam temporibus minus.</AboutUs>
          </Col>
        </Row>
        </Container>
      </About>

  
  );
};


const About = styled.div`
  min-height: 200px;
  width: 100%;
  background: #000;
  >div{
    display:flex;
    justify-content:space-between;
  
.about-text{
  display: flex;
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
}
  }

`;
const CustomImg= styled.img`
height:auto;
width:100%;
`
const Title=styled.h3`
color:#ccc;
text-align:center;
margin-top:0.5rem;
`

const AboutUs= styled.p`
color:#ccc;
text-align:center;

`


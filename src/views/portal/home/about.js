import React from "react";
import styled from "styled-components";
import placeImg from '../../../assets/images/SALÃO-CAVE.jpg'
import { Col, Row } from "react-bootstrap";

export default () => {
  return (
    <>
      <About>
        <Row>
          <Col md='auto'>
            <CustomImg src={placeImg} alt='Conheça nosso restaurante'/>
          </Col>
          <Col xs lg='8'>
            <Title>titulo</Title>
            <AboutUs>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti voluptatibus repellat eligendi qui! Possimus, animi veritatis quaerat atque explicabo ipsam, qui hic optio quod pariatur rem totam temporibus minus.</AboutUs>
          </Col>
        </Row>
      </About>
    </>
  );
};


const About = styled.div`
  min-height: 200px;
  width: 100%;
  background: #000;
`;
const CustomImg= styled.img`
height:350px;
width:700px;
`
const Title=styled.h3`
color:#ccc;
text-align:center;
`

const AboutUs= styled.p`
color:#ccc;
text-align:center;
font-size:30px
`


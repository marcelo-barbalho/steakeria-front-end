import React from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import bannerImg from '../../../assets/images/fogo-em-brasa.jpg'
import steak1 from '../../../assets/images/pngwave (5).png'
import steak2 from '../../../assets/images/carne2.png'

export default () => {
  return (
    <>
      <Banner>
        <div className='bannerLabel'>
          <Item>
          <Carousel indicators={false}>
            <Carousel.Item>
              <StyledRow>
                <Col md={3} sm={3}>
                  <img src={steak1} className='img-fluid' alt=''/>
                </Col>
                <InfoCol md={3} sm={3}>
                  <div className="tag">A pedida do churrasqueiro!</div>
                  <h2 className="productName">Costela</h2>
                  <div className="productInfo">Costela bovina, caindo do osso no molho barbecue.</div>
                  <CButton>Pedir</CButton>
                </InfoCol>
              </StyledRow>
            </Carousel.Item>
            <Carousel.Item>
              <StyledRow>
                <Col md={3} sm={3}>
                  <img src={steak2} className='img-fluid' alt=''/>
                </Col>
                <InfoCol md={3} sm={3}>
                  <div className="tag">De dar água na boca!</div>
                  <h2 className="productName">Filé de Costela</h2>
                  <div className="productInfo">Maravilhoso filé de costela, marmoreado e macio, feita brasa.</div>
                  <CButton>Pedir</CButton>
                </InfoCol>
              </StyledRow>
            </Carousel.Item>
          </Carousel>
          </Item>
        </div>
      </Banner>
    </>
  );
};
const Banner = styled.div`
  min-height: 500px;
  width: 100%;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size:cover;
  
  .bannerLabel{
    /* background: #a52a2a; */
    color:#ccc;
    font-family: "Ubuntu Condensed", sans-serif;
  }
`;

const Item = styled.div `

`
const StyledRow = styled(Row)`
padding-top:50px;
justify-content:center;
align-items:center;
`
const InfoCol = styled(Col)`
/* background:rgba(115,104,104,0.7); */
  .tag{
    margin-bottom:5px;
    color:#fff
  }
  .productName{
    
  }
  .productInfo{
    padding-bottom:15px
  }
`
const CButton = styled(Button)`
  border:none;
  background-color:brown !important

`






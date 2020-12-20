import React from "react";
import { Button, Carousel, Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import bannerImg from '../../../assets/images/fogo-em-brasa.jpg'
import steak1 from '../../../assets/images/pngwave (5).png'
import steak2 from '../../../assets/images/carne2.png'

export default () => {
  const slideContent=
    [
      { image:steak1,
      tag:"A pedida do churrasqueiro!",
      title:"Costela",
      info:"Costela bovina, caindo do osso no molho barbecue."
    },
    {image:steak2,
    tag:"De dar água na boca!",
    title:"Filé de Costela",
  info:"Maravilhoso filé de costela, marmoreado e macio, feita brasa."},
 
    ]
  
  return (
    <>
      <Banner>
        <div className='bannerLabel'>
          <Item>
          <Carousel indicators={false}>
            {slideContent.map((slide)=>{
              const {tag,title,info,image}=slide;
              return(
             <Carousel.Item>
               <Container>
             <StyledRow>
               <Col md={3} sm={3}>
                 <img src={image} className='img-fluid' alt=''/>
               </Col>
               <InfoCol md={4} sm={4}>
                 <div className="tag">{tag}</div>
            <h2 className="productName">{title}</h2>
              <div className="productInfo">{info}</div>
                 <CButton>Pedir</CButton>
               </InfoCol>
             </StyledRow>
             </Container>
           </Carousel.Item>)})}
           
           
          </Carousel>
          </Item>
        </div>
      </Banner>
    </>
  );
};
const Banner = styled.div`
 
  width: 100%;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size:cover;
  
  .bannerLabel{
    /* background: #a52a2a; */
    color:#ccc;
    font-family: "Ubuntu Condensed", sans-serif;
    background-color: rgba(0,0,0,0.5);
  }
`;

const Item = styled.div `

`
const StyledRow = styled(Row)`
padding:50px 0;
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






import React from "react";
import styled from "styled-components";
import Title from "../../../components/titlePage";
import {Tab, Tabs, Container} from "react-bootstrap"

export default () => {
  return (
    <>
      <Product>
        {" "}
        <Title title="Product" sub="We have the best meat cuts, made by the best chefs, check it..."/>
          
          <Container>            
          <TabBox defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
              ; Lest sorrow lend me words, and words
            </Tab>
            <Tab eventKey="profile" title="Profile">
              ; Lest sorrow lend me words, and words
            </Tab>
            <Tab eventKey="contact" title="Contact" >
              ; Lest sorrow lend me words, and words
            </Tab>
          </TabBox>
          </Container>
      </Product>
      ;
    </>
  );
};
const Product = styled.div`
  display: block;
  height: 500px;
  color: #111;
  .tab-content{
    background:#eee !important  }
`;
const TabBox = styled(Tabs)`
background:#eee;
`
import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header_style>
        <Header />
      </Header_style>
      <Content>{children}</Content>
      <Footer_style>
        <Footer />
      </Footer_style>
    </>
  );
};

const Header_style = styled.div`
  width: 100%;
`;
const Footer_style = styled.div`
  height: 200px;
  width: 100%;
`;

const Content = styled.div`
  background-color: pink;
  min-height: 500px;
`;

export default Layout;

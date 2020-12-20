import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderStyle>
        <Header />
      </HeaderStyle>
      <Content>{children}</Content>
      <FooterStyle>
        <Footer />
      </FooterStyle>
    </>
  );
};

const HeaderStyle = styled.div`
  width: 100%;
`;
const FooterStyle = styled.div`
  height: 200px;
  width: 100%;
`;

const Content = styled.div`
  min-height: 500px;
`;

export default Layout;

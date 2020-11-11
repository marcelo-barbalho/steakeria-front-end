import React from "react";
import styled from "styled-components";
import Banner from "./banner";
import About from "./about";
import Menu from "./menu";
import Products from "./products";
import Info from "./info";
const Home = () => {
  return (
    <>
      <CustomHome>
        <Banner />
        <Info />
        <Menu />
        <Products />
        <About />
      </CustomHome>
    </>
  );
};

export default Home;

const CustomHome = styled.div`
  /* background-color: #ddd; */
`;

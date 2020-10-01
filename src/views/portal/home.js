import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";

const Home = () => {
  return (
    <>
      <Layout>
        <CustomHome>rota home funcionando</CustomHome>
      </Layout>
    </>
  );
};

export default Home;

const CustomHome = styled.div`
  background-color: #ddd;
`;

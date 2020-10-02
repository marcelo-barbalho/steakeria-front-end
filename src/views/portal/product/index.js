import React from "react";
import styled from "styled-components";
import Title from "../../../components/titlePage";

export default () => {
  return (
    <>
      <Product>
        {" "}
        <Title
          title="Product"
          sub="We have the best meat cuts, made by the best chefs, check it..."
        />
      </Product>
      ;
    </>
  );
};
const Product = styled.div`
  display: block;
  height: 500px;
  color: #111;
`;

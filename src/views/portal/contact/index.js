import React from "react";
import styled from "styled-components";
import Title from "../../../components/titlePage";

export default () => {
  return (
    <>
      <Contact>
        {" "}
        <Title title="Contact" sub="Tel:1234579, Email:12346789@123.com" />
      </Contact>
    </>
  );
};
const Contact = styled.div`
  display: block;
  height: 150px;
  color: #111;
`;

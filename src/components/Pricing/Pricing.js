import React from "react";
import styled from "styled-components";
import PriceCard from "../PriceCard/PriceCard";

const Container = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Pricing = () => {
  return (
    <Container>
      <PriceCard price="10" type="Basic Plan" />
      <PriceCard price="30" type="Primium Plan" />
      <PriceCard price="50" type="Advansed Plan" />
    </Container>
  );
};

export default Pricing;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  margin-right: 50px;
  -webkit-box-shadow: 4px 2px 8px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 2px 8px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-size: 50px;
  font-weight: 700;
`;
const Type = styled.button`
  margin: 10px 0;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid crimson;
  font-size: 16px;
  color: crimson;
  background: white;
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 40px 0;
  font-weight: bolder;
`;
const Button = styled.button`
  padding: 10px;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 2px;
  margin-top: 15px;
  width: 120px;
`;

const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/Month
      </PriceContainer>
      <Type>{type}</Type>
      <List>
        <ListItem>200 Hand-crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Preminum Plugins</ListItem>
      </List>
      <Button>Buy Now </Button>
    </Container>
  );
};

export default PriceCard;

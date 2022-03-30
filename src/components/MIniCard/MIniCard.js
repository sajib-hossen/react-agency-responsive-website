import React from "react";
import styled from "styled-components";
import search from "../../img/search.png";

const Container = styled.div`
  width: 200px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-right: 10px;
  -webkit-box-shadow: 4px 2px 8px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 2px 8px 5px rgba(0, 0, 0, 0.1);
`;
const Image = styled.img`
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.span`
  text-align: center;
  margin-top: 20px;
`;

const MIniCard = () => {
  return (
    <Container>
      <Image src={search} />
      <Text>Lorem ipsum dolor sit amet </Text>
    </Container>
  );
};

export default MIniCard;

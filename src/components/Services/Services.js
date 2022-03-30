import React from "react";
import styled from "styled-components";
import me from "../../img/me.png";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  display: flex;
  width: 50%;
`;
const Image = styled.img`
  width: 80%;
`;
const Right = styled.div`
  display: flex;
  width: 50%;
`;

const Services = () => {
  return (
    <Container>
      <Left>
        <Image src="https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"></Image>
      </Left>
      <Right>hi</Right>
    </Container>
  );
};

export default Services;

import React from "react";
import styled from "styled-components";
import phone from "../../img/app.png";
import AnimatiedShap from "../AnimatiedShap/AnimatiedShap";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50%;
`;
const Image = styled.img`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 60px;
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  margin: 25px 0;
  letter-spacing: 3px;
`;
const Descr = styled.p`
  margin-bottom: 10px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #444;
`;
const Button = styled.button`
  padding: 10px;
  background-color: darkblue;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 2px;
  margin-top: 15px;
  width: 150px;
`;

const Features = () => {
  return (
    <Container>
      <Left>
        <Image src={phone}></Image>
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br /> <b>good</b> business
        </Title>
        <SubTitle>We know that good design means good business</SubTitle>
        <Descr>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          perspiciatis et error quasi ratione assumenda incidunt sit nesciunt
          non enim consectetur, similique beatae consequuntur laudantium
          quisquam cupiditate dolorem expedita in?
        </Descr>
        <Button>Learn More</Button>
      </Right>
      <AnimatiedShap />
    </Container>
  );
};

export default Features;

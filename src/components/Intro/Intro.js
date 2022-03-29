import React from "react";
import styled from "styled-components";
import me from "../../img/linkdin-image.png";
import AnimatiedShap from "../AnimatiedShap/AnimatiedShap";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;
const Descri = styled.p`
  font-size: 20px;
  width: 60%;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: darkblue;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 2px;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #f0667f;
  font-weight: bolder;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;
const Right = styled.div`
  width: 40%;
`;
const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Descri>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          excepturi temporibus vero dolores mollitia nulla tenetur saepe omnis,
          doloremque voluptates autem veritatis asperiores magni aut, non
          voluptatem suscipit perferendis dolorem!
        </Descri>

        <Info>
          <Button>Start a project</Button>
          <Contact>
            <Phone> Call : +8801715676974 </Phone>
            <ContactText> For any question Or concern </ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={me}></Image>
      </Right>
      <AnimatiedShap />
    </Container>
  );
};

export default Intro;

import React, { useState } from "react";
import styled from "styled-components";
import me from "../../img/me.png";
import MIniCard from "../MIniCard/MIniCard";
import play from "../../img/play.png";
import videoFile from "../../img/Exclusive on Fiverr (3).mp4";

const Container = styled.div`
  display: flex;
  height: 100%;
`;
const Left = styled.div`
  display: flex;
  width: 50%;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  display: ${(props) => props.open && "none"};
  margin-left: 20px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

const Right = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;
const Descri = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: #555;
  line-height: 25px;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: darkblue;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 2px;
  margin-top: 18px;
  width: 180px;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 7px;
`;

const Services = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Left>
        <Image open={open} src={me}></Image>
        <Video open={open} autoPlay loop controls src={videoFile}></Video>
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Descri>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut
            ipsam rerum error delectus natus sit quaerat nisi corrupti
            architecto! Unde voluptatem rerum natus vitae assumenda? Commodi,
            velit. A, iusto.{" "}
          </Descri>
          <CardContainer>
            <MIniCard />
            <MIniCard />
            <MIniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            {" "}
            <Icon src={play} /> How To Works{" "}
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Services;

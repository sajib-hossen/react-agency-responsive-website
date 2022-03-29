import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  position: absolute;
  top: -60px;
  left: -60px;
  opacity: 0.7;
  z-index: -1;
  animation: square 16s linear alternate infinite;
  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: tomato;
  position: absolute;
  top: 200px;
  left: -100px;
  opacity: 0.7;
  z-index: -1;
  animation: circle 12s linear alternate infinite;
  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;
const Rect = styled.div`
  width: 50px;
  height: 100px;
  background-color: #669966;
  position: absolute;
  top: 400px;
  left: -40px;
  opacity: 0.5;
  z-index: -1;
  animation: rect 8s linear alternate infinite;
  @keyframes rect {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

const AnimatiedShap = () => {
  return (
    <>
      <Square></Square>

      <Circle></Circle>
      <Rect></Rect>
    </>
  );
};

export default AnimatiedShap;

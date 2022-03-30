import styled, { css } from "styled-components";
import Features from "./components/Features/Features";
import Intro from "./components/Intro/Intro";
import Navber from "./components/Navbar/Navber";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;

  top: 0;
  z-index: -1;
  left: 0;
  position: absolute;
`;
const IntroShape = styled.div`
  ${Shape}
  background-color: crimson;
  clip-path: polygon(100% 0%, 60% 0%, 45% 100%, 100% 100%);
`;

const FeaturesShap = styled.div`
  ${Shape}
  clip-path: polygon(1% 100%, 32% 100%, 45% 0%, 1% 0%);
  background-color: pink;
`;
const ServicesShap = styled.div`
  ${Shape}

  clip-path: polygon(0% 100%, 33% 100%, 32% 0%, 0% 0%);
  background-color: red;
`;
const PriveShap = styled.div`
  ${Shape}

  clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 67% 100%);
  background-color: pink;
`;

function App() {
  return (
    <>
      <Container>
        <Navber />
        <Intro />
        <IntroShape></IntroShape>
      </Container>
      <Container>
        <Features />
        <FeaturesShap></FeaturesShap>
      </Container>
      <Container>
        <Services />
        <ServicesShap />
      </Container>
      <Container>
        <Pricing />
        <PriveShap />
      </Container>
    </>
  );
}

export default App;

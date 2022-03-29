import styled from "styled-components";
import Intro from "./components/Intro/Intro";
import Navber from "./components/Navbar/Navber";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;
const IntroShape = styled.div`
  width: 100%;
  height: 100%;
  clip-path: polygon(100% 0%, 60% 0%, 45% 100%, 100% 100%);
  background-color: crimson;
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
`;

function App() {
  return (
    <Container>
      <Navber />
      <Intro />
      <IntroShape></IntroShape>
    </Container>
  );
}

export default App;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  width: 50%;
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 2px;
  margin-bottom: 20px;
  width: 170px;
`;
const AddressContainer = styled.div`
  width: 50%;
`;

const AddressItem = styled.div``;
const Icon = styled.img``;
const Text = styled.div``;

const Contacts = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name"></Input>
              <Input placeholder="Your Email"></Input>
              <Input placeholder="Subject"></Input>
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src="" />
            <Text>123 Park Avenue St., New York, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src="" />
            <Text>+1 631 1234 5678</Text>
            <Text>+1 326 1234 5678</Text>
          </AddressItem>
          <AddressItem>
            <Icon src="" />
            <Text>contact@lama.dev</Text>
            <Text>sales@lama.dev</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contacts;

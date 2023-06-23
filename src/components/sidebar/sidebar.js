import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Span>Save</Span>
        <Span>Invest</Span>
        <Span>Stories</Span>
        <Span>FAQs</Span>
        <Span>Resources</Span>
        <Btn>Sign In</Btn>
        <Button>Create free account</Button>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 100%;
  height: 89vh;

  display: none;
  justify-content: center;
  /* position: fixed; */
  background-color: white;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 900px) {
    display: flex;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Span = styled.div`
  color: #0c1825;
  font-size: 15px;
`;
const Btn = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0c1825;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid #0c1825;
  /* border: 1px #0c1825; */

  background: inherit;
`;
const Button = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  border-radius: 10px;
  color: white;
  background-color: #0c1825;
  border: 1px solid #0c1825;
`;

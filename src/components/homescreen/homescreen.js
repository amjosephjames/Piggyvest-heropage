import React from "react";
import styled from "styled-components";
import Header from "../header/header";
import Landing from "../landing/landing";

const Homescreen = () => {
  return (
    <Container>
      <Header />
      <Landing />
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

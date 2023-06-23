import React, { useState } from "react";
import styled from "styled-components";
import piz from "./logo.svg";
import { GoThreeBars } from "react-icons/go";
import { GiCancel } from "react-icons/gi";
import Sidebar from "../sidebar/sidebar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleSwitch = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <img src={piz} alt="" />
          <Navigator>
            <Span>Save</Span>
            <Span>Invest</Span>
            <Span>Stories</Span>
            <Span>FAQs</Span>
            <Span>Resources</Span>
            <Btn>Sign In</Btn>
            <Button>Create free account</Button>
          </Navigator>
          {/* <Btnholder> */}
          {/* <Btn>Sign In</Btn>
            <Button>Create free account</Button> */}
          {/* </Btnholder> */}
          <SideIcon onClick={toggleSwitch}>
            {toggle ? (
              <GiCancel fontSize="25px" color="#0c1825" />
            ) : (
              <GoThreeBars fontSize="25px" color="#0c1825" />
            )}
          </SideIcon>
        </Wrapper>
      </Container>
      <SideTogg>{toggle ? <Sidebar /> : null}</SideTogg>
    </>
  );
};
export default Header;

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: #fff;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  img {
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
  }
  @media (max-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const Navigator = styled.div`
  width: 730px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  /* margin-right: 90px; */
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 1024px) {
    margin-left: 50px;
    /* width: 480px; */
  }
`;
const Span = styled.div`
  color: #0c1825;
  font-size: 15px;
`;
// const Btnholder = styled.div`
//   width: 320px;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: row;
//   align-items: center;
//   @media (max-width: 768px) {
//     display: none;
//   }
//   @media (max-width: 900px) {
//     display: none;
//   }
//   @media (max-width: 1024px) {
//     width: 350px;
//   }
// `;
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
const SideIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const SideTogg = styled.div``;

import React from "react";
import styled from "styled-components";
import iph from "./apple-icon.svg";
import and from "./google-icon.svg";
import her from "./heroImg.png";
const Landing = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          <Holder>
            <H1>The Better Way</H1>
            <H2>to Save & Invest</H2>
          </Holder>

          <p>
            Piggyvest helps over 4 million customers achieve their financial
            goals by helping them save and invest with ease
          </p>
          <Button>Create free account</Button>
          <Down>
            <But>
              <Holding>
                <img src={iph} alt="" />
                <span>Get on Iphone</span>
              </Holding>
            </But>
            <Buts>
              <Wrapping>
                <img src={and} alt="" />
                <span>Get on Android</span>
              </Wrapping>
            </Buts>
          </Down>
        </Text>
        <Image src={her} />
        <Unknown></Unknown>
      </Wrapper>
    </Container>
  );
};
export default Landing;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media (macx-width: 900px) {
    /* margin-top: 30px; */
  }
`;

const Wrapper = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
`;
const Text = styled.div`
  width: 450px;
  height: 360px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  p {
    font-size: 15px;
    width: 100%;
    color: #0c1825;
  }
  @media (max-width: 900px) {
    align-items: center;
  }
  @media (max-width: 414px) {
    /* width: 350px; */
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    /* width: 350px; */
    width: 90%;
  }
  @media (max-width: 375px) {
    /* width: 350px; */
    width: 90%;
    /* height: 500px; */
  }
  @media (max-width: 320px) {
    width: 90%;
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  @media (max-width: 900px) {
    align-items: center;
  }
`;
const H1 = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: #0c1825;
  @media (max-width: 500px) {
    font-size: 40px;
  }
  @media (max-width: 414px) {
    font-size: 40px;
  }
  @media (max-width: 400px) {
    font-size: 40px;
  }
  @media (max-width: 320px) {
    font-size: 30px;
  }
  @media (max-width: 375px) {
    font-size: 25px;
  }
`;
const H2 = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: #0c1825;
  @media (max-width: 414px) {
    font-size: 40px;
  }
  @media (max-width: 400px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
  @media (max-width: 320px) {
    font-size: 30px;
  }
  @media (max-width: 375px) {
    font-size: 25px;
  }
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
const Down = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 60px;
  @media (max-width: 320px) {
    width: 90%;
  }
`;
const But = styled.div`
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #0c1825;
  border-radius: 10px;
  @media (max-width: 320px) {
    width: 100px;
  }
`;
const Buts = styled.div`
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #0c1825;
  border-radius: 10px;
  @media (max-width: 320px) {
    width: 100px;
  }
`;
const Holding = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  span {
    font-size: 10px;
    color: #0c1825;
  }
  @media (max-width: 320px) {
    width: 90%;
  }
`;
const Wrapping = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  span {
    font-size: 10px;
    color: #0c1825;
  }
  @media (max-width: 320px) {
    width: 90%;
  }
`;
const Image = styled.img`
  width: 400px;
  height: 400px;
  /* margin-right: 220px; */
  @media (max-width: 500px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 1024px) {
    /* display: none; */
    /* width: 250px; */
    /* margin-left: 100px; */
  }
`;
const Unknown = styled.div`
  width: 150px;
  height: 200px;
  @media (max-width: 500px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

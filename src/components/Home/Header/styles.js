import styled from "styled-components";

import homeBG from "../../../assets/homeBG.jpg";

export const Container = styled.header`
  position: relative;
  width: 100%;
  height: calc(100vh - 5rem);
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${homeBG});
  z-index: -2;
`;

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg, 
    rgba(0, 0, 0, 0) 10%, 
    rgba(17, 17, 17) 100%);
  transition: .4s;
  z-index: -1;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 6rem 0 4rem;
  width: 80%;
  height: 100%;
  color: #d1d1b1;
  border: 2px 0px 2px 2px solid red;
  background: transparent;
  z-index: 3;
`;

export const Title = styled.h1`
  color: #eee;
  font: 800 6em serif;
  text-align: center;
`;

export const Quote = styled.h2`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
  font: 600 2.1em serif;

  span {
    margin-top: .5rem;
    text-align: right;
    font-size: .6em;
  }
`;
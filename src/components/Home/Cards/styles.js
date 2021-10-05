import styled, { keyframes, css } from "styled-components";

// animation
export const bouncing = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;



export const Container = styled.section`
  background: #111;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 5rem 0;
  width: 80%;
`;

export const Content = styled.div`
  margin: 0 1rem;
  padding: 1rem .5rem;
  color: #fff;
  background: rgba(0,0,0,.6);
  text-align: center;
  border: 1px solid #fff;

  &:hover ${Name}:after {
    width: 5rem;
    background: #fff;
  }
  &:hover .img-gradient {
    opacity: .5;
  }
  &:hover .reveal-btn {
    opacity: 1;
  }
`;

export const Info = styled.div``;

export const Name = styled.h3`
  position: relative;
  margin-bottom: 1rem;
  font: 600 1.8em serif;

  &:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 2rem;
    height: 3px;
    background: #444;
    transition: .5s;
  }

  &:hover :after {
    height: 50%;
    opacity: .2;
  }
`;

export const Status = styled.div`
  height: 3rem;
  font: 500 1.3em Monospace;
  color: #eee;
`;

export const Profile = styled.figure`
  position: relative;
  margin: 0 auto;
  width: 18rem;
  border-radius: 10px;
  border-top: 1.5rem solid #444;
`;

export const Picture = styled.div`
  position: relative;
  width: 100%;
  height: 24rem;
  overflow: hidden;

  &:hover .magnifier {
    top: 0;
    opacity: 1;
  }
`;

export const PictureImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .5s;
  transform: ${props => props.zoom === false ? 'scale(1)' : 'scale(1.2)'};
`;

export const ImgGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    180deg, 
    rgba(0, 0, 0, 0) 0%, 
    rgba(0, 0, 0, 0.85) 100%);
  transition: .4s;
`;

export const Magnifier = styled.button`
  position: absolute;
  top: -2rem;
  right: 0;
  margin: 2px;
  font-size: 1.1em;
  border: none;
  background: none;
  filter: grayscale(1);
  transition: .8s;
  cursor: pointer;
  opacity: 0;
`;

export const Details = styled.figcaption`
  position: absolute;
  bottom: ${props => props.reveal === false ? '-48%' : '-5%'};
  left: 0;
  margin: 1rem 0;
  padding: 2rem 0 1rem;
  width: 100%;
  font: 300 1.2em/1.4 serif;
  background: rgba(0,0,0,.8);
  transition: .4s;
`;

export const RevealBtn = styled.button`
  position: absolute;
  top: ${props => props.reveal === false ? '-1.2rem' : '0'};
  left: 46%;
  width: 1.2rem;
  height: 1.2rem;
  color: #ccc;
  font: 300 1.2em sans-serif;
  text-align: center;
  border-radius: 50%;
  border: none;
  background: rgba(0,0,0,.5);

  ${props => props.reveal === false ?
    css`animation: ${bouncing} 1s ease-in-out infinite forwards`
     : `transform: scale(-1)`
  };

  transition: .5s;
  cursor: pointer;
  opacity: 0;
`;
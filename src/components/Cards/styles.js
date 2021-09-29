import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 0 auto;
  width: 80%;
`;

export const Content = styled.div`
  margin: 0 1rem;
  padding: 1rem .5rem;
  color: #fff;
  background: rgba(0,0,0,.6);
  text-align: center;
`;

export const Profile = styled.figure`

`;

export const Picture = styled.div`
  max-width: 20rem;
  height: 30rem;
  border-radius: 10px;
  overflow: hidden;
`;

export const PictureImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.figcaption`
  margin: 1rem 0;
`;
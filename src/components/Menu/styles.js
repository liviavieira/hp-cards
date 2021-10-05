import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 0 20px #111;
  background: #555;
  z-index: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  height: 5rem;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const Link = styled(GatsbyLink)`
  position: relative;
  color: #ddd;
  text-decoration: none;
  font: 600 1.4em Monospace;
  transition: .2s ease;

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 45%;
    width: 5px;
    height: 2px;
    background: #aaa;
    transition: .4s ease;
  }

  &:hover {
    color: #fff;

    :after {
      left: 0;
      width: 100%;
      background: #fff;
    }
  }
  
`;
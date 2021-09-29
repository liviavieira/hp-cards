import React from "react";
import * as S from "./styles";

export default function Menu() {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Link to="/">Home</S.Link>
        <S.NavBar>
          <S.Link to="/about">Sobre</S.Link>
          <S.Link to="/about">Sobre</S.Link>
          <S.Link to="/contact">Contato</S.Link>
          <S.Link to="/contact">Contato</S.Link>
        </S.NavBar>
      </S.Wrapper>
    </S.Header>
  )
}
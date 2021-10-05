import React from "react";
import * as S from "./styles";

export default function Header() {
  return (
    <S.Container>
      <S.Background />
      <S.Gradient />

      <S.Wrapper>
        <S.Title>Harry Potter API</S.Title>
        <S.Quote>
        “Do not pity the dead, Harry. Pity the living, and, above all those who live without love.”
        <span> – Albus Dumbledore, Harry Potter and the Deathly Hallows, Chapter 35</span>
        </S.Quote>
      </S.Wrapper>
    </S.Container>
  )
}
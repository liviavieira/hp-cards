import React from "react";
import * as S from "./styles";

import GlobalStyles from "../GlobalStyles";
import Menu from "../Menu";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles/>
      <Menu/>
      <S.Main>
        {children}
      </S.Main>
      <Footer/>
    </>
  )
};
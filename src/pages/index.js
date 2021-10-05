import React from "react";

import Layout from "../components/Layout";
import Header from "../components/Home/Header";
import Cards from "../components/Home/Cards";

export default function Index() {
  return (
    <Layout>
      <Header/>
      <Cards/>
    </Layout>
  )
};
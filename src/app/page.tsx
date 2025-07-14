import React from "react";
import HomeBanner from "./_components/HomeBanner";
import TopThree from "./_components/TopThree";
import NewsIndex from "./_components/NewsIndex";

export default function Home() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <NewsIndex></NewsIndex>
      <TopThree></TopThree>
    </>
  );
}

import React from "react";
import Head from "next/head";

import Banner from "../components/Banner";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Features from "../components/Home/Features";
import B2b from "../components/Home/B2b";
import Projects from "../components/Home/Projects";
import Contact from "../components/Contact";

const index = () => {
  return (
    <>
      <Head>
        <title>Kongrod - usługi stolarskie</title>
        <meta
          name="description"
          content="Szukasz profesjonalnego stolarza ? napisz do nas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Banner
        title="stolarnia Kongrod"
        subtitle="Zajmiemy się wszystkim od poczatku do końca"
        link="#about"
        btnText="czytaj więcej"
        direct="home"
      />
      <main>
        <About />
        <Services />
        <Features />
        <B2b />
        <Projects />
      </main>
      <Contact />
    </>
  );
};

export default index;

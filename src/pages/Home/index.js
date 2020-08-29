import React from "react";
import Nav from "../../components/Nav";
import Hero from "./Hero";
import Services from "./Services";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Footer />
    </>
  );
}

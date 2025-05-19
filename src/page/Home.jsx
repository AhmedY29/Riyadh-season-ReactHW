import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ZoneList from "../components/ZoneList";
import Recap from "../components/Recap";
import About from "../components/About";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ZoneList />
      <Recap />
      <About />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;

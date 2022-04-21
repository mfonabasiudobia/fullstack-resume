import React from "react";
import Intro from "/components/Intro";
import Skills from "/components/Skills";
import Contact from "/components/Contact";
import About from "/components/Aboutme";
import Portfolio from "/components/Portfolio";

const styles = {
    
}

const Home = () => {
  return (
    <>
    <Intro />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
    </>
  )
}

export default Home;

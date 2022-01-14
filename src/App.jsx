import React from "react";
import "./App.css";
import Hero from "./Hero/Hero";
import Aminities from "./Aminities/Aminities";
import FinalCTA from "./FinalCTA/FinalCTA";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <main>
        <Aminities />
        <FinalCTA />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;

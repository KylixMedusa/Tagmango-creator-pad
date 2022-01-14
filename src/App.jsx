import React from "react";
import "./App.css";
import Hero from "./Hero/Hero";
import Aminities from "./Aminities/Aminities";
import FinalCTA from "./FinalCTA/FinalCTA";
import Footer from "./Footer/Footer";
import VideoSection from "./Video/VideoSection";

function App() {
  return (
    <>
      <Hero />
      <main>
        <VideoSection />
        <Aminities />
        <FinalCTA />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;

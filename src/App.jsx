import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./Hero/Hero";
import Aminities from "./Aminities/Aminities";
import FinalCTA from "./FinalCTA/FinalCTA";
import Footer from "./Footer/Footer";
import VideoSection from "./Video/VideoSection";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let interval = setTimeout(() => {
      setLoading(false);
    }, 2300);
    return () => clearTimeout(interval);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fullscreen-modal">
          <div className="loader">Loading...</div>
        </div>
      )}
      <Hero loading={isLoading} />
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

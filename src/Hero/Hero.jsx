import React, { useEffect, useState, memo } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { PopupButton } from "@typeform/embed-react";
import "./Hero.css";
import Home from "../assets/home.png";
import Workspace from "../assets/workspace-2.jpg";
import Office from "../assets/Office.jpg";
import Lounge from "../assets/lounge_chill-4.jpg";
import PlayZone from "../assets/pool.jpg";
import Space from "../assets/background-1.jpg";

const Hero = () => {
  const texts = ["Home", "Workspace", "Office", "Lounge", "Play-zone", "Space"];
  const backgrounds = [Home, Workspace, Office, Lounge, PlayZone, Space];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        let current = document.querySelector(".active");
        let next = current.nextElementSibling;
        if (next) {
          current.classList.remove("active");
          next.classList.add("active");
        } else {
          current.classList.remove("active");
          document
            .querySelector(".hero--carousal")
            .firstElementChild.classList.add("active");
        }
        setTextIndex((index) => index + 1);
      },
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      className="hero--container"
      style={{
        backgroundImage: `url(${backgrounds[textIndex % backgrounds.length]})`,
      }}
    >
      <div className="hero--gradient"></div>
      <div className="hero--wrapper">
        <div className="hero__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130.049"
            height="27.115"
            viewBox="0 0 130.049 27.115"
          >
            <g id="_2489972672144" transform="translate(-37.1 -145.1)">
              <path
                id="Path_718"
                data-name="Path 718"
                d="M42.543,151.987v2.7H39.8v5.105a2.981,2.981,0,0,0,.915,2.167,2.941,2.941,0,0,0,2.167.867v2.745a5.756,5.756,0,0,1-5.78-5.78V145.1h2.7v6.839h2.745Z"
                transform="translate(0)"
                fill="#fff"
              ></path>
              <path
                id="Path_719"
                data-name="Path 719"
                d="M61.591,170.337a4.126,4.126,0,0,0,2.89-1.2,4.042,4.042,0,0,0,1.2-2.89,3.961,3.961,0,0,0-1.2-2.89,4.042,4.042,0,0,0-2.89-1.2,3.961,3.961,0,0,0-2.89,1.2,4.042,4.042,0,0,0-1.2,2.89,4.126,4.126,0,0,0,1.2,2.89A3.856,3.856,0,0,0,61.591,170.337Zm0,2.745a6.743,6.743,0,0,1-6.791-6.791,6.432,6.432,0,0,1,1.975-4.816,6.506,6.506,0,0,1,4.816-1.975,6.733,6.733,0,0,1,4.094,1.349V159.5H68.43v13.679H67.082l-1.4-1.349A7.467,7.467,0,0,1,61.591,173.082Z"
                transform="translate(-9.175 -7.611)"
                fill="#fff"
              ></path>
              <path
                id="Path_720"
                data-name="Path 720"
                d="M95.591,170.337a3.961,3.961,0,0,0,2.89-1.2,4.042,4.042,0,0,0,1.2-2.89,3.961,3.961,0,0,0-1.2-2.89,4.042,4.042,0,0,0-2.89-1.2,4.126,4.126,0,0,0-2.89,1.2,4.042,4.042,0,0,0-1.2,2.89,4.111,4.111,0,0,0,4.094,4.094Zm4.094,1.4a7.059,7.059,0,0,1-4.094,1.349,6.7,6.7,0,0,1-4.816-1.975,6.813,6.813,0,0,1,8.91-10.259l1.349-1.349h1.4v13.679a6.7,6.7,0,0,1-1.975,4.816,6.613,6.613,0,0,1-4.865,1.975,6.7,6.7,0,0,1-4.816-1.975l1.975-1.927a4.042,4.042,0,0,0,2.89,1.2,3.961,3.961,0,0,0,2.89-1.2,4.126,4.126,0,0,0,1.2-2.89v-1.445Z"
                transform="translate(-27.093 -7.754)"
                fill="#fff"
              ></path>
              <path
                id="Path_721"
                data-name="Path 721"
                d="M206.024,158.848a6.551,6.551,0,0,0-4.816,2.023h0a6.506,6.506,0,0,0-1.975,4.816h0a6.742,6.742,0,0,0,2.023,4.816h0a6.613,6.613,0,0,0,4.865,1.975h0a6.742,6.742,0,0,0,4.816-2.023h0a6.613,6.613,0,0,0,1.975-4.865h0a6.742,6.742,0,0,0-2.023-4.816h0a6.506,6.506,0,0,0-4.816-1.975h0C206.072,158.848,206.072,158.848,206.024,158.848Zm-2.842,9.729a4.042,4.042,0,0,1-1.2-2.89h0a4.079,4.079,0,0,1,1.156-2.89h0a3.9,3.9,0,0,1,2.89-1.252h0a4.3,4.3,0,0,1,2.89,1.156h0a4.042,4.042,0,0,1,1.2,2.89h0a4,4,0,0,1-1.156,2.89h0a4.042,4.042,0,0,1-2.89,1.2h-.048A3.63,3.63,0,0,1,203.182,168.577Zm-8.092-9.681-1.349,1.349a6.841,6.841,0,0,0-4.094-1.349h0a6.551,6.551,0,0,0-4.816,2.023h0a6.506,6.506,0,0,0-1.975,4.816h0a6.475,6.475,0,0,0,2.023,4.816h0a6.506,6.506,0,0,0,4.816,1.975h0a6.58,6.58,0,0,0,4.094-1.4h0l.048,1.349a3.961,3.961,0,0,1-1.2,2.89h0a4.3,4.3,0,0,1-2.89,1.252h0a3.961,3.961,0,0,1-2.89-1.2h0l-1.927,1.975a6.582,6.582,0,0,0,4.816,1.975h0a6.475,6.475,0,0,0,4.816-2.023h0a6.582,6.582,0,0,0,1.975-4.816h0l-.048-13.679Zm-8.284,9.777a3.9,3.9,0,0,1-1.252-2.89h0a4.126,4.126,0,0,1,1.2-2.89h0a3.9,3.9,0,0,1,2.89-1.252h0a4.042,4.042,0,0,1,2.89,1.2h0a3.961,3.961,0,0,1,1.2,2.89h0a3.813,3.813,0,0,1-1.156,2.89h0a4.042,4.042,0,0,1-2.89,1.2h0A4.079,4.079,0,0,1,186.806,168.674Zm-13.534-9.633a6.58,6.58,0,0,0-4.094,1.4h0l-1.349-1.349h-1.349l.048,13.679h2.745l-.048-7.032a4.164,4.164,0,0,1,1.252-2.794h0a3.78,3.78,0,0,1,2.794-1.156h0a3.961,3.961,0,0,1,2.89,1.2h0a4.3,4.3,0,0,1,1.252,2.89h0l.048,6.839h2.7l-.048-6.839a6.551,6.551,0,0,0-2.023-4.816h0a6.3,6.3,0,0,0-4.816-2.023Zm-12.33.048v1.349a7.059,7.059,0,0,0-4.094-1.349h0a6.475,6.475,0,0,0-4.816,2.023h0a6.506,6.506,0,0,0-1.975,4.816h0a6.475,6.475,0,0,0,2.023,4.816h0a6.582,6.582,0,0,0,4.816,1.975h0a6.58,6.58,0,0,0,4.094-1.4h0l1.349,1.349h1.4l-.1-13.679Zm-6.936,9.777a4.042,4.042,0,0,1-1.2-2.89h0a3.884,3.884,0,0,1,1.156-2.89h0a3.9,3.9,0,0,1,2.89-1.252h0a3.961,3.961,0,0,1,2.89,1.2h0a3.9,3.9,0,0,1,1.252,2.89h0a4.042,4.042,0,0,1-1.2,2.89h0a4.042,4.042,0,0,1-2.89,1.2h-.048A4.049,4.049,0,0,1,154.007,168.866Zm-13.534-9.633a6.437,6.437,0,0,0-5.443,2.745h0a6.663,6.663,0,0,0-5.491-2.7h0a6.784,6.784,0,0,0-4.094,1.4h0l-1.4-1.349H122.7l.1,13.679h2.7l-.048-7.032a3.957,3.957,0,0,1,1.252-2.794h0a3.812,3.812,0,0,1,2.842-1.156h0a4.079,4.079,0,0,1,2.89,1.156h0a3.825,3.825,0,0,1,1.252,2.89h0l.048,6.839h2.7l-.048-6.839a3.921,3.921,0,0,1,1.156-2.89h0a3.9,3.9,0,0,1,2.89-1.252h0a4.126,4.126,0,0,1,2.89,1.2h0a4.042,4.042,0,0,1,1.2,2.89h0l.048,6.839h2.745l-.048-6.839a6.742,6.742,0,0,0-2.023-4.816h0a6.506,6.506,0,0,0-4.816-1.975h.048Z"
                transform="translate(-45.762 -7.391)"
                fill="#fff"
                fill-rule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
        <div className="hero--content">
          <h1>
            A{" "}
            <ReactTextTransition
              text={texts[textIndex % texts.length]}
              springConfig={presets.slow}
              style={{ margin: "0 4px" }}
              inline
              overflow
            />{" "}
            for Creators
          </h1>
          <p>
            TagMango Creator Pad is India’s first Creator Home built with a
            whole lotta love by Creators for Creators
          </p>
          <PopupButton id="NFK7B7tn" className="hero__button">
            Book Now
          </PopupButton>
          <div className="hero--carousal">
            <div className="hero--carousal__bar active"></div>
            <div className="hero--carousal__bar"></div>
            <div className="hero--carousal__bar"></div>
            <div className="hero--carousal__bar"></div>
            <div className="hero--carousal__bar"></div>
            <div className="hero--carousal__bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);

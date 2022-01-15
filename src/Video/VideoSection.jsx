import React, { useEffect, useState } from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const [isShowingVideo, setShowingVideo] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isShowingVideo ? "hidden" : "auto";
  }, [isShowingVideo]);

  return (
    <>
      <section className="video-section">
        <div className="video-section__container">
          <div className="video-section__text-container">
            <span>The Story</span>
            <h2>TagMango Creator Pad</h2>
            <p>
              The Creator Economy impacts millions of people around the globe
              everyday through value, knowledge, entertainment and inspiration.
              Yet, what this economy has always lacked is a place where all
              like-minded folks could work, stay, network and create TOGETHER.
            </p>
          </div>
          <div className="video-section__video-container">
            <div className="video-section__video">
              <button onClick={() => setShowingVideo(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.025"
                  height="24.938"
                  viewBox="0 0 20.025 24.938"
                >
                  <g id="play" transform="translate(-25.2 -84.035)">
                    <path
                      id="Path_1106"
                      data-name="Path 1106"
                      d="M44.361,98.087l-16.326,10.6a1.9,1.9,0,0,1-2.834-1.833V86.164a1.889,1.889,0,0,1,2.834-1.833l16.326,10.6A1.872,1.872,0,0,1,44.361,98.087Z"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {isShowingVideo && (
        <div className="fullscreen-modal">
          <video
            className="fullscreen-modal__video"
            controlsList="nodownload"
            autoPlay={true}
            controls
            width="100%"
          >
            <source
              src="https://tagmango.com/staticassets/TagMango+Launch+Video+FINAL.mp4"
              type="video/mp4"
            />
          </video>
          <button
            onClick={() => setShowingVideo(false)}
            className="fullscreen-modal__icon"
          >
            ✖
          </button>
        </div>
      )}
    </>
  );
};

export default React.memo(VideoSection);

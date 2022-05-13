import React, { Fragment } from "react";
import "./FinalCTA.css";

const Finalcta = () => {
  return (
    <Fragment>
      <div className="finalcta--container">
        <div className="finalcta--wrapper">
          <h2>Join the community - Fill the application form below to apply for the programme! </h2>
          <a href="https://forms.gle/BxgWgdRKgrZCtWSJ7" target="_blank" className="apply_now_white_button">
            Apply Now
          </a>
        </div>
      </div>
      <div className="heroFeaturedWrapper">
        <p>featured in</p>
        <div className="brandGrid aos-init aos-animate" data-aos="fade-in" data-aos-dealy={500}>
          <a
            href="https://www.vccircle.com/y-combinator-bets-on-creator-monetisation-focussed-tagmango"
            target="_blank"
            className="brandBlock vc"
            rel="noreferrer">
            <img src="https://tagmango.com/staticassets/1639738655850.svg" alt="VCCIRCLE LOGO" />
          </a>
          <a
            href="https://economictimes.indiatimes.com/tech/funding/creator-monetisation-startup-tagmango-secures-rs-5-5-cr-from-y-combinator-others/articleshow/79559349.cms?from=mdr"
            target="_blank"
            className="brandBlock et"
            rel="noreferrer">
            <img src="https://tagmango.com/staticassets/1639033916532.svg" alt="The Economic Times Logo" />
          </a>
          <a
            href="https://inc42.com/buzz/funding-galore-indian-startup-funding-of-the-week-november-30-december-5/"
            target="_blank"
            className="brandBlock i42"
            rel="noreferrer">
            <img src="https://tagmango.com/staticassets/1639033859227.svg" alt="Inc42 Logo" />
          </a>
          <a
            href="https://www.forbes.com/profile/tagmango/?sh=6d22905634a1"
            target="_blank"
            className="brandBlock fr"
            rel="noreferrer">
            <img src="https://tagmango.com/staticassets/1639546171320.svg" alt="Forbes Logo" />
          </a>
          <a
            href="https://yourstory.com/2020/12/funding-alert-creator-monetization-startup-tagmango-y-combinator-kevin-lin-xrm-media"
            target="_blank"
            className="brandBlock ys"
            rel="noreferrer">
            <img src="https://tagmango.com/staticassets/1638887387488.svg" alt="YOURSTORY LOGO" />
          </a>
          <a
            href="https://www.entrepreneur.com/article/360950"
            target="_blank"
            className="brandBlock ei"
            rel="noreferrer">
            <img src="https://tagmango.com/staticassets/1638887206153.svg" alt="Entrepreneur India Logo" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Finalcta;

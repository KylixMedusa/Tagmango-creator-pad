import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Aminities.css";

const options = {
  perPage: 2,
  type: "loop",
  gap: "1rem",
  autoplay: true,
  height: "450px",
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
};

const Aminities = () => {
  return (
    <div className="aminities--container">
      <div className="aminities--wrapper">
        <div className="aminities--listitem">
          <figure className="aminities--figure">
            <img src="https://tagmango.com/staticassets/1642187058846.jpg" alt="" />
          </figure>
          <div className="aminities--content">
            <h3 className="aminities--content--title">About the programme</h3>
            <p className="aminities--content--content">
              TagMango Residency is an in-house programme where we will bring together people who have a shared passion
              to learn and build with others. We’re starting with 4 different cohorts, each 2-week long across multiple
              niches - Creator-preneurs, Finance, Web 3.0 and Start-ups.
            </p>
            <p className="aminities--content--content">
              For these 2 weeks, the cohort will be staying together at the TagMango Creator Pad, the beautiful home
              we’ve built for all creative folks.
            </p>
            <p className="aminities--content--content">
              Each of these cohorts will have a multitude of creators, professionals and experts who are curious about
              knowledge and love to share it too. Activities and events made specific to the niche will be held to
              ensure that you get the best out of the 2 weeks you spend there with your group.
            </p>
            <p className="aminities--content--content">
              The details of each of these cohorts, and the associated basic itinerary is mentioned below (more will be
              revealed if you’re selected for the cohort)
            </p>
          </div>
        </div>
        {/* <div className="about-us-more-content">
          <p>
            Each cohort will have activities, events and an itinerary tailor made specific to the niche to ensure that
            you get the best out of the 2 weeks you spend there with your group. The details of each of these cohorts,
            and the associated basic itinerary is mentioned below (more will be revealed if you’re selected for the
            cohort)
          </p>
        </div> */}
        <div className="investorLogoBar">
          <p>BACKED BY</p>
          <div className="investorLogoBarInner">
            <div className="investorBox aos-init aos-animate" data-aos="fade-up" data-aos-dealy={100}>
              <div className="investorLogo yc">
                <img src="https://tagmango.com/staticassets/1638950433621.svg" alt="YCombinator" />
              </div>
              <div>
                <span className="investorTitle">Y Combinator</span>
              </div>
            </div>
            <div className="investorBox aos-init aos-animate" data-aos="fade-up" data-aos-dealy={200}>
              <div className="investorLogo pf">
                <img src="https://tagmango.com/staticassets/1638950958968.png" alt="Pioneer Fund Logo" />
              </div>
              <div>
                <span className="investorTitle">Pioneer Fund</span>
              </div>
            </div>
            <div className="investorBox aos-init aos-animate" data-aos="fade-up" data-aos-dealy={300}>
              <div className="investorLogo kl">
                <img src="https://tagmango.com/staticassets/1638951502875.jpeg" alt="Kevin Lin" />
              </div>
              <div>
                <span className="investorTitle">Kevin Lin</span>
                <span className="investorSubtitle">Co-Founder, Twitch</span>
              </div>
            </div>
            <div className="investorBox aos-init aos-animate" data-aos="fade-up" data-aos-dealy={400}>
              <div className="investorLogo kl">
                <img
                  src="https://tagmango.com/staticassets/1638959341610.jpg_background=000000&cropX1=2247&cropX2=4263&cropY1=0&cropY2=2015"
                  alt=""
                />
              </div>
              <div>
                <span className="investorTitle">Ankur Nagpal</span>
                <span className="investorSubtitle">Co-Founder, Teachable</span>
              </div>
            </div>
            <div className="investorBox aos-init aos-animate" data-aos="fade-up" data-aos-dealy={500}>
              <div className="investorLogo kl">
                <img src="https://tagmango.com/staticassets/1638959604280.png" alt="JAM FUND" />
              </div>
              <div>
                <span className="investorTitle">JAM Fund</span>
                <span className="investorSubtitle">Co-Founder, Tinder</span>
              </div>
            </div>
          </div>
        </div>
        <div className="aminities--title">
          <h2>Cohorts</h2>
        </div>
        <div className="aminities--list">
          <div className="aminities--listitem">
            <figure className="aminities--figure">
              <img src="/images/creatorpreneur.jpeg" alt="" />
            </figure>
            <div className="aminities--content">
              <h3 className="aminities--content--title">
                <span className="count">01</span>Creator-preneurs
              </h3>
              <p className="aminities--content--content">
                We love creators and founders who are building for the creator economy (after all it’s what we do). As a
                part of this cohort, you’ll be staying with some of India’s top creators and founders and ideating,
                brainstorming, and building together.
              </p>
              <p className="aminities--content--content">Activities and Events you can expect -</p>
              <ul className="coherts-list">
                <li>Ice-breaking event</li>
                <li>Workshops and Keynotes on content creation and personal brand building</li>
                <li>Events and Meet-ups with other creators</li>
                <li>Team dinners</li>
                <li>Farewell Party</li>
              </ul>
              <a href="https://forms.gle/BxgWgdRKgrZCtWSJ7" target="_blank" className="apply_now_button">
                Apply for this cohort
              </a>
            </div>
          </div>
          <div className="aminities--listitem">
            <figure className="aminities--figure">
              <img src="/images/finance.jpeg" alt="" />
            </figure>
            <div className="aminities--content">
              <h3 className="aminities--content--title">
                <span className="count">02</span>Finance
              </h3>
              <p className="aminities--content--content">
                India has become a leading name in the world of finance across all niches - start-ups, tech, and even
                content creation. What better way to catapult this than bringing all the folks together? Meet, stay and
                work with people born and bred in f inance and the ones who are looking to create a dent in this
                ecosystem.
              </p>
              <ul className="coherts-list">
                <li>Ice-breaking event</li>
                <li>Workshops and Keynotes on wealth creation, finance content creation, etc.</li>
                <li>Events and Meet-ups with field experts</li>
                <li>Team dinners</li>
                <li>Farewell Party</li>
              </ul>
              <a href="https://forms.gle/BxgWgdRKgrZCtWSJ7" target="_blank" className="apply_now_button">
                Apply for this cohort
              </a>
            </div>
          </div>
          <div className="aminities--listitem">
            <figure className="aminities--figure">
              <img src="/images/web30.jpeg" alt="" />
            </figure>
            <div className="aminities--content">
              <h3 className="aminities--content--title">
                <span className="count">03</span>Web 3.0
              </h3>
              <p className="aminities--content--content">
                Web 3.0 is our future, whether we accept it or not. There are people who are building pathbreaking
                products and spreading awareness about web 3.0 - and these people are the ones who will be a part of
                this cohort. Join people building for the future!
              </p>
              <ul className="coherts-list">
                <li>Ice-breaking event</li>
                <li>Workshops and interactions with web 3.0 and crypto startups and enthusiasts</li>
                <li>Events and Meet-ups with other web 3.0 enthusiasts and builders</li>
                <li>Team dinners</li>
                <li>Farewell Party</li>
              </ul>
              <a href="https://forms.gle/BxgWgdRKgrZCtWSJ7" target="_blank" className="apply_now_button">
                Apply for this cohort
              </a>
            </div>
          </div>
          <div className="aminities--listitem">
            <figure className="aminities--figure">
              <img src="/images/startups.jpeg" alt="" />
            </figure>
            <div className="aminities--content">
              <h3 className="aminities--content--title">
                <span className="count">04</span>Startups
              </h3>
              <p className="aminities--content--content">
                Founders and Investors have a special equation. One of them dares to dream, the other sees the vision
                and fulfils it. Apply to be a part of this cohort if you’re a founder or someone looking to invest and
                explore synergies with people who know one thing best - how to build.
              </p>
              <ul className="coherts-list">
                <li>Ice-breaking event</li>
                <li>Workshops and panel discussions</li>
                <li>Events and Meet-ups with other founders and investors</li>
                <li>Team dinners</li>
                <li>Farewell Party</li>
              </ul>
              <a href="https://forms.gle/BxgWgdRKgrZCtWSJ7" target="_blank" className="apply_now_button">
                Apply for this cohort
              </a>
            </div>
          </div>
          {/* <div className="aminities--listitem">
            <figure className="aminities--figure">
              <img src="https://tagmango.com/staticassets/1642185642264.jpg" alt="" />
            </figure>
            <div className="aminities--content">
              <h3 className="aminities--content--title">
                <span className="count">05</span>Community
              </h3>
              <ul className="coherts-list">
                <li>A co-working space to create content, work, host meetings;</li>
                <li>
                  Curated panel discussions, events and access to all TagMango events during the duration of the cohort
                  for free
                </li>
                <li>A production team to capture content, meetings and anything else you want</li>
                <li>A resource centre which can help you with connects, leads or ideas;</li>
              </ul>
              <br />
              <p className="aminities--content--content">And also the little things in life -</p>

              <ul className="coherts-list">
                <li>Access to support staff;</li>
                <li>24x7 access to the pool and the gym;</li>
                <li>Mental and physical health instructors</li>
              </ul>
            </div>
          </div> */}
          {/* <div className="about-us-more-content">
            <p>
              And this will not be the end. The community you have formed will stay forever and will enjoy premium
              TagMango benefits like access to workshops, events and Pad usage. Forever.
            </p>

            <p>The crop, the soil, the fertilisers and the environmental conditions are all in place.</p>
            <p>Time to begin the Harvest.</p>
          </div> */}
          {/* <div className="aminities--listitem">
            <figure className="aminities--figure">
              <img src="https://tagmango.com/staticassets/1642186429050.jpg" alt="" />
            </figure>
            <div className="aminities--content">
              <h3 className="aminities--content--title">
                <span className="count">06</span>Outdoor Gym because why NOT?
              </h3>
              <p className="aminities--content--content">
                We allow our Creators to ‘Flex’ in more ways than just one! Work on those biceps and glutes while you
                create amazing content. We also host pull-up competitions so get those shoulders pumped up!
              </p>
            </div>
          </div> */}
          {/* <div className="aminities--listitem">
            <figure className="aminities--figure">
              <img src="https://tagmango.com/staticassets/1642187276498.jpg" alt="" />
            </figure>
            <div className="aminities--content">
              <h3 className="aminities--content--title">
                <span className="count">07</span>Elite Hospitality ✨
              </h3>
              <p className="aminities--content--content">
                Apart from your mother, guess who will always be happy to see and welcome you? The beautiful TagMango
                team with it’s super cool members! You’ll always feel at home with us!
              </p>
            </div>
          </div> */}
          {/* <div className="aminities--listitem">
            <figure className="aminities--figure">
              <img src="https://tagmango.com/staticassets/1642187058846.jpg" alt="" />
            </figure>
            <div className="aminities--content">
              <h3 className="aminities--content--title">
                <span className="count">08</span>Community Events you would LOVE to be a part of
              </h3>
              <p className="aminities--content--content">
                Participate in the variety of workshops, webinars and events we’ll host at our pad where you can
                interact, meet like-minded people and grow - together! (PS - we might hold Antakshri competitions, don’t
                judge us!)
              </p>
            </div>
          </div> */}
          <div className="why-is-special">
            <div className="aminities--title">
              <h2>Why is the TagMango Residency Programme Special?</h2>
            </div>
            <p className="content-p">
              India as a country has never been shy of resources or talented individuals, however, we are so used to
              building individually that we often forget what we’re capable of as a team.
            </p>
            <div className="content-slider">
              <Splide options={options} aria-label="My Favorite Images">
                <SplideSlide>
                  <img src="/images/slider1.jpeg" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/slider2.jpeg" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/slider3.jpeg" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/slider4.jpeg" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/slider5.jpeg" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/slider6.jpeg" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/slider7.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/slider8.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/slider9.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/slider10.jpeg" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/images/slider11.jpeg" alt="" />
                </SplideSlide>
              </Splide>
            </div>
            <p className="content-p">
              The objective of these cohorts is to bring the best and the hungry together - so that you can maximise on
              each other's potential, share strengths, utilise resources and solve problems by just being together.
            </p>
            <p className="content-p">
              When you eat, sleep, ideate and work with the best in the business - ideas that can shape the world are
              born. We’re here to create a community that can build the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aminities;

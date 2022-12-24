import { useState } from "react";
import Education from "./Education";
import Programming from "./Programming";
import Projects from "./Projects";

import "./styles.css";
import Contact from "./contact";

export default function App() {
  const [education, seteducation] = useState(true);
  // const [workhistory, setworkhistory] = useState(false);
  const [programming, setprogramming] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);

  function setAllFalse() {
    seteducation(false);
    // setworkhistory(false);
    setprogramming(false);
    setprojects(false);
  }

  function changeState(function1, state1) {
    setAllFalse();
    function1(state1);
  }

  return (
    <div className="App">
      <div className="navbar-option-mobile">
        <div className="bars mx-2" onClick={() => setopennav(!opennav)}></div>
      </div>
      <nav
        className={
          !opennav
            ? "d-flex bg-new mt-0 px-9 py-5 navbar-new flex-rows nav transition-all"
            : "d-flex bg-new mt-0 px-9 py-5 navbar-fixed-new flex-rows nav transition-all"
        }
      >
        <span className="brand-name ">Hey There</span>
        <div className="d-flex flex-rows">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Home
          </a>
          <a
            href=" #aboutme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            About Me
          </a>
          <a
            href=" #resume"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Resume
          </a>
          <a
            href=" #contactme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Contact Me
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-2" id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12 justify-content-center">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Tanmay Gupta</span>
              </span>
              <span className="Im-text-enthusiast py-2">
                A budding Web Developer{" "}
                <span className="Im-emoji">(° ∀ °)</span>
              </span>
              <span className="Im-text-subheading">
                Doing something Everyday
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me ">
                  Hire Me
                </a>
                <a
                  href="https://drive.google.com/file/d/1zlRvQqQUOXnu-k7OeSp3qpbbDR_02LSR/view?usp=sharing"
                  className="btn-resume-me"
                  target="_blank"
                >
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://res.cloudinary.com/url-shortener-help/image/upload/v1654507314/1637676013636_j2s4lb.jpg"
              ></img>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className="about-me-section about-me-inside my-5">
        <div className="d-flex flex-column" id="aboutme">
          <span className="about-me-text">About Me</span>
          <span className="why-text-sub">Why Choose Me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                className="lottie-1"
                src="https://assets8.lottiefiles.com/packages/lf20_1ixgi8rs.json"
                background="transparent"
                speed="1"
                // style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                Full Stack Web Developer with background knowledge in MERN Stack
                with React Hooks, along with a knack for building applications
                with utmost efficiency.{" "}
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few Highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Full-Stack Web Development</li>
                    <li>React Hooks for state management</li>
                    <li>
                      NodeJS, ExpressJs, MongoDB, SQL for backend framework
                    </li>
                    <li>
                      Experienced with Socket.io for real time communications
                    </li>
                    {/* <li>Text-5</li> */}
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My formal Bio Details</span>

        <div
          className="resume-new-section row "
          style={{ width: "70%", marginInline: "auto", height: "400px" }}
        >
          <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex px-0 shadow-lg flex-row ">
            <div className="d-flex flex-column bg-new text-white ">
              <span className="icons-span">
                <i className="fa-solid fa-graduation-cap"></i>
              </span>
              {/* <span className="icons-span">
                <i className="fa-solid fa-briefcase"></i>
              </span> */}
              <span className="icons-span">
                <i className="fa-solid fa-laptop-code"></i>
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-list-check"></i>
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? "resume-option-items"
                    : " selected resume-option-items "
                }
                onClick={() => {
                  changeState(seteducation, true);
                }}
              >
                Education
              </span>
              {/* <span
                className={
                  workhistory === false
                    ? "resume-option-items"
                    : " selected resume-option-items "
                }
                onClick={() => {
                  changeState(setworkhistory, true);
                }}
              >
                Work
              </span> */}
              <span
                className={
                  programming === false
                    ? "resume-option-items"
                    : " selected resume-option-items "
                }
                onClick={() => {
                  changeState(setprogramming, true);
                }}
              >
                Programming
              </span>
              <span
                className={
                  projects === false
                    ? "resume-option-items"
                    : " selected resume-option-items "
                }
                onClick={() => {
                  changeState(setprojects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 resume-right-sectio card-color">
            {education === true && <Education />}
            {/* {workhistory === true && <Work />} */}
            {programming === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>

      <div className="contact-me-part" id="contactme">
        <div className="relative-bg"></div>

        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact Me</span>
          <span className="why-text-sub mb-5">Lets keep in touch</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}

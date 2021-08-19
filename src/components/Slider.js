import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig.json";
//https://vincentgarreau.com/particles.js/#default

const Slider = () => {
  return (
    <section className="home" id="home">
     <Particles params={particlesConfig}  className="App-particles__container" />
      <div className="content">
        <h3>
          Hi,
          <br /> I'm <span>Moustapha</span>,
          <br /> Software Engineer
        </h3>
        <p>
          i am into <span className="typing-text" />
        </p>
        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down" />
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/moustapha-el-outmani/"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                className="github"
                href="https://github.com/moustaphaOut"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a
                className="twitter"
                href="https://twitter.com/"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a
                className="telegram"
                href="https://t.me/lifecode5"
                target="_blank"
              >
                <i className="fab fa-telegram-plane" />
              </a>
            </li>
            <li>
              <a className="instagram" href="#">
                <i className="fab fa-instagram" target="_blank" />
              </a>
            </li>
            <li>
              <a
                className="dev"
                href="https://dev.to/"
                target="_blank"
              >
                <i className="fab fa-dev" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Slider;

import React, { useRef, useState } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig.json";
//https://vincentgarreau.com/particles.js/#default
// import SmokeElement from "smoke-effect-react";
const Slider = () => {
  const [copySuccess, setCopySuccess] = useState(
    "moustapha.eloutmani@gmail.com"
  );
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Email Copied!");
  }
  const CONTACTS = [
    {
      name: "linkedin",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/moustapha-el-outmani",
    },
    {
      name: "github",
      icon: "fab fa-github",
      link: "https://github.com/moustaphaout",
    },
    {
      name: "mail",
      icon: "fas fa-envelope",
      link: "mailto:moustapha.eloutmani@gmail.com",
    },
    {
      name: "twitter",
      icon: "fab fa-twitter",
      link: "https://twitter.com/",
    },
    {
      name: "twitter",
      icon: "fab fa-telegram-plane",
      link: "https://t.me/",
    },
    {
      name: "instagram",
      icon: "fab fa-instagram",
      link: "https://instagram.com/",
    },
    {
      name: "dev",
      icon: "fab fa-dev",
      link: "https://dev.me/",
    },
  ];
  return (
    <section className="home" id="home">
      {/* <div   className="App-particles__container">

      <SmokeElement
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png"
          opacity="1"
          
          smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
          smokeOpacity="0.3"
          />
          </div> */}
      <Particles
        params={particlesConfig}
        className="App-particles__container"
      />
      <div className="content">
        <h3>
          Hi,
          <br /> I'm Moustapha,
          <br /> <span> Software Engineer</span>
        </h3>
        <p>
          10 sep #available to work
        </p>
        <a href="#about" className="btn" title="Click to Copy" onClick={copyToClipboard}>
          <span> {copySuccess}</span>
          <i className="fas fa-arrow-circle-down" />
        </a>
        <input
          style={{ backgroundColor: "#7E9DC7", color: "#7E9DC7" }}
          ref={textAreaRef}
          value="moustapha.eloutmani@gmail.com"
        />
        {/* <div className="socials">
          <ul className="social-icons">
            {CONTACTS.map((contact) => {
              return (
                <li>
                  <a
                    href={contact.link}
                    className={contact.name}
                    target="_blank"
                  >
                    <i className={contact.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default Slider;

import React, { useRef, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Provider } from "./Layout";

const About = () => {
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
  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-user-alt" /> About <span>Me</span>
      </h2>
      <div className="row">
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src="./assests/images/profile.jpg"
            alt=""
          />
            <div className="">
            <div className="button-area">
              <button title="Click to Copy" onClick={copyToClipboard}>
                {copySuccess}
                <i className="fa fa-paper-plane" />
              </button>
            </div>
            <br />

            <input
              style={{ backgroundColor: "#fff", color: "#fff" }}
              ref={textAreaRef}
              value="moustapha.eloutmani@gmail.com"
            />
          </div>
        </div>
        <div className="content">
          <h3>I'm Moustapha</h3>
          <span className="tag">Passionate IT</span>
          <p>
            Motivated, determined and passionate about IT, ready to face the
            impossible and learn new technology. Ready to invest and give the
            best to meet the challenges of the market.
          </p>
          <div className="box-container">
            <div className="box">
              <p>
                <span> age: </span> 23
              </p>
              <p>
                <span> phone : </span> +212 697 19 58 69
              </p>
            </div>
            <div className="box">
              <p>
                <span> email : </span> moustapha.eloutmani@gmail.com
              </p>
              <p>
                <span> place : </span> PAMPLONA 32 P03, MELILLA, SPAIN
              </p>
            </div>
          </div>
          <div className="resumebtn">
            <a href="assets/mini CV.pdf" className="btn" download>
              <span>Resume</span>
              <i className="fas fa-chevron-right" />
            </a>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;

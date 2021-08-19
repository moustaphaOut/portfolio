import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Provider } from "./Layout";

const About = () => {
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
        </div>
        <div className="content">
          <h3>I'm Moustapha</h3>
          <span className="tag">Passionate Web and App Developer</span>
          <p>
            Currently pursuing my last year engineering focused on information
            technology. Motivated, determined and passionate about IT, ready to
            face the impossible and learn new technology. Ready to invest and
            give the best to meet the challenges of the market.
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
            <a href="#" className="btn">
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

import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Provider } from "../Layout";

const Education = () => {
  return (
      <section className="education" id="education">
        <h1 className="heading">
          <i className="fas fa-graduation-cap" /> My <span>Education</span>
        </h1>
        <p className="qoute">
          Education is not the learning of facts, but the training of the mind
          to think.
        </p>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img
                draggable="false"
                src="./assests/images/educat/campus-universit-mundiapolis.jpg"
                alt="University Mundiapolis"
              />
            </div>
            <div className="content">
              <h3>University Mundiapolis | Software Engineer</h3>
              <p>
                Software Engineer degree from MUNDIAPOLIS University of
                Casablanca, Morocco
              </p>
              <h4>2016-2021 | Completed</h4>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img
                draggable="false"
                src="./assests/images/educat/Ar-rissala.jpg"
                alt="Ar'rissala"
              />
            </div>
            <div className="content">
              <h3>Bachelor of Physics</h3>
              <p>
                Baccalaureate in Physics at Ar'rissala institution of Nador,
                Morocco | Ar'rissala
              </p>
              <h4>2015-2016 | Completed</h4>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Education;
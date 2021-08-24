import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Provider } from "../Layout";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ dataParentToChild }) => {
  let left = false;
  const EXPERIENCES = [
    {
      title: "OS WebSolutions",
      company: "Software Engineer | Internship",
      date: "Feb 2021 - Aug 2021",
    },
    {
      title: "OS WebSolutions",
      company: "Web, Mobile Developer And Customer Relationship | Internship",
      date: "Feb 2020 - July 2020",
    },
    {
      title: "NXP Semiconductors",
      company: "1rst NXP Cup winner in Morocco | Competition",
      date: "Mar 2019 – Apr 2019",
    },
    {
      title: "MCPC",
      company: "Qualification & Participation (49°)",
      date: "Oct 2018",
    },
    {
      title: "3Etech",
      company: "Mobile Application Developer | Internship",
      date: "June 2019 - July 2019",
    },
    {
      title: "MCPC",
      company: "Qualification & Participation (79°)",
      date: "Oct 2017",
    },
    {
      title: "R&B Consulting",
      company: "ODOO Developer | Internship",
      date: "June 2018 - July 2018",
    },
    {
      title: "ONEE",
      company: "SQL Developer | Internship",
      date: "June 2017 - July 2017",
    },
  ];
  return (
    <div>
      {dataParentToChild ? (
        <section className="experience" id="experience">
          <h2 className="heading">
            <i className="fas fa-briefcase" /> Experience
          </h2>
          <div className="timeline">
            {EXPERIENCES.slice(0, 6).map((experience) => {
              left = !left;
              return (
                <ExperienceCard
                  title={experience.title}
                  company={experience.company}
                  date={experience.date}
                  isLeft={left}
                />
              );
            })}
          </div>{" "}
          <div className="morebtn">
            <Link to="/experiences" className="btn">
              <span>View All</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </section>
      ) : (
        <section className="experience" id="experience">
          <div style={{marginBottom: "1%"}}>

</div>
          <h2 className="heading">
            <i className="fas fa-briefcase" /> Experience
          </h2>
          <div className="quote">
            <span>
              every experience in your life is being orchestrated to teach you
              something you need to know to move forward.
            </span>
          </div>
          <br/>
          <br/>

          <div className="timeline">
            {EXPERIENCES.map((experience) => {
              left = !left;
              return (
                <ExperienceCard
                  title={experience.title}
                  company={experience.company}
                  date={experience.date}
                  isLeft={left}
                />
              );
            })}
          </div>
          <div className="morebtn">
            <a href="/#experience" className="btn">
              <i className="fas fa-arrow-left" />
              <span>Back to Home</span>
            </a>
          </div>
        </section>
      )}
    </div>
  );
};

export default Experience;

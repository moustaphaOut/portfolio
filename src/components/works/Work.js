import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Provider } from "../Layout";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Portfolio Website",
    cover: "portfolio1.PNG",
    description:
      "Personal portfolio website. Don't need much info about it, just scroll down. You're here only!",
    isPrivate: false,
    githubLink: "https://github.com/moustaphaOut/Portfolio-Website",
  },
  {
    title: "Words Battle Game",
    description:
      "Plan, manage, consult and develop was my main task as a Project manager. WordsBattle was built with #flutter.",
    cover: "Words-Battle.jpeg",
    isPrivate: true,
    githubLink: "",
  },
  {
    title: "PSD automatizations script",
    description:
      "I increased my productivity by creating a script using #JSX that takes data from #Json file to generate posts with same design and different content in few seconds.",
    cover: "script.jpg",
    isPrivate: false,
    githubLink: "",
  },
  {
    title: "BetterMe App",
    description:
      "Plan, manage, consult and develop was my main task as a Project manager. WordsBattle was built with #flutter.",
    cover: "maintenance.jpg",
    isPrivate: true,
    githubLink: "",
  },
  {
    title: "Internationalization script",
    description:
      "In order to boost my productivity I created a script using #VBA that generate #Json files from excel, and another script using #dart that internationalize my #Flutter app using the output #Json files.",
    cover: "script.jpg",
    isPrivate: false,
    githubLink: "",
  },
  {
    title: "Cinema Management",
    description:
      "Design and production of a web and mobile applications for cinema management using #Spring Boot MVC in backend, #Angular in front-end and #Flutter for the mobile application.",
    cover: "cinema.JPG",
    isPrivate: false,
    githubLink: "",
  },
  {
    title: "PHP E-commerce",
    description:
      "Design and production of a web for E-commerce (front office and back office) using #PHP.",
    cover: "PHP-SHOP.png",
    isPrivate: false,
    githubLink: "electrojoud",
  },

  {
    title: "JavaSimplex",
    description:
      "I created a #C and #JAVAFX application, used to solve linear optimization problems using Simplex method. JavaSimplex generates the result in PDF format.",
    cover: "maintenance.jpg",
    isPrivate: false,
    githubLink: "",
  },
  {
    title: "NXP Car",
    description:
      "Assembling and programming in #C language of an autonomous mini car to follow different circuits.",
    cover: "NXP-CUP.JPG",
    isPrivate: true,
    githubLink: "",
  },
  {
    title: "Back-end Ecommerce shop",
    description: "Creation of backend shop using API RESTFUL #symfony4.",
    cover: "symfony-4.png",
    isPrivate: false,
    githubLink: "BackEndShop-API",
  },
  {
    title: "RFID",
    description:
      "I have implemented a #badge validation system, using a microcontroller #Arduino.",
    cover: "RFID.JPG",
    isPrivate: false,
    githubLink: "",
  },
  {
    title: "E-learning",
    description:
      "I created a dynamic e-learning website, which help teachers to manage their courses and for student to view their courses. For the implementation I mainly used #PHP, #HTML, #JS and #MySQL.",
    cover: "myCourse.JPG",
    isPrivate: false,
    githubLink: "myCourse",
  },
  {
    title: "Others projects (+8)",
    description:
      "I have created many others projects in different domains like absents management for university (Web app), smart stock (Embedded app) and Production management (Excel VPA). For more information, check my #GitHub.",
    cover: "cmsoon.png",
    isPrivate: false,
    githubLink: "",
  },
];

const Work = ({ dataParentToChild }) => {
  return (
    <div>
      {dataParentToChild ? (
        <section className="work" id="work">
          <h2 className="heading">
            <i className="fas fa-laptop-code" /> Projects <span>Made</span>
          </h2>
          <div className="box-container">
            {PROJECTS.slice(0, 6).map((project) => {
              return (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  cover={project.cover}
                  isPrivate={project.isPrivate}
                  githubLink={project.githubLink}
                />
              );
            })}
          </div>
          <div className="viewall">
            <Link to="/works" className="btn">
              <span>View All</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </section>
      ) : (
        <section className="work" id="work">
          <h2 className="heading">
            <i className="fas fa-laptop-code" /> Projects <span>Made</span>
          </h2>
          <div className="box-container">
            {PROJECTS.map((project) => {
              return (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  cover={project.cover}
                  isPrivate={project.isPrivate}
                  githubLink={project.githubLink}
                />
              );
            })}
          </div>{" "}
          <div className="backbtn">
            <a href="/#work" className="btn">
              <i className="fas fa-arrow-left" />
              <span>Back to Home</span>
            </a>
          </div>
        </section>
      )}
    </div>
  );
};

export default Work;

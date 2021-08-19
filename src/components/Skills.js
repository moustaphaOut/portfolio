import React from "react";
import SkillBar from "./SkillBar";

const SKILLS = [
  [
    {
      title: "HTML",
      icon: "fab fa-html5",
      percentage: 98,
      line: "line html",
    },
    {
      title: "CSS",
      icon: "fab fa-css3-alt",
      percentage: 98,
      line: "line css",
    },
    {
      title: "Javascript",
      icon: "fab fa-js-square",
      percentage: 98,
      line: "line javascript",
    },
    {
      title: "jQuery",
      icon: "fas fa-code",
      percentage: 98,
      line: "line jquery",
    },
    {
      title: "PHP",
      icon: "fab fa-php",
      percentage: 98,
      line: "line php",
    },
    {
      title: "MySQL",
      icon: "fas fa-database",
      percentage: 98,
      line: "line mysql",
    },
    {
      title: "ReactJS",
      icon: "fab fa-react",
      percentage: 98,
      line: "line reactjs",
    },
  ],
  [
    {
      title: "Java",
      icon: "fab fa-java",
      percentage: 98,
      line: "line java",
    },
    {
      title: "Python",
      icon: "fab fa-python",
      percentage: 98,
      line: "line python",
    },
    {
      title: "Android",
      icon: "fab fa-android",
      percentage: 98,
      line: "line android",
    },
    {
      title: "NodeJS",
      icon: "fab fa-node-js",
      percentage: 98,
      line: "line NodeJS",
    },
    {
      title: "Git &amp; GitHub | VCS",
      icon: "fas fa-code-branch",
      percentage: 98,
      line: "line vcs",
    },
    {
      title: "Wordpress | CMS",
      icon: "fab fa-wordpress-simple",
      percentage: 98,
      line: "line cms",
    },
    {
      title: "Firebase",
      icon: "fas fa-server",
      percentage: 98,
      line: "line Firebase",
    }
  ],
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code" /> Skills &amp; <span>Abilities</span>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col">
            {SKILLS[0].map((skill) => {
              return (
                <SkillBar
                  percentage={skill.percentage}
                  title={skill.title}
                  icon={skill.icon}
                  line={skill.line}
                />
              );
            })}
          </div>
          <div className="col">
            {SKILLS[1].map((skill) => {
              return (
                <SkillBar
                  percentage={skill.percentage}
                  title={skill.title}
                  icon={skill.icon}
                  line={skill.line}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

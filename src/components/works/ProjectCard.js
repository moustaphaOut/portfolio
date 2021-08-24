import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="box tilt">
      <img
        draggable="false"
        src={`./assests/images/projects/${props.cover}`}
        alt={props.title}
      />
      <div className="content">
        <div className="tag">
          <h3>{props.title}</h3>
        </div>
        <div className="desc">
          <p>{props.description}</p>
          <div className="btns">
            <a href={`${props.view}`} className="btn" target="_blank">
              <i className="fas fa-eye" /> View
            </a>
            <a
              href={`https://github.com/MoustaphaOut/${props.githubLink}`}
              className="btn"
              target="_blank"
            >
              {props.isPrivate ? (
                <i className="fas fa-lock" />
              ) : (
                <i className="fas fa-code" />
              )}
              {' '} Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
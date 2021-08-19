import React from "react";

const ExperienceCard = (props) => {
  return (
    <div className={`container ${props.isLeft?'left':'right'}`}>
      <div className="content">
        <div className="tag">
          <h2>{props.company}</h2>
        </div>
        <div className="desc">
          <h3>{props.title}</h3>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

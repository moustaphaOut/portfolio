import React from "react";

const SkillBar = (propos) => {
  return (
    <div className="bar">
      <div className="info">
        <i className={propos.icon}>
          <span>{propos.title}</span>
        </i>
        <span>{propos.percentage}%</span>
      </div>
      <div className={propos.line} />
    </div>
  );
};

export default SkillBar;

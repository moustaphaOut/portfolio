import React from "react";

const AtomicElement = (propos) => {
  return (
    <div
      className={`element ${propos.category} c${propos.column} r${propos.row}`}
    >
      <input className="activate" type="radio" name="elements" />
      <input className="deactivate" type="radio" name="elements" />
      <div className="overlay" />
      <div className="square">
        <div className="model">
          {propos.atomicWeight.map((electron) => {
            return (
              <div className="orbital">
                {Array.from({ length: electron }).map(() => {
                  return <div className="electron" />;
                })}
              </div>
            );
          })}
        </div>

        <div className="atomic-number">{propos.atomicNumber}</div>
        <div className="label">
          <div className="symbol">{propos.symbol}</div>
          <div className="name">{propos.name}</div>
        </div>
        <div className="atomic-mass">{propos.atomicMass}</div>
        <ul className="atomic-weight">
          {propos.atomicWeight.map((atomicWeight) => {
            return <li>{atomicWeight}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default AtomicElement;

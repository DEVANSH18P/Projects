import React from "react";

const Priority = ({ priority, setTrue, pcounts }) => {
  return (
    <div className="maincontainer" onClick={setTrue}>
      {priority.map((priorities, index) => {
        return (
          <div className="heading" key={index}>
            <div>
              {" "}
              <img src="signal-status.png" alt="icones" className="icons" />
              {priorities} &nbsp; {pcounts[index]}
            </div>
            <div className="icons">
              <img src="plus-sign.png" alt="plus-icon" />
              <img src="tripledot.png" alt="tripledot-icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Priority;

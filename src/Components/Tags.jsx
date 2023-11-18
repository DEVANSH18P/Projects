import React from "react";

const Tags = ({ status, number, setTrue }) => {
  return (
    <div className="maincontainer" onClick={setTrue}>
      {status.map((status, index) => {
        return (
          <div className="heading" key={index}>
            <div>
              <img
                src={`status-${index}.png`}
                alt="icones"
                className="filtericon"
              />
              {status} &nbsp; {number[index]}
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

export default Tags;

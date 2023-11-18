import React from "react";

const Users = ({ userarr, setTrue, usercounts }) => {
  return (
    <div className="maincontainer" onClick={setTrue}>
      {userarr.map((name, index) => {
        return (
          <div className="heading" key={index}>
            <div>
              <img
                src={`man-${index}.png`}
                alt="icones"
                className="filtericon"
              />
              {name} &nbsp; {usercounts[index]}
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

export default Users;

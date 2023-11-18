import { React} from "react";
import ".././App.css";
const Todo = ({ ticket, groupby }) => {
  return (
    <div>
      {ticket.map((tickets, index) => {
        if (tickets.status === "Todo" && groupby === "status") {
          return (
            <div className="cardcontainer" key={index}>
              <div className="useridandimg">
                <h4 className="userid">{tickets.id}</h4>
                <img src="/man-0.png" alt="userphoto" />
              </div>
              <div className="ticketTitle">{tickets.title}</div>
              <div className="tagcontainer">
                <span className="tripledot">---</span>

                <span className="tag">
                  <span className="dot">o</span>
                  <span className="ticktag">{tickets.tag}</span>
                </span>
              </div>
            </div>
          );
        }
        if (tickets.userId === "usr-2" && groupby === "user") {
          return (
            <div className="cardcontainer" key={index}>
              <div className="useridandimg">
                <h4 className="userid">{tickets.id}</h4>
                <img src="/man-0.png" alt="userphoto" />
              </div>
              <div className="ticketTitle">{tickets.title}</div>
              <div className="tagcontainer">
                <span className="tripledot">---</span>

                <span className="tag">
                  <span className="dot">o</span>
                  <span className="ticktag">{tickets.tag}</span>
                </span>
              </div>
            </div>
          );
        }
        if (tickets.priority === 4 && groupby === "priority") {
          return (
            <div className="cardcontainer" key={index}>
              <div className="useridandimg">
                <h4 className="userid">{tickets.id}</h4>
                <img src="/man-0.png" alt="userphoto" />
              </div>
              <div className="ticketTitle">{tickets.title}</div>
              <div className="tagcontainer">
                <span className="tripledot">---</span>

                <span className="tag">
                  <span className="dot">o</span>
                  <span className="ticktag">{tickets.tag}</span>
                </span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Todo;

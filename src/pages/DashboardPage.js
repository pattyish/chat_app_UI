import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [chatrooms, setChatrooms] = React.useState([]);
  const getChatrooms = () => {
    axios
      .get("http://localhost:8000/chatroom", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("CC_Token")}`,
        },
      })
      .then((response) => setChatrooms(response.data))
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    getChatrooms();
  }, []);
  return (
    <div className="card">
      <div className="cardHeader">Chatrooms</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="chatroomName">Chat room Name</label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            placeholder="Chatter Box Nepal"
          />
        </div>
        <button>Create Chatroom</button>
        <div className="chatrooms">
        {chatrooms.map((chatroom) => (
            <div key = {chatroom._id} className="chatroom">
              <div>{chatroom.name}</div>
              <Link to={`/chatroom/${chatroom._id}`}><div className="join">Join</div></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

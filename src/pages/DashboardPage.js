import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = (props) => {
  const [chatrooms, setChatrooms] = React.useState([]);
  const getChatrooms = () => {
    axios
      .get("http://localhost:8000/chatroom", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("CC_Token")}`,
        },
      })
      .then((response) => {
          console.log(response.data.chatrooms)
        setChatrooms(response.data.chatrooms);
      })
      .catch((err) => {
        console.log(`Bearer ${localStorage.getItem("CC_Token")}`);
        setTimeout(getChatrooms, 3000);
      });
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
      </div>
      <button>Create Chatroom</button>
      <div className="chatrooms">
        {chatrooms.map((chatroom) => (
          <div key={chatroom._id} className="chatroom">
            <div>{chatroom.name}</div>
            <Link to={`/chatroom/${chatroom._id}`}>
              <div className="join">Join</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;

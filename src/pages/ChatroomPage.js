import React from "react";
import { withRouter } from "react-router-dom";

const ChatroomPage = ({ match, socket }) => {
  const chatroomId = match.params.id;
  return (
    <div className="chatroomPage">
      <div className="chatroomSection"> 
        <div className="cardHeader">Chatroom Name</div>
        <div className="chatroomContent">
          <div className="message">
            <span className="otherMessage">Kit:</span> Hello Guys
          </div>
          <div className="message">
            <span className="onMessage">Ankit:</span> Hi Kit
          </div>
        </div>
        <div className="chatroomActions">
          <div>
            <input
              type="text"
              name="message"
              placeholder="Say something!"
            ></input>
          </div>
          <button className="join">Send</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ChatroomPage);

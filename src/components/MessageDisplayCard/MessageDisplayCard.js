import React from "react";
import ProptTypes from "prop-types";
import { List, Card } from "semantic-ui-react";
import { LikesButtonContainer } from "../Likes";
export const MessageDisplayCard = (messageList, isAuthenticated) => {
  console.log(messageList);
  return (
    <Card
      className="ui cards"
      style={{
        border: "2px solid black",
        paddingleft: "10px",
        height: "275px",
        width: "400px",
        backgroundColor: "lavender",
        borderRadius: "10%",
      }}
    >
      <div id="message-card">
        <List className="content">
          <img
            class="right floated tiny ui image"
            src={
              `https://kwitter-api.herokuapp.com/users/${messageList.content.username}/picture` ||
              null
            }
            alt=""
          />
          <h3 className="header">
            {JSON.stringify(messageList.content.username)}-
          </h3>
          <p>{messageList.content.text}</p>
          <div className="meta">{messageList.content.timestamp}</div>
          <LikesButtonContainer
            array={messageList.content.likes}
            id={messageList.content.id}
            name={messageList.content.username}
          />
        </List>
      </div>
    </Card>
  );
};

MessageDisplayCard.propTypes = {
  content: ProptTypes.object,
  messsageList: ProptTypes.array,
  isAuthenticated: ProptTypes.bool.isRequired,
};

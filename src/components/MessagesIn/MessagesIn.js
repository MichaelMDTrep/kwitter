import React from "react";
import ProptTypes from "prop-types";
import "./MessagesIn.css";
import { Button } from "semantic-ui-react";
import { MessageDisplayCardContainer } from "../MessageDisplayCard";
import { MessagesOutContainer } from "../MessagesOut";

export const MessagesIn = ({ messagesIn, content, messageList = "" }) => {
  return (
    <>
      <div id="menu">
        <div>
          <MessagesOutContainer />
          <Button color="black" size="massive" onClick={() => messagesIn()}>
            Refresh Message Feed
          </Button>
          <hr />
          <div id="content">
            {messageList}
            {content.map((content, index) => {
              return (
                <>
                  <MessageDisplayCardContainer
                    key={index}
                    index={index}
                    content={content}
                  ></MessageDisplayCardContainer>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

MessagesIn.defaultProps = {};

MessagesIn.propTypes = {
  isAuthenticated: ProptTypes.bool.isRequired,
  messagesIn: ProptTypes.func.isRequired,
  messsageList: ProptTypes.array.isRequired,
};

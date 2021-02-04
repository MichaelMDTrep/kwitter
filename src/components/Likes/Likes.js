// TODO: implement
import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

class LikesButton extends Component {
  render() {
    return (
      <>
        <div>
          <ul>
            {this.props.array &&
              this.props.array.map((array, index) => {
                return (
                  <li key={index} content={array.username}>
                    {array.username}
                    <br />
                    {this.props.name === array.username}

                    {this.props.username === array.username && (
                      <Button
                        color="red"
                        size="tiny"
                        onClick={async () => {
                          await this.props.removeLike(array.id);
                          this.props.messagesIn();
                        }}
                      >
                        Remove Like!
                      </Button>
                    )}
                  </li>
                );
              })}
            <Button
              inverted
              color="blue"
              // animated="vertical"
              onClick={async () => {
                await this.props.sendlike(this.props.id);
                this.props.messagesIn();
              }}
            >
              <Button.Content hidden>Like!</Button.Content>
              <Button.Content visible>
                <Icon name="heart" />
              </Button.Content>
            </Button>
          </ul>
        </div>

        {/* <Button onClick={this.props.sendlike(this.props.id)}>
          like
          {/* // onClick={() => console.log(this.props.id)}> Like */}
        {/* </Button> */}
      </>
    );
  }
}

export default LikesButton;

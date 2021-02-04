import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import { Button, Label, Input, Form } from "semantic-ui-react";

export const MessagesOut = ({ messagesOut, loading, error, messagesIn }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    inputField: "?",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    messagesOut(state.inputField);
    messagesIn();
  };
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setState((prevState) => ({ inputField: inputValue }));
  };

  return (
    <React.Fragment>
      <Form id="messages-out" onSubmit={handleSubmit}>
        <Label color="blue" size="massive" htmlFor="Messages">
          Messages
        </Label>
        <Input
          size="massive"
          icon="comment"
          placeholder="Enter Message Here"
          type="text"
          name="username"
          value={state.text}
          autoFocus
          required
          onChange={handleChange}
        />
        <Button color="blue" size="massive" type="submit" disabled={loading}>
          Send
        </Button>
      </Form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

MessagesOut.propTypes = {
  loading: ProptTypes.bool,
  error: ProptTypes.string,
  messagesOut: ProptTypes.func.isRequired,
  messagesIn: ProptTypes.func.isRequired,
};

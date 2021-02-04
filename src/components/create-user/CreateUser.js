import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
// import { newUser } from "../../redux/actions";

// console.log("newuser is : " + newUser.toString());
export const CreateUser = ({ newUser, loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleNewUser = (event) => {
    event.preventDefault();
    console.log("state: " + JSON.stringify(state));
    console.log(event);
    newUser(state);
  };

  const handleChange = (event) => {
    // console.log("event: " + JSON.stringify(foo));
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form id="login-form" onSubmit={handleNewUser}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="displayName">displayName</label>
        <input
          type="text"
          name="displayName"
          value={state.displayName}
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          create user
        </button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

CreateUser.propTypes = {
  newUser: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};

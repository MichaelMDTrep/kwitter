import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import "./UpdateProfile.css";
// import { updateProfile } from "../../redux/actions";
import { Button, Label, Input, Form } from "semantic-ui-react";
// console.log("updateProfile is : " + updateProfile.toString());
export const UpdateProfile = ({
  updateProfile,
  deleteProfile,
  uploadPhoto,
  loading,
  error,
  username,
}) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    // username: "",
    password: "",
    about: "",
    displayName: "",
    picture: null,
  });

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    updateProfile(state);
  };
  const handleUploadPhoto = (event) => {
    console.log(event, state.picture);
    event.preventDefault();
    let formData = new FormData();
    formData.append("picture", state.picture);
    uploadPhoto(formData);
  };
  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };
  const handleChangePicture = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.files[0];
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };
  return (
    <React.Fragment>
      <Form id="login-form" onSubmit={handleUpdateProfile}>
        <Label size="huge" color="blue" htmlFor="about">
          Whats your story?
        </Label>
        <Input
          isRequired
          type="text"
          name="about"
          placeholder="tell us your story"
          icon="address card"
          value={state.about}
          autoFocus
          onChange={handleChange}
        />
        <Label size="huge" color="blue">
          Change your name?
        </Label>
        <Input
          type="text"
          name="displayName"
          value={state.displayName}
          onChange={handleChange}
          placeholder="Change Your displayName"
        />
        <Label size="huge" color="blue" htmlFor="password">
          password is required to update your account.
        </Label>
        <Input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Change Your Password"
        />
        <Button color="purple" type="submit" disabled={loading}>
          Update Profile
        </Button>
      </Form>
      <Form id="login-form" onSubmit={handleUploadPhoto}>
        <Label size="huge" color="blue" htmlFor="picture">
          {"tired of your old look?"}
          <br />
          {"fancify your profile with a <200 kb picture"}
        </Label>
        <Input
          icon="paperclip"
          type="file"
          accept="image/png, image/jpeg"
          name="picture"
          onChange={handleChangePicture}
        />
        <Button color="purple" type="submit">
          upload
        </Button>
        {/* //Button, send file img only?. */}
      </Form>
      <hr />
      <p>
        This will permanemtly and immediatly delete your account.
        <br />
        Also it'll totally bum out your all your buddies, who just want to chat
        and hang out and stuff.
        <br />
      </p>
      <Button
        color="black"
        size="massive"
        style={{ fontsize: "biggest", color: "red" }}
        onClick={() => {
          deleteProfile({ username });
        }}
      >
        DELETE YOUR ACCOUNT
      </Button>

      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

UpdateProfile.propTypes = {
  deleteProfile: ProptTypes.func.isRequired,
  updateProfile: ProptTypes.func.isRequired,
  uploadPhoto: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
  username: ProptTypes.string,
};

import React from "react";
import { MenuContainer } from "../components";
import { DisplayCardContainer } from "../components/profile-card";
import { UpdateProfileContainer } from "../components/UpdateProfile";
export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2>
    <DisplayCardContainer />
    <h2>Want to update your account?</h2>
    <UpdateProfileContainer />

    {/* <ProfilePic /> */}
  </>
);

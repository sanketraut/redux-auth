import React from "react";
import Menubar from "./Menubar";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { loggedUser } from "./store/user";

const Profile = () => {
  const user = useSelector(loggedUser);
  return (
    <React.Fragment>
      <Menubar />
      <Container>
        {user !== null ? "Hello @" + user.username : "Unauthorized"}
      </Container>
    </React.Fragment>
  );
};
export default Profile;

import React from "react";
import Menubar from "./Menubar";
import { Container } from "react-bootstrap";

const Profile = () => (
    <React.Fragment>
        <Menubar />
        <Container>Hello User</Container>
    </React.Fragment>
);
export default Profile;
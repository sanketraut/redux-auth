import React from "react";
import { Container } from "react-bootstrap";
import Menubar from "./Menubar";

const Home = () => (
    <React.Fragment>
        <Menubar />
        <Container>Welcome Home</Container>
    </React.Fragment>
);
export default Home;
import React from "react";
import Menubar from "./Menubar";
import { Container } from "react-bootstrap";

const Home = () => (
    <React.Fragment>
        <Menubar />
        <Container>Welcome Home</Container>
    </React.Fragment>
);
export default Home;
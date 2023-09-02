import React from "react";
import { Container } from "react-bootstrap";
import Menubar from "./Menubar";

const App = () => {
  return (
    <React.Fragment>
      <Menubar />
      <Container>Welcome to redux-auth demo</Container>
    </React.Fragment>
  );
};

export default App;

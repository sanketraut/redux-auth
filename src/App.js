import React from "react";
import Menubar from "./Menubar";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <React.Fragment>
      <Menubar />
      <Container>Welcome to redux-auth demo</Container>
    </React.Fragment>
  );
};

export default App;

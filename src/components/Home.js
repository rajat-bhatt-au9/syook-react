import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Jumbotron style={{ height: "600px" }}>
        <h1>Hi, User</h1>
        <p>This is a Logstic management system , click on below button.</p>
        <p>
          <Link to='/warehouse' class='btn btn-success m-5'>
            Warehouse Admin
          </Link>
        </p>
      </Jumbotron>
    </>
  );
};

export default Home;

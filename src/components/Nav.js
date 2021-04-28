import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Navbar bg='dark'>
        <Navbar.Brand>
          <Link to='/'>Brand link</Link>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Nav;

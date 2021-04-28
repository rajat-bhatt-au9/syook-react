import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to='/customer' class='btn btn-success m-5'>
        Customer
      </Link>
      <Link to='/warehouse' class='btn btn-success m-5'>
        Warehouse Admin
      </Link>
    </>
  );
};

export default Home;

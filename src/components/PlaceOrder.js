import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:8900/items");
      console.log(req.data);
      setItems(req.data);
      return req;
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>List of items</h1>
      <Table striped bordered hover size='sm' className='col-6 m-auto mt-5'>
        <thead>
          <tr>
            <th>#id</th>
            <th>Item Name</th>
            <th>Item Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <Link to={`/order/${item._id}`} className='btn btn-primary m-3'>
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default PlaceOrder;

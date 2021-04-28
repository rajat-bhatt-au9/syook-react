import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:8900/customers");
      console.log(req.data);
      setCustomers(req.data);
      return req;
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>List of Customers</h1>
      <Table striped bordered hover size='sm' className='col-6 m-auto mt-5'>
        <thead>
          <tr>
            <th>#id</th>
            <th>Customer Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomerList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:8900/vehicles");
      console.log(req.data);
      setVehicles(req.data);
      return req;
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>List of Vehicles</h1>
      <Table striped bordered hover size='sm' className='col-6 m-auto mt-5'>
        <thead>
          <tr>
            <th>#id</th>
            <th>Vehicle Registration Number</th>
            <th>Vehicle Type</th>
            <th>Vehicle City</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr>
              <td>{vehicle.id}</td>
              <td>{vehicle.regNum}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default VehiclesList;

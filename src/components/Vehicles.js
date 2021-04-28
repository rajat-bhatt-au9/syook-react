import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { uuid } from "uuidv4";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const [formData, setFormData] = useState({
    id: "",
    regNum: "",
    type: "Truck",
    city: "",
  });
  const { regNum, type, city } = formData;

  console.log(uuid());
  const onChange = (e) =>
    setFormData({
      ...formData,
      id: uuid(),
      [e.target.name]: e.target.value,
    });

  const handleReset = () => {
    setFormData({
      id: "",
      regNum: "",
      type: "",
      city: "",
    });
    alert("Vehicle Added Successfully");
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(formData);
    const res = await axios.post(
      "http://localhost:8900/vehicles",
      body,
      config
    );

    console.log(res);
    if (res.status === 200) {
      alert(res.data);
    }
    handleReset();
  };

  return (
    <div>
      <h1>Add Vehicle</h1>
      <Form className='col-6 m-auto' onSubmit={(e) => onSubmit(e)}>
        <Form.Group as={Row}>
          <Form.Label column sm='2'>
            <b>Registration Number:</b>
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              type='text'
              name='regNum'
              value={regNum}
              onChange={(e) => onChange(e)}
              required
              pattern='[a-zA-Z0-9]+'
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm='2'>
            <b>Vehicle Type: </b>
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              as='select'
              name='type'
              value={type}
              onChange={(e) => onChange(e)}
            >
              <option>Truck</option>
              <option>Two-wheeler</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm='2'>
            <b>City:</b>
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              type='text'
              name='city'
              value={city}
              onChange={(e) => onChange(e)}
              required
            />
          </Col>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      <Link to='/vehicle-list' class='btn btn-success m-5'>
        Vehicles List
      </Link>
    </div>
  );
};

export default Vehicles;

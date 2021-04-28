import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { uuid } from "uuidv4";
import { Link } from "react-router-dom";

const CustomerPage = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    city: "",
  });
  const { name, city } = formData;

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
      name: "",
      city: "",
    });
    alert("Customer Added Successfully");
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
      "http://localhost:8900/customers",
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
    <>
      <h1>Add Customer</h1>
      <Form className='col-6 m-auto' onSubmit={(e) => onSubmit(e)}>
        <Form.Group as={Row}>
          <Form.Label column sm='2'>
            <b>Customer Name:</b>
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              type='text'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
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
      <Link to='/customer-list' class='btn btn-success m-5'>
        Item List
      </Link>
    </>
  );
};

export default CustomerPage;

import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { uuid } from "uuidv4";
import { Link } from "react-router-dom";

const Items = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
  });
  const { name, price } = formData;

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
      price: "",
    });
    alert("Items Added Successfully");
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(formData);
    const res = await axios.post("http://localhost:8900/items", body, config);

    console.log(res);
    if (res.status === 200) {
      alert(res.data);
    }
    handleReset();
  };
  return (
    <>
      <h1>Add items</h1>
      <Form className='col-6 m-auto' onSubmit={(e) => onSubmit(e)}>
        <Form.Group as={Row}>
          <Form.Label column sm='2'>
            <b>Item Name:</b>
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
            <b>Item Price:</b>
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              type='text'
              name='price'
              value={price}
              onChange={(e) => onChange(e)}
              required
            />
          </Col>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      <Link to='/item-list' class='btn btn-success m-5'>
        Item List
      </Link>
    </>
  );
};

export default Items;

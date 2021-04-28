import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Warehouse = () => {
  return (
    <div>
      <h1>Warehouse page</h1>
      <CardDeck className='m-auto'>
        <Card
          border='success'
          className='m-3'
          style={{ backgroundColor: "rgb(230, 255, 179)" }}
        >
          <Card.Header>
            <strong>Add Items</strong>
          </Card.Header>
          <Card.Body>
            <Card.Title> </Card.Title>
            <Card.Text>
              Click below to go Items page where you can see items and add new
              items.
            </Card.Text>
            <Link to='/items' class='btn btn-primary'>
              go to Items
            </Link>
          </Card.Body>
        </Card>
        <Card
          border='success'
          className='m-3'
          style={{ backgroundColor: "rgb(230, 255, 179)" }}
        >
          <Card.Header>
            <strong>Add Vehicles </strong>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Click below to go Items page where you can see Vehicles and add
              new Vehicles.
            </Card.Text>
            <Link to='/vehicles' class='btn btn-primary'>
              go to Vehicles
            </Link>
          </Card.Body>
        </Card>
        <Card
          border='success'
          className='m-3'
          style={{ backgroundColor: "rgb(230, 255, 179)" }}
        >
          <Card.Header>
            <strong>Add Customers</strong>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Click below to go Customers page where you can see Vehicles and
              add new Customers.
            </Card.Text>
            <Link to='/customers' class='btn btn-primary'>
              go to Customers
            </Link>
          </Card.Body>
        </Card>
        <Card
          border='success'
          className='m-3'
          style={{ backgroundColor: "rgb(230, 255, 179)" }}
        >
          <Card.Header>
            <strong>Add Orders</strong>
          </Card.Header>
          <Card.Body>
            <Card.Title> </Card.Title>
            <Card.Text>
              Click below to go Orders page where you can see Vehicles and add
              new Orders.
            </Card.Text>
            <Link to='/orders' class='btn btn-primary'>
              go to Orders
            </Link>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Warehouse;

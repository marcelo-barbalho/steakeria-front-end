import React from "react";
import { FaAddressBook } from "react-icons/fa";

import { Card, Button } from "react-bootstrap";
const Dash = () => {
  return (
    <>
      <h1>
        rota dash funcionando
        <FaAddressBook />
      </h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>teste teste teste</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export { Dash };

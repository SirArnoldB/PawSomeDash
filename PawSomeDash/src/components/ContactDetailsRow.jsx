import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const ContactDetailsRow = ({ pet }) => {
  return (
    <Row
      style={{
        marginTop: "2rem",
      }}
    >
      <Col>
        <Card.Subtitle>Contact</Card.Subtitle>
        <ListGroup title="Contact" variant="flush">
          <ListGroup.Item>
            <Badge bg="secondary">
              {pet.contact.email ? `Email: ${pet.contact.email}` : "No Email"}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            <Badge bg="secondary">
              {pet.contact.phone ? `Phone: ${pet.contact.phone}` : "No Phone"}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            <Badge bg="secondary">
              {pet.contact.address.address1
                ? `Address: ${pet.contact.address.address1},`
                : ""}
              {pet.contact.address.city ? ` ${pet.contact.address.city}` : ""}
              {pet.contact.address.state
                ? `, ${pet.contact.address.state}`
                : ""}
              {pet.contact.address.postcode
                ? `, ${pet.contact.address.postcode}`
                : ""}
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ContactDetailsRow;

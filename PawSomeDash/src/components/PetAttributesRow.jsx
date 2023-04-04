import React from "react";
import { Card, Row, Col, Button, Image } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const PetAttributesRow = ({ pet }) => {
  return (
    <Row>
      <Col>
        <Card.Subtitle>Attributes</Card.Subtitle>
        <ListGroup title="Attributes" variant="flush">
          <ListGroup.Item>
            Spayed/Neutered: {pet.attributes.spayed_neutered ? "Yes" : "No"}
          </ListGroup.Item>
          <ListGroup.Item>
            House Trained: {pet.attributes.house_trained ? "Yes" : "No"}
          </ListGroup.Item>
          <ListGroup.Item>
            Declawed: {pet.attributes.declawed ? "Yes" : "No"}
          </ListGroup.Item>
          <ListGroup.Item>
            Special Needs: {pet.attributes.special_needs ? "Yes" : "No"}
          </ListGroup.Item>
          <ListGroup.Item>
            Shots Current: {pet.attributes.shots_current ? "Yes" : "No"}
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col>
        <Card.Subtitle>Environment</Card.Subtitle>
        <ListGroup title="Environment" variant="flush">
          <ListGroup.Item>
            Children: {pet.environment.children ? "Yes" : "No"}
          </ListGroup.Item>
          <ListGroup.Item>
            Dogs: {pet.environment.dogs ? "Yes" : "No"}
          </ListGroup.Item>
          <ListGroup.Item>
            Cats: {pet.environment.cats ? "Yes" : "No"}
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col>
        <Card.Subtitle>Breeds</Card.Subtitle>
        <ListGroup title="Breeds" variant="flush">
          <ListGroup.Item>Primary: {pet.breeds.primary}</ListGroup.Item>
          <ListGroup.Item>Secondary: {pet.breeds.secondary}</ListGroup.Item>
          <ListGroup.Item>
            Mixed: {pet.breeds.mixed ? "Yes" : "No"}
          </ListGroup.Item>
          <ListGroup.Item>
            Unknown: {pet.breeds.unknown ? "Yes" : "No"}
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col>
        <Card.Subtitle>Colors</Card.Subtitle>
        <ListGroup title="Colors" variant="flush">
          <ListGroup.Item>Primary: {pet.colors.primary}</ListGroup.Item>
          <ListGroup.Item>Secondary: {pet.colors.secondary}</ListGroup.Item>
          <ListGroup.Item>Tertiary: {pet.colors.tertiary}</ListGroup.Item>
        </ListGroup>
      </Col>

      <Col>
        <Card.Subtitle>Tags</Card.Subtitle>
        <Card.Text>
          {pet.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" style={{ margin: "0.5rem" }}>
              {tag.name}
            </Badge>
          ))}
        </Card.Text>
      </Col>
    </Row>
  );
};

export default PetAttributesRow;

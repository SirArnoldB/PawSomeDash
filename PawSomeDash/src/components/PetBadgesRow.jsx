import React from "react";
import Badge from "react-bootstrap/Badge";
import { Row, Col } from "react-bootstrap";

const PetBadgesRow = ({ pet }) => {
  return (
    <Row>
      <Col>
        <Badge pill bg="primary">
          {pet.age ? `Age: ${pet.age}` : "Age: Unknown"}
        </Badge>
      </Col>
      <Col>
        <Badge pill bg="primary">
          {pet.type ? `Type: ${pet.type}` : "Type: Unknown"}
        </Badge>
      </Col>
      <Col>
        <Badge pill bg="primary">
          {pet.size ? `Size: ${pet.size}` : "Size: Unknown"}
        </Badge>
      </Col>
      <Col>
        <Badge pill bg="primary">
          {pet.gender ? `Gender: ${pet.gender}` : `Gender: Unknown}`}
        </Badge>
      </Col>
    </Row>
  );
};

export default PetBadgesRow;

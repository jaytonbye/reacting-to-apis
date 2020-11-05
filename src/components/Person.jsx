import React from "react";
import Card from "react-bootstrap/Card";

function Person(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            <strong>Age: </strong> {props.age}
            <br/>
            <br/>
            <strong>Gender: </strong>
            {props.gender}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Person;

import React from "react";
import Card from "react-bootstrap/Card";

function Movie(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title} - {props.release_date}</Card.Title>
        <Card.Text>
            <strong>Directed by: </strong> {props.director}
            <br/>
            <br/>
            <strong>Description: </strong>
            {props.description}
            <br/>
            <br/>
            <strong>Rotten Tomato Score: </strong> {props.rt_score}

        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Movie;

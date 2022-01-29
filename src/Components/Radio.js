import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

const Radio = (props) => {
  const [selectChannel, setSelectChannel] = useState("");

  const handleClick = (e) => {
    const selectChannel = e.target.innerHTML;
    console.log(selectChannel);
    setSelectChannel(selectChannel);
  };

  return (
    <div className="d-flex ">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Stations</Card.Title>
          <ListGroup variant="flush">
            {props.channels.map((channel) => (
              <ListGroup.Item key={channel.id} onClick={handleClick}>
                {channel.name} {channel.frequency}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>
              <p>CURRENTLY PLAYNING</p>
              {selectChannel}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Radio;

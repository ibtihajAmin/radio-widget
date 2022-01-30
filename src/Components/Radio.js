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
    <div className="d-flex justify-content-center align-items-center mt-5 ">
      <Card style={{ width: "18rem", height: "26rem", marginRight: "10px" }}>
        <Card.Body>
          <Card.Title>Stations</Card.Title>
          <ListGroup variant="flush">
            {props.channels.map((channel) => (
              <ListGroup.Item
                key={channel.id}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                {channel.name} {channel.frequency}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", height: "26rem", marginLeft: "10px" }}>
        <Card.Body>
          <Card.Title>Stations</Card.Title>
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

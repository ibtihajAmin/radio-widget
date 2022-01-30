import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import bannerImg from "../images/banner.jpg";
import plus from "../images/plus.png";
import minus from "../images/minus.png";
import backArrow from "../images/back-arrow.png";
import switchArrow from "../images/switch.png";

const Radio = (props) => {
  const cardTitleStyle = {
    backgroundColor: "#EEAE61",
    color: "#fff",
    borderRadius: "15px 15px 0px 0px",
    height: "50px",
  };

  const cardBodyStyle = {
    backgroundColor: "#20202b",
    color: "#a9a9a9",
    cursor: "pointer",
  };

  const [selectChannel, setSelectChannel] = useState("");

  const handleClick = (e) => {
    const selectChannel = e.target.innerHTML;
    console.log(selectChannel);
    setSelectChannel(selectChannel);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 ">
      <Card
        style={{
          width: "18rem",
          height: "26rem",
          marginRight: "10px",
          border: "none",
        }}
      >
        <Card.Body>
          <Card.Title style={cardTitleStyle}>
            <Card.Img
              src={backArrow}
              style={{ height: "20px", width: "20px", marginRight: "40px" }}
            />
            Stations
            <Card.Img
              src={switchArrow}
              style={{ height: "20px", width: "20px", marginLeft: "40px" }}
            />
          </Card.Title>
          <ListGroup variant="flush">
            {props.channels.map((channel) => (
              <ListGroup.Item
                key={channel.id}
                onClick={handleClick}
                style={cardBodyStyle}
              >
                {channel.name} {channel.frequency}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "18rem",
          height: "26rem",
          marginLeft: "10px",
          border: "none",
        }}
      >
        <Card.Body>
          <Card.Title style={cardTitleStyle}>
            <Card.Img
              src={backArrow}
              style={{ height: "20px", width: "20px", marginRight: "40px" }}
            />
            Stations
            <Card.Img
              src={switchArrow}
              style={{ height: "20px", width: "20px", marginLeft: "40px" }}
            />
          </Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item style={cardBodyStyle}>Putin FM 90.5</ListGroup.Item>
            <ListGroup.Item style={cardBodyStyle}>
              <Card.Img
                src={plus}
                style={{ height: "20px", width: "20px", marginRight: "20px" }}
              />
              <Card.Img
                src={bannerImg}
                style={{ borderRadius: "50%", height: "100px", width: "100px" }}
              />

              <Card.Img
                src={minus}
                style={{ height: "20px", width: "20px", marginLeft: "20px" }}
              />
            </ListGroup.Item>
            <ListGroup.Item style={cardBodyStyle}>
              Dribble FM 101.2
            </ListGroup.Item>
            <ListGroup.Item style={cardBodyStyle}>Doge FM 99.4</ListGroup.Item>
            <ListGroup.Item style={cardBodyStyle}>
              <p style={{ fontSize: "10px", color: "#EEAE61" }}>
                CURRENTLY PLAYNING
              </p>
              {selectChannel}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Radio;

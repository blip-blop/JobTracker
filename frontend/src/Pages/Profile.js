import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import image from "../images/JobTracker-logos.jpeg";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="profile">
      <Card style={{ width: "50rem" }}>
        <Card.Img
          style={{
            borderRadius: "50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "15px",
            width: "40%",
          }}
          variant="top"
          src={image}
        />
        <Card.Body>
          <Card.Title>
            {`${user.firstName} ${user.lastName}`.toUpperCase()}
          </Card.Title>
          <Card.Subtitle style={{ marginTop: "15px" }}>About me:</Card.Subtitle>
          <Card.Text></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Email: {user.email}</ListGroupItem>
          <ListGroupItem>Phone number: {user.phone}</ListGroupItem>
          <ListGroupItem>City: {user.selectedCity}</ListGroupItem>
          <ListGroupItem>Zip code: {user.zip}</ListGroupItem>
          <ListGroupItem>Account type: {user.role}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link>Edit Profile</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;

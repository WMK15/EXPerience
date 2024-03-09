import React from "react";
import {
  Container,
  Row,
  Col,
  ProgressBar,
  Card,
  Button,
  Nav,
} from "react-bootstrap";

import dogHappy from "../assets/images/dog_happy.jpg";

export default function Home() {
  // return a grid with one row and two columns, the first column should be 3/12 and the second column should be 9/12
  return (
    <>
      <Row>
        <Col
          xs={3}
          style={{
            backgroundColor: "beige",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Nav variant="tabs" defaultActiveKey="mon">
            <Nav.Item>
              <Nav.Link
                eventKey="mon"
                style={{ backgroundColor: "grey", color: "white" }}
              >
                Mon
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="tue"
                style={{ backgroundColor: "grey", color: "white" }}
              >
                Tue
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="wed"
                style={{ backgroundColor: "grey", color: "white" }}
              >
                Wed
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="thu"
                style={{ backgroundColor: "grey", color: "white" }}
              >
                Thu
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="fri"
                style={{ backgroundColor: "grey", color: "white" }}
              >
                Fri
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={9}>
          <h1>Progress</h1>
          <ProgressBar now={60} />
          <Card>
            <Card.Img variant="top" src={dogHappy} />
            <Card.Body>
              <Card.Title>Happy Dog</Card.Title>
              <Card.Text>
                This is a happy dog. He is happy because he has completed all
                his tasks and habits for today.
              </Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: "grey", color: "white" }}
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

import { useState, useEffect } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { useCookies } from "react-cookie";

import dogHappy from "../assets/images/dog_happy.jpg";
import dashboardImage from "../assets/images/dashboard.jpg";

import { getTasks } from "../api/tasks";
import { Tasks } from "../components/Tasks";
import { Progress } from "../components/Progress";
import { getProgress } from "../api/user";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progressValue, setProgressValue] = useState(20);

  const [cookies] = useCookies(["userId"]);
  const userId = cookies.userId;

  // useEffect(() => {
  //   try {
  //     getTasks(userId)
  //       .then((response) => response.data)
  //       .then((data) => setTasks(data.tasks));

  //     getProgress(userId)
  //       .then((response) => response.data)
  //       .then((data) => setProgressValue(data.progress));
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  // return a grid with one row and two columns, the first column should be 3/12 and the second column should be 9/12
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Row style={{ height: "100vh" }} s>
        <Col
          xs={3}
          style={{
            backgroundColor: "beige",
            justifyContent: "flex-start", // change from "center" to "flex-start"
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Nav
              variant="tabs"
              defaultActiveKey="mon"
              style={{ fontWeight: "bold" }}
            >
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
          </div>
          <Tasks tasks={tasks} />
        </Col>
        <Col xs={9}>
          <div>
            <Progress value={progressValue} />
          </div>
        </Col>
      </Row>
    </>
  );
}

import { useState, useEffect } from "react";
import { Row, Col, ProgressBar, Container, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

import dogIdle1 from "../assets/images/corgi/corgi_idle1.gif";
import dashboardImage from "../assets/images/dashboard.jpg";

// Components
import { getTasks } from "../api/tasks";
import { Tasks } from "../components/tasks/Tasks";
import { Habits } from "../components/habits/Habits";
import { PomodoroModal } from "../components/pomodoro/PomodoroModal";
// API
import { getProgress } from "../api/user";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progressValue, setProgressValue] = useState(100);

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
          <Habits />
          <Tasks tasks={tasks} />
          <PomodoroModal />
        </Col>
        <Col
          xs={9}
          style={{
            backgroundImage: `url(${dashboardImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Container>
            <ProgressBar
              now={progressValue}
              label={`${progressValue}%`}
              className="mt-5"
              style={{
                height: "25px",
              }}
              animated
            />
            <div
              style={{
                position: "relative",
                top: "45vh",
                paddingLeft: "30vw",
                paddingRight: "30vw",
              }}
              className="text-center"
            >
              <ProgressBar
                now={progressValue}
                label={`${progressValue} HP`}
                style={{ height: "25px", fontWeight: "bold" }}
                variant="success"
              />
              <img
                src={dogIdle1}
                alt="Dog"
                style={{
                  height: "15vh",
                }}
              />
            </div>
          </Container>
        </Col>
      </Row>
    </>
  );
}

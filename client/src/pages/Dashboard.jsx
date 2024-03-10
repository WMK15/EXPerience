import { useState, useEffect } from "react";
import {
  Row,
  Col,
  ProgressBar,
  Container,
  Alert,
  Button,
  Form,
} from "react-bootstrap";

import { useParams } from "react-router-dom";

import dashboardImage from "../assets/images/dashboard.jpg";

// Components
import { Tasks } from "../components/tasks/Tasks";
import { Habits } from "../components/habits/Habits";
import { PomodoroModal } from "../components/pomodoro/PomodoroModal";

// API
import { getAllHabits } from "../api/habits";
import { getDog, updateDog } from "../api/dog";
import { getUser, updateUser } from "../api/user";
import { getAllTasks } from "../api/tasks";

import dogIdle1 from "../assets/images/corgi/corgi_idle1.gif";

const priorityOrder = {
  High: 1,
  Medium: 2,
  Low: 3,
};

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [progressValue, setProgressValue] = useState(0);
  const [dog, setDog] = useState(null);
  const [alert, setAlert] = useState({ variant: "", message: "" });
  const [health, setHealth] = useState(85);

  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    getAllTasks(userId)
      .then((response) => {
        let dataTasks = response.data;
        dataTasks.sort(
          (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
        );
        setTasks(dataTasks);
      })
      .catch((error) => {
        console.error(error);
        setTasks([]);
      });
    getAllHabits(userId)
      .then((response) => {
        setHabits(response.data);
      })
      .catch((error) => {
        console.error(error);
        setHabits([]);
      });
    getUser(userId)
      .then((response) => {
        setUser(response.data);
        setProgressValue(response.data.xp);
      })
      .catch((error) => {
        console.error(error);
        setProgressValue(0);
      });
    getDog(userId)
      .then((response) => {
        setDog(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        setDog(null);
      });
  }, []);

  const handleDogSubmit = async (e) => {
    e.preventDefault();
    try {
      if (progressValue < 5) {
        return setAlert({
          variant: "danger",
          message: "You don't have enough points to feed the doggo!",
        });
      } else if (health >= 100) {
        return setAlert({
          variant: "danger",
          message: "Your doggo is already full!",
        });
      }

      // Update the state variables using functional updates
      setHealth((prevHealth) => prevHealth + 5);
      setProgressValue((prevProgressValue) => prevProgressValue - 5);

      // Update the dog object
      const updatedDog = { ...dog, health: health + 5 };

      // Update the user object
      const updatedUser = { ...user, xp: progressValue - 5 };

      // Update the dog and user in the database
      await updateDog(userId, updatedDog);
      await updateUser(userId, updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetAlert = (variant, message) => {
    setAlert({ variant, message });
  };

  // return a grid with one row and two columns, the first column should be 3/12 and the second column should be 9/12
  if (loading) {
    return (
      <div className="layout">
        <Container>
          <h1>Loading...</h1>
        </Container>
      </div>
    );
  }
  return (
    <div className="layout">
      {alert.message && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert({ variant: "", message: "" })}
          dismissible
        >
          {alert.message}
        </Alert>
      )}
      <Row style={{ height: "100vh" }} s>
        <Col
          xs={3}
          style={{
            backgroundColor: "black",
            justifyContent: "flex-start", // change from "center" to "flex-start"
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Habits userId={userId} habits={habits} />
          <Tasks userId={userId} tasks={tasks} />
          <PomodoroModal key={userId} habits={habits} userId={userId} />
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
          <Container className="mt-5">
            <h2
              style={{
                color: "white",
                backgroundColor: "rgb(113, 132, 196)",
                paddingLeft: "1rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                borderRadius: "10px",
              }}
            >
              Food: {progressValue} points
            </h2>
            <ProgressBar
              now={progressValue}
              label={`${progressValue}`}
              style={{
                height: "30px",
              }}
              animated
            />
            <div
              style={{
                position: "relative",
                top: "42vh",
                paddingLeft: "30vw",
                paddingRight: "30vw",
              }}
              className="text-center"
            >
              <ProgressBar
                now={health}
                label={`${health} HP`}
                style={{
                  height: "25px",
                  fontWeight: "bold",
                  boxShadow: "2px 1px 50px 0 white",
                }}
                variant="success"
              />
              <div id="corgi">
                <img
                  src={dogIdle1}
                  alt="Dog"
                  style={{
                    height: "15vh",
                  }}
                />
              </div>
              <div style={{ marginTop: "1rem" }}>
                <Form onSubmit={handleDogSubmit}>
                  <Button
                    style={{ backgroundColor: "rgb(113, 132, 196)" }}
                    type="submit"
                  >
                    Feed Doggo: -5
                  </Button>
                </Form>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

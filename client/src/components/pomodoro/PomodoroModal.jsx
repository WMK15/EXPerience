import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { handlePoints } from "../../api/habits";

export const PomodoroModal = ({ habits, userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [breakTime, setBreakTime] = useState(5);
  const [time, setTime] = useState(25 * 60); // Initial time in seconds
  const [isActive, setIsActive] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSprintTimeChange = (event) => {
    setTime(Number(event.target.value));
  };

  const handleBreakTimeChange = (event) => {
    setBreakTime(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTime(25 * 60); // Reset time to initial value
    setIsActive(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      handlePoints(userId, { xpGain: 3 }).then((response) => {
        console.log(response);
        alert("Pomodoro completed! You earned 3 points!");
        clearInterval(interval);
      });

      // Handle timer completion logic here
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className="mt-5">
      <Button
        variant="secondary"
        onClick={handleShowModal}
        style={{
          height: "50px",
          backgroundColor: "#7184c4",
          borderColor: "#679dbf",
        }}
      >
        Pomodoro
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            boxShadow: "2px 1px 50px 0 gray",
          }}
        >
          <Modal.Title>Pomodoro Timer</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "black",
            color: "white",
            borderColor: "#3c4032",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center", fontSize: "5rem" }}>
              {formatTime(time)}
            </h1>
            <Form.Group controlId="habit">
              <Form.Label style={{ color: "lightgray" }}>Habit</Form.Label>
              <Form.Control as="select">
                {habits.map((habit) => (
                  <option key={habit.habitId} value={habit.habitId}>
                    {habit.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="sprintTime">
              <Form.Label style={{ color: "lightgray" }}>
                Sprint Time (Seconds)
              </Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={time}
                onChange={handleSprintTimeChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mt-3"
              style={{ backgroundColor: "#7184c4", borderColor: "#679dbf" }}
            >
              Start
            </Button>
            <Button
              variant="danger"
              onClick={pauseTimer}
              className="mt-3 ml-3"
              style={{ backgroundColor: "red", borderColor: "#679dbf" }}
            >
              Pause
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

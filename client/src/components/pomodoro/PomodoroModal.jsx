import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PomodoroModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [sprintTime, setSprintTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSprintTimeChange = (event) => {
    setSprintTime(Number(event.target.value));
  };

  const handleBreakTimeChange = (event) => {
    setBreakTime(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="mt-5">
      <Button
        variant="secondary"
        onClick={handleShowModal}
        style={{ height: "50px" }}
      >
        <span className="mr-2">
          <FontAwesomeIcon icon="fa-solid fa-house" />
        </span>
        Open Pomodoro Modal
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Pomodoro Timer Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="sprintTime">
              <Form.Label>Sprint Time (minutes)</Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={sprintTime}
                onChange={handleSprintTimeChange}
              />
            </Form.Group>

            <Form.Group controlId="breakTime">
              <Form.Label>Break Time (minutes)</Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={breakTime}
                onChange={handleBreakTimeChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

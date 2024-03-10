import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createHabit } from "../../api/habits";

const AddHabitModal = ({ navigate, userId, show, handleClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [timeRequired, setTimeRequired] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const habit = {
      userId,
      name,
      description,
      timeRequired,
    };

    createHabit(habit).then((response) => {
      alert("Habit created successfully");
      setName("");
      setDescription("");
      setTimeRequired(0);
      handleClose();
      //refresh the page
      navigate(`/dashboard/${userId}`);
    });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTimeRequiredChange = (event) => {
    setTimeRequired(event.target.value);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "black",
          color: "white",
          borderColor: "black",
          boxShadow: "2px 1px 50px 0 gray",
        }}
      >
        <Modal.Title style={{ color: "lightgray" }}>Add Habit</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body
          style={{
            backgroundColor: "black",
            color: "white",
            borderColor: "#3c4032",
          }}
        >
          <Form.Group controlId="habitName">
            <Form.Label style={{ color: "lightgray" }}>Habit Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter habit name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label style={{ color: "lightgray" }}>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </Form.Group>
          <Form.Group controlId="timeRequired">
            <Form.Label style={{ color: "lightgray" }}>
              Time Required
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter time required"
              value={timeRequired}
              onChange={handleTimeRequiredChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: "black",
            color: "white",
            borderColor: "#3c4032",
          }}
        >
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" type="submit">
            Add Habit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddHabitModal;

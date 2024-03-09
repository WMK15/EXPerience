import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createHabit } from "../../api/habits";

const AddHabitModal = ({ show, handleClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueTime, setDueTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const habit = {
      name,
      description,
      priority,
      dueTime,
    };

    createHabit(habit).then((response) => {
      console.log(response);
      alert("Habit created successfully");
    });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueTime(event.target.value);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Habit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="habitName">
            <Form.Label>Habit Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter habit name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </Form.Group>
          <Form.Group controlId="dueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="datetime-local"
              value={dueTime}
              onChange={handleDueDateChange}
            />
          </Form.Group>
          <Form.Group controlId="priority">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              value={priority}
              onChange={handlePriorityChange}
            >
              <option value="">Select priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          Add Habit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddHabitModal;

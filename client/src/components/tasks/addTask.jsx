import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createTask } from "../../api/tasks";

const AddTaskModal = ({ navigate, show, handleClose, userId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueTime, setDueTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      userId,
      name,
      description,
      priority,
      dueTime,
    };

    createTask(task).then((response) => {
      alert("Task created successfully");
      setName("");
      setDescription("");
      setPriority("");
      setDueTime("");
      handleClose();
      navigate(`/dashboard/${userId}`);
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
    <Modal
      show={show}
      onHide={handleClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <Form onSubmit={handleSubmit}>
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            boxShadow: "2px 1px 50px 0 gray",
          }}
        >
          <Modal.Title>Add a New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "black",
            color: "white",
            borderColor: "#3c4032",
          }}
        >
          <Form.Group controlId="taskName">
            <Form.Label style={{ color: "lightgray" }}>Task Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group controlId="description" className="mt-3">
            <Form.Label style={{ color: "lightgray" }}>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </Form.Group>
          <Form.Group controlId="dueDate" className="mt-3">
            <Form.Label style={{ color: "lightgray" }}>Due Date</Form.Label>
            <Form.Control
              type="datetime-local"
              value={dueTime}
              onChange={handleDueDateChange}
            />
          </Form.Group>
          <Form.Group controlId="priority" className="mt-3">
            <Form.Label style={{ color: "lightgray" }}>Priority</Form.Label>
            <Form.Control
              as="select"
              value={priority}
              onChange={handlePriorityChange}
            >
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black" }}>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" type="submit">
            Add Task
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;

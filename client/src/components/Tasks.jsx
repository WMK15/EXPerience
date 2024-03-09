import axios from "axios";
import { useState } from "react";
import { Card, Form, Button, ListGroup } from "react-bootstrap";
import { createTask } from "../api/tasks";

export const Tasks = ({ tasks }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      name,
      description,
    };

    createTask(task).then((response) => {
      console.log(response);
      alert("Task created successfully");
    });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>
          <strong>Goals for Today</strong>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="taskName">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task name"
                onChange={handleNameChange}
                value={name}
              />
            </Form.Group>
            <Form.Group controlId="taskDescription">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter task description"
                onChange={handleDescriptionChange}
                value={description}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
          {/* Task list */}
          <ListGroup>
            {/* Render tasks dynamically */}
            {tasks.map((task) => (
              <ListGroup.Item key={task.id}>{task.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

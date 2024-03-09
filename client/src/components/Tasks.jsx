import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Form, Button, ListGroup } from "react-bootstrap";
import AddTaskModal from "./addTask";
import { getTasks } from "../api/tasks";

export const Tasks = ({ tasks }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    getTasks();
  });

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Tasks</span>
            <Button
              variant="primary"
              onClick={() => {
                setShow(true);
              }}
            >
              Add
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            {tasks.map((task) => (
              <ListGroup.Item key={task._id}>{task.name}</ListGroup.Item>
            ))}
          </ListGroup>

          <AddTaskModal
            show={show}
            handleClose={() => {
              setShow(false);
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

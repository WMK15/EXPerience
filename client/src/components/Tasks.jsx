import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Form, Button, ListGroup } from "react-bootstrap";
import AddTaskModal from "./addTask";
import { getTasks } from "../api/tasks";

export const Tasks = ({ tasks }) => {
  const [show, setShow] = useState(false);
  const [taskShow, setTaskShow] = useState(false);

  //   useEffect(() => {
  //     getTasks();
  //   });

  const tempTasks = [
    {
      _id: "1",
      name: "Task 1",
      description: "Task 1 description",
      priority: "high",
      dueTime: "2021-09-01",
    },
    {
      _id: "2",
      name: "Task 2",
      description: "Task 2 description",
      priority: "medium",
      dueTime: "2021-09-02",
    },
    {
      _id: "3",
      name: "Task 3",
      description: "Task 3 description",
      priority: "low",
      dueTime: "2021-09-03",
    },
  ];

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
            {tempTasks.map((task) => (
              <ListGroup.Item key={task._id}>
                <img src={task.image} alt={task.name} />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5>{task.name}</h5>
                  <viewTask
                    task={task}
                    handleClose={() => {
                      setTaskShow(false);
                    }}
                  />
                  <Button
                    variant="primary"
                    onClick={() => {
                      setTaskShow(true);
                    }}
                  >
                    View
                  </Button>
                </div>
                {taskShow && (
                  <showTask
                    task={task}
                    handleClose={() => {
                      setTaskShow(false);
                    }}
                  />
                )}
              </ListGroup.Item>
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

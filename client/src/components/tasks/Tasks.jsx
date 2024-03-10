import { useEffect, useState } from "react";
import { Card, Form, Button, ListGroup } from "react-bootstrap";
import AddTaskModal from "./addTask";
import { useNavigate } from "react-router-dom";
import ViewTaskModal from "./viewTask";

export const Tasks = ({ userId, tasks }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  tasks = tasks.filter((task) => task.completed === false);

  return (
    <div>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "whitesmoke",
          color: "black",
          boxShadow: "2px 1px 50px 0 gray",
        }}
        className="mt-5"
      >
        <Card.Header>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Tasks</span>
            <Button
              variant="primary"
              style={{ backgroundColor: "#7184c4", borderColor: "#679dbf" }}
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
              <ListGroup.Item key={task.taskId} className="mb-3">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6>{task.name}</h6>
                  <ViewTaskModal
                    userId={userId}
                    task={task}
                    navigate={navigate}
                  />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <AddTaskModal
            userId={userId}
            show={show}
            navigate={navigate}
            handleClose={() => {
              setShow(false);
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

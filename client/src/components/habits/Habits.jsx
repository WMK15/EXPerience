import { useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import AddHabitModal from "./addHabit";
import ViewHabitModal from "./viewHabit";
import { useNavigate } from "react-router-dom";

export const Habits = ({ userId, habits }) => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "whitesmoke",
          color: "black",
          borderColor: "black",
          boxShadow: "2px 1px 50px 0 gray",
        }}
        className="mt-5"
      >
        <Card.Header>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Habits</span>
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
            {habits.map((habit) => (
              <ListGroup.Item key={habit.habitId} className="mb-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h6>{habit.name}</h6>
                  <ViewHabitModal
                    userId={userId}
                    navigate={navigate}
                    habit={habit}
                  />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <AddHabitModal
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

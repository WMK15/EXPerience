import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Form, Button, ListGroup } from "react-bootstrap";
import AddHabitModal from "./addHabit";
import { getHabits } from "../../api/habits";

export const Habits = ({ habits }) => {
  const [show, setShow] = useState(false);
  const [habitShow, setHabitShow] = useState(false);

  //   useEffect(() => {
  //     getHabits();
  //   });

  const tempHabits = [
    {
      _id: "1",
      name: "Habit 1",
      description: "Habit 1 description",
      priority: "high",
      dueTime: "2021-09-01",
    },
    {
      _id: "2",
      name: "Habit 2",
      description: "Habit 2 description",
      priority: "medium",
      dueTime: "2021-09-02",
    },
    {
      _id: "3",
      name: "Habit 3",
      description: "Habit 3 description",
      priority: "low",
      dueTime: "2021-09-03",
    },
  ];

  return (
    <div>
      <Card style={{ width: "18rem" }} className="mt-5">
        <Card.Header>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Habits</span>
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
            {tempHabits.map((habit) => (
              <ListGroup.Item key={habit._id} className="mb-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h6>{habit.name}</h6>
                  <viewHabit
                    habit={habit}
                    handleClose={() => {
                      setHabitShow(false);
                    }}
                  />
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setHabitShow(true);
                    }}
                  >
                    View
                  </Button>
                </div>
                {habitShow && (
                  <showHabit
                    habit={habit}
                    handleClose={() => {
                      setHabitShow(false);
                    }}
                  />
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <AddHabitModal
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

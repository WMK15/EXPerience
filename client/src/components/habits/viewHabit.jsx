import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { deleteHabit } from "../../api/habits";

const ViewHabitModal = ({ userId, habit, navigate }) => {
  const [showModal, setShowModal] = useState(null);

  const handleClose = () => {
    setShowModal(null);
  };

  const handleShow = (habitId) => {
    setShowModal(habitId);
  };

  const handleDelete = () => {
    deleteHabit(habit.habitId)
      .then((response) => {
        console.log(response);
        alert("Habit deleted successfully");
        handleClose();
        navigate(`/dashboard/${userId}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Button
        size="sm"
        variant="primary"
        style={{
          backgroundColor: "#7184c4",
          borderColor: "#679dbf",
        }}
        onClick={() => {
          handleShow(habit.habitId);
        }}
      >
        More
      </Button>
      <Modal
        key={habit.habitId}
        show={showModal === habit.habitId}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{habit.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Description:</h6>
          <p>{habit.description ?? "Not specified"}</p>
          <p>
            <strong>Time Required: </strong> {habit.timeRequired}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewHabitModal;

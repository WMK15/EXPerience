import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { getTask, updateTask } from "../../api/tasks";

function formatDateTimeToYYYYMMDDHHMMSS(dateTime) {
  dateTime = new Date(dateTime);
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, "0"); // Adding 1 because month indexes are zero-based
  const day = String(dateTime.getDate()).padStart(2, "0");
  const hours = String(dateTime.getHours()).padStart(2, "0");
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year}, Time: ${hours}:${minutes}`;
}

const ViewTaskModal = ({ userId, task, navigate }) => {
  const [showModal, setShowModal] = useState(null);

  const handleClose = () => {
    setShowModal(null);
  };

  const handleShow = (taskId) => {
    setShowModal(taskId);
  };

  const handleComplete = () => {
    task.completed = true;
    console.log(task.taskId, task);
    updateTask(task.taskId, task).then((response) => {
      alert("Task completed successfully");
      handleClose();
      navigate(`/dashboard/${userId}`);
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
          handleShow(task.habitId);
        }}
      >
        View
      </Button>
      <Modal
        key={task.habitId}
        show={showModal === task.habitId}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{task.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Description:</h6>
          <p>{task.description ?? "Not specified"}</p>
          <p>
            <strong>Priority: </strong> {task.priority}
          </p>

          <p>
            <strong>Due: </strong>
            {formatDateTimeToYYYYMMDDHHMMSS(task.dueTime)}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleComplete}>
            Complete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewTaskModal;

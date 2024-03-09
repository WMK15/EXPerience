import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createTask } from "../../api/tasks";

const viewTaskModal = ({ task, handleClose }) => {
  return (
    <Modal>
      <Modal.Body>
        <h4>Task Details</h4>
        <p>Title: {task.title}</p>
        <p>Description: {task.description}</p>
        <p>Due Date: {task.dueDate}</p>
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
  );
};

export default viewTaskModal;

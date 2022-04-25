import React from "react";
import { observer } from "mobx-react";
import { Modal, Button, Form } from "react-bootstrap";
import { HiOutlineLink } from "react-icons/hi";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// code
const ShareModal = ({ show, handleClose, projectId, evaluation }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <div className="modal-title">
              <Form.Label>Project Share Link</Form.Label>
            </div>
            <div className="share-link">
              <HiOutlineLink
                size={26}
                style={{
                  marginRight: "10px",
                }}
              />
              <Form.Control
                name="name"
                defaultValue={`localhost:3000/projects/${projectId}/${evaluation.id}/x`}
                style={{
                  marginRight: "10px",
                  width: "70%",
                }}
              />
              <Button
                variant="light"
                onClick={() => {
                  copy(
                    `localhost:3000/projects/${projectId}/${evaluation.id}/x`
                  );
                  toast("Copied to clipboard!");
                }}
              >
                Copy
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleSubmit} type="submit">
          Done
        </Button>
      </Modal.Footer>
      <ToastContainer />
    </Modal>
  );
};

export default observer(ShareModal);

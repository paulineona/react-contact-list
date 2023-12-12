/* eslint-disable react/prop-types */
import { Modal, Button } from "react-bootstrap";

export default function ModalConfirmationUpdate({
  show,
  handleClose,
  emailAddress,
  contactNumber,
  location,               
}) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title> Please confirm the update to the following:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Email Address: <strong>{emailAddress}</strong>
        <br />
        Contact Number: <strong>{contactNumber}</strong>
        <br />
        Location: <strong>{location}</strong>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={handleClose}>
          Yes
        </Button>
        <Button variant='danger' onClick={handleClose}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

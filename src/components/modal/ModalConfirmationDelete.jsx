/* eslint-disable react/prop-types */
import { Button, Modal } from "react-bootstrap";

export default function ModalConfirmationDelete({
  showModal,
  handleClose,
  handleDelete,
}) {
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>Are you sure you want to delete the record?</Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={handleDelete}>
          Yes
        </Button>
        <Button variant='danger' onClick={handleClose}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

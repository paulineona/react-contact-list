/* eslint-disable react/prop-types */

// Importing necessary components from react-bootstrap
import { Button, Modal } from "react-bootstrap";

// Defining the ModalConfirmationDelete component
// It takes three props: showModal, handleClose, and handleDelete
export default function ModalConfirmationDelete({
  showModal,
  handleClose,
  handleDelete,
}) {
  // Rendering the Modal component
  return (
    <Modal
      // The 'show' prop determines whether the modal is visible
      show={showModal}
      // The 'onHide' prop is set to the handleClose function, which will be called when the modal needs to be closed
      onHide={handleClose}
      // The 'centered' prop centers the modal vertically in the viewport
      centered
      // The 'backdrop' prop set to 'static' means the modal will not close when clicking outside it
      backdrop='static'
      // The 'keyboard' prop set to 'false' means the modal will not close when pressing 'Esc'
      keyboard={false}
    >
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

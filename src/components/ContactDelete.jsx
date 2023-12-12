/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, Form, Row, Col, Container } from "react-bootstrap";

import { useState } from "react";
import ModalConfirmationDelete from "./modal/ModalConfirmationDelete";

export default function ContactDelete({ contacts, handleDeleteContact }) {
  const { id } = useParams();
  const contactId = parseInt(id, 10);
  const contact = contacts
    ? contacts.find((contact) => contact.id === contactId)
    : null;

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    handleDeleteContact(contactId);
    navigate("/");
  };

  return (
    <>
      <p className='text-center fs-4 fw-bold text-danger'>DELETE</p>
      <Card style={{ width: "50rem" }} className='m-auto'>
        <Card.Body>
          <Card.Title className='card-title'>Contact Details</Card.Title>
          <Form>
            <Form.Group className='mt-2 mb-2'>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type='text'
                value={contact.id}
                size='sm'
                readOnly
                disabled
              />
            </Form.Group>
            <Form.Group className='mt-2 mb-2'>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type='text'
                value={(() => {
                  const [lastName, firstName, middleInitial] =
                    contact.fullName.split(" ");
                  return `${lastName}, ${firstName} ${middleInitial}.`;
                })()}
                size='sm'
                readOnly
                disabled
              />
            </Form.Group>
            <Form.Group className='mt-2 mb-2'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='text'
                value={contact.emailAddress}
                size='sm'
                readOnly
                disabled
              />
            </Form.Group>
            <Form.Group className='mt-2 mb-2'>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type='tel'
                value={contact.contactNumber}
                size='sm'
                readOnly
                disabled
              />
            </Form.Group>
            <Form.Group className='mt-2 mb-2'>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type='text'
                value={contact.location}
                readOnly
                disabled
                x
              />
            </Form.Group>
            <Form.Group className='mt-2 mb-2'>
              <Form.Label>Registered Date</Form.Label>
              <Form.Control
                type='text'
                value={contact.registeredDate}
                size='sm'
                readOnly
                disabled
              />
            </Form.Group>
          </Form>
          <Container className='p-0 mt-3'>
            <Row>
              <Col>
                <Button variant='dark' onClick={() => navigate("/")}>
                  Back
                </Button>
              </Col>
              <Col className='text-end'>
                <Button variant='danger' onClick={() => setShowModal(true)}>
                  Delete
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>

      <ModalConfirmationDelete
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleDelete={handleDelete}
        contact={contact}
      />
    </>
  );
}
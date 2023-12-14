/* eslint-disable react/prop-types */

// Import necessary libraries and components
import { useParams } from "react-router-dom";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ModalConfirmationUpdate from "./modal/ModalConfirmationUpdate";

// Define the ContactUpdate component
export default function ContactUpdate({ contacts, handleUpdateContact }) {
  // Get the contact ID from the URL parameters
  const { id } = useParams();
  // Get the contact ID from the URL parameters
  const contactId = parseInt(id, 10);
  // Find the contact with the given ID in the contacts array
  const contact = contacts
    ? contacts.find((contact) => contact.id === contactId)
    : null;
  // Initialize the form with react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // Set the default values of the form fields to the contact's details
    defaultValues: {
      fullName: contact.fullName,
      emailAddress: contact.emailAddress,
      contactNumber: contact.contactNumber,
      location: contact.location,
      registeredDate: contact.registeredDate,
    },
  });

  // Initialize state for showing the confirmation modal and the updated data
  const [showModal, setShowModal] = useState(false);
  const [updatedData, setUpdatedData] = useState({});

  // Define the function to run when the form is submitted
  const onSubmit = (data) => {
    setUpdatedData({ ...contact, ...data });
    setShowModal(true);
  };

  const handleConfirm = () => {
    // Call the handleUpdateContact function with the updated data
    handleUpdateContact(updatedData);
    // Hide the confirmation modal
    setShowModal(false);
  };

  const handleClose = () => {
    // Hide the confirmation modal
    setShowModal(false);
  };

  // Render the component
  return (
    <>
      <p className='text-center fs-4 fw-bold text-success'>UPDATE</p>
      <Card style={{ width: "50rem" }} className='m-auto'>
        <Card.Body>
          <Card.Title className='card-title'>Contact Details</Card.Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mt-2 mb-2'>
              <Form.Label>ID</Form.Label>
              <Form.Control type='text' value={contact.id} size='sm' readOnly />
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
                size='sm'
                type='email'
                {...register("emailAddress", {
                  required: "Email Address field cannot be blank",
                  maxLength: {
                    value: 45,
                    message: "Email Address field accept up to 45 in size only",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Email Address field should have email domain",
                  },
                })}
              />
              {errors.emailAddress && (
                <p style={{ fontSize: "12px" }} className='text-danger m-1'>
                  {errors.emailAddress.message}
                </p>
              )}
            </Form.Group>
            <Form.Group className='mt-2 mb-2'>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                size='sm'
                type='tel'
                {...register("contactNumber", {
                  required: "Contact Number field cannot be blank",
                  validate: (value) =>
                    (value.length === 11 && /^[0-9]+$/.test(value)) ||
                    "Contact Number field should be numeric and 11 characters long",
                })}
              />
              {errors.contactNumber && (
                <p style={{ fontSize: "12px" }} className='text-danger m-1'>
                  {errors.contactNumber.message}
                </p>
              )}
            </Form.Group>
            <Form.Group className='mt-2 mb-2'>
              <Form.Label>Location</Form.Label>
              <Form.Select
                size='sm'
                {...register("location", {
                  required: "Location field cannot be blank",
                  validate: (value) =>
                    value !== "Select Location" ||
                    "Location field cannot be blank",
                })}
              >
                <option defaultValue>Select Location</option>
                <option>Cebu</option>
                <option>Manila</option>
              </Form.Select>
              {errors.location && (
                <p style={{ fontSize: "12px" }} className='text-danger m-1'>
                  {errors.location.message}
                </p>
              )}
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
            <Container className='p-0 mt-3'>
              <Row>
                <Col>
                  <Link to='/'>
                    <Button variant='dark'> Back </Button>
                  </Link>
                </Col>
                <Col className='text-end'>
                  <Button variant='success' type='submit'>
                    Save
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </Card.Body>
      </Card>
      {/* ModalConfirmationUpdate component */}
      {/* This is displayed when showModal is true */}
      {/* handleClose is called when the user wants to close the modal without confirming the update*/}
      {/* handleConfirm is called when the user confirms the update */}
      {/* The updated data is passed as props to the modal */}
      <ModalConfirmationUpdate
        show={showModal}
        handleClose={handleClose} // pass handleClose as a prop
        handleConfirm={handleConfirm}
        emailAddress={updatedData.emailAddress}
        contactNumber={updatedData.contactNumber}
        location={updatedData.location}
      />
    </>
  );
}

/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ContactUpdate({ contacts, handleUpdateContact }) {
  const { id } = useParams();
  const contactId = parseInt(id, 10);
  const contact = contacts
    ? contacts.find((contact) => contact.id === contactId)
    : null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleUpdateContact({ ...contact, ...data });
  };

  return (
    <Card style={{ width: "50rem" }} className='m-auto'>
      <Card.Body>
        <Card.Title className='card-title'>Contact Details</Card.Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className='p-2' controlId='formFullName'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Full Name'
              value={contact.fullName}
              readOnly
            />
          </Form.Group>
          <Form.Group className='p-2' controlId='formNumber'>
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type='tel'
              placeholder='0999-999-9999'
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
          <Form.Group className='p-2' controlId='formSelect'>
            <Form.Label>Location</Form.Label>
            <Form.Select
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
          <Button variant='primary' type='submit'>
            Update
          </Button>
          <Link to='/'>
            <Button variant='dark mt-3'> Back </Button>
          </Link>
        </Form>
      </Card.Body>
    </Card>
  );
}

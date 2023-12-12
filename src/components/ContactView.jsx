/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ContactView({ contacts }) {
  const { id } = useParams();

  const contactId = parseInt(id, 10);

  const contact = contacts
    ? contacts.find((contact) => contact.id === contactId)
    : null;

  return (
    <>
      <p className='text-center fs-4 fw-bold text-primary'>VIEW-READ ONLY!</p>
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
            <Link to='/'>
              <Button variant='dark mt-3'> Back </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

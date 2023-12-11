/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactView = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts
    ? contacts.find((contact) => contact.id === id)
    : null;

  if (!contact) {
    return <p>Contact not found</p>;
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Contact Details</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type='text'
                value={(() => {
                  const [lastName, firstName, middleInitial] =
                    contact.fullName.split(" ");
                  return `${lastName}, ${firstName} ${middleInitial}.`;
                })()}
                readOnly
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type='text' value={contact.emailAddress} readOnly />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type='text'
                value={contact.contactNumber}
                readOnly
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control type='text' value={contact.location} readOnly />
            </Form.Group>
            <Form.Group>
              <Form.Label>Registered Date</Form.Label>
              <Form.Control
                type='text'
                value={contact.registeredDate}
                readOnly
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
};

export default ContactView;

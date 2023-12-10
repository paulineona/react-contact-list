import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactForm() {
  return (
    <div className='border-class'>
      <Form>
        <h4 className='title'>Contact Form</h4>
        <Form.Group className='p-2' controlId='formFullName'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Last Name, First Name, Middle Initial'
          />
        </Form.Group>
        <Form.Group className='p-2' controlId='formEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='example@example.com' />
        </Form.Group>
        <Form.Group className='p-2' controlId='formNumber'>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type='tel' placeholder='0915-123-5678' />
        </Form.Group>
        <Form.Group className='p-2' controlId='formSelect'>
          <Form.Label>Location</Form.Label>
          <Form.Select>
            <option defaultValue>Select Location</option>
            <option>Cebu</option>
            <option>Manila</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='p-2' controlId='formDate'>
          <Form.Label>Registered Date</Form.Label>
          <Form.Control type='date' placeholder='Select Registered Date' />
        </Form.Group>
        <div className='d-grid gap-2 p-2'>
          <Button variant='dark' size='lg'>
            Add Contact
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;

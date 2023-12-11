/* eslint-disable */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

export default function ContactForm({ addContact }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addContact(data);
    reset();
  };

  const isCurrentDate = (selectedDate) => {
    const currentDate = new Date().toISOString().split("T")[0];
    return selectedDate === currentDate;
  };

  return (
    <div className='border-class'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h4 className='title'>Contact Form</h4>
        {/* ...FULL NAME... */}
        <Form.Group className='p-2' controlId='formFullName'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Last Name, First Name, Middle Initial'
            {...register("fullName", {
              required: "Full Name field cannot be blank",
              maxLength: {
                value: 30,
                message: "Full Name field accept up to 30 in size only",
              },
              pattern: {
                value: /^[a-zA-Z\s]*$/,
                message: "Full Name field accept characters values only",
              },
            })}
          />
        </Form.Group>
        {errors.fullName && (
          <p className='text-danger m-1'>{errors.fullName.message}</p>
        )}
        {/* ...EMAIL ADDRESS... */}
        <Form.Group className='p-2' controlId='formEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='example@example.com'
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
        </Form.Group>
        {errors.emailAddress && (
          <p className='text-danger m-1'>{errors.emailAddress.message}</p>
        )}
        {/* ...CONTACT NUMBER... */}
        <Form.Group className='p-2' controlId='formNumber'>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type='tel'
            placeholder='0999-999-9999'
            {...register("contactNumber", {
              required: "Contact Number field cannot be blank",
              maxLength: {
                value: 11,
                message: "Contact Number field accept up to 11 in size only",
              },
              minLength: {
                value: 11,
                message: "Contact Number field accept up to 11 in size only",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Contact Number field accept numeric values only",
              },
            })}
          />
        </Form.Group>
        {errors.contactNumber && (
          <p className='text-danger m-1'>{errors.contactNumber.message}</p>
        )}
        {/* ...LOCATION... */}
        <Form.Group className='p-2' controlId='formSelect'>
          <Form.Label>Location</Form.Label>
          <Form.Select
            {...register("location", {
              required: "Location field cannot be blank",
              validate: (value) =>
                value !== "Select Location" || "Location field cannot be blank",
            })}
          >
            <option defaultValue>Select Location</option>
            <option>Cebu</option>
            <option>Manila</option>
          </Form.Select>
        </Form.Group>
        {errors.location && (
          <p className='text-danger m-1'>{errors.location.message}</p>
        )}
        {/* ...REGISTERED DATE... */}
        <Form.Group className='p-2' controlId='formDate'>
          <Form.Label>Registered Date</Form.Label>
          <Form.Control
            type='date'
            placeholder='Select Registered Date'
            {...register("registeredDate", {
              required: "Registered Date field cannot be blank",
              validate: {
                isCurrentDate: (value) =>
                  isCurrentDate(value) ||
                  "Only accepts current date as Registered Date",
              },
            })}
          />
        </Form.Group>
        {errors.registeredDate && (
          <p className='text-danger m-1'>{errors.registeredDate.message}</p>
        )}
        <div className='d-grid gap-2 p-2'>
          <Button variant='dark' size='lg' type='submit'>
            Add Contact
          </Button>
        </div>
      </Form>
    </div>
  );
}

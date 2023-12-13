/* eslint-disable */

// Import necessary components and libraries
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

// Define the ContactForm component
export default function ContactForm({ handleAddContact }) {
  // Initialize the form with react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Define the onSubmit function
  const onSubmit = (data) => {
    console.log(data);
    // Call the handleAddContact function passed as a prop with the form data
    handleAddContact(data);
    // Reset the form fields
    reset();
  };

  // Define a function to check if the selected date is the current date
  const isCurrentDate = (selectedDate) => {
    const currentDate = new Date();
    const isSameDate =
      currentDate.getFullYear() === selectedDate.getFullYear() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getDate() === selectedDate.getDate();
    return isSameDate;
  };

  // Define a function to validate the full name field
  const validateFullName = (value) => {
    const [lastName, firstName, middleInitial] = value.split(" ");

    // If any part of the full name is missing, return an error message
    if (!lastName || !firstName || !middleInitial) {
      return "Full Name field should have Last Name, First Name, Middle Initial.";
    }

    // If the full name is valid, return true
    return true;
  };

  // Render the form
  return (
    <div className='border-class'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3 className='title'>Contact Form</h3>

        {/* ...FULL NAME... */}
        <Form.Group className='p-2' controlId='formFullName'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Last Name, First Name, Middle Initial'
            // The register function from react-hook-form is used to register this input field with the form
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
              validate: validateFullName,
            })}
          />
          {/* Display errors for the Full Name field */}
          {errors.fullName && (
            <p style={{ fontSize: "12px" }} className='text-danger m-1'>
              {errors.fullName.message}
            </p>
          )}
        </Form.Group>

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
          {/* Display errors for the Birth Date field */}
          {errors.emailAddress && (
            <p style={{ fontSize: "12px" }} className='text-danger m-1'>
              {errors.emailAddress.message}
            </p>
          )}
        </Form.Group>

        {/* ...CONTACT NUMBER... */}
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
          {/* Display errors for the Contact Number field */}
          {errors.contactNumber && (
            <p style={{ fontSize: "12px" }} className='text-danger m-1'>
              {errors.contactNumber.message}
            </p>
          )}
        </Form.Group>
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
          {/* Display errors for the Location field */}
          {errors.location && (
            <p style={{ fontSize: "12px" }} className='text-danger m-1'>
              {errors.location.message}
            </p>
          )}
        </Form.Group>

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
                  isCurrentDate(new Date(value)) ||
                  "Only accepts current date as Registered Date",
              },
            })}
          />
          {/* Display errors for the Registered Date field */}
          {errors.registeredDate && (
            <p style={{ fontSize: "12px" }} className='text-danger m-1'>
              {errors.registeredDate.message}
            </p>
          )}
        </Form.Group>

        <div className='d-grid gap-2 p-2'>
          <Button variant='dark' size='lg' type='submit'>
            Add Contact
          </Button>
        </div>
      </Form>
    </div>
  );
}

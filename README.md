# Explained below

The general explain of the project is a Contact List Project made with:

1. React
2. React-bootstrap - for design purposes
3. React hook form - for form validation which automatically handles form state management using the useForm hook & Easy Validation: It provides built-in form validation mechanisms, making it easier to validate form fields.
4. React router - for navigation between different pages

File Structure:

components:

\*header folder: - contains the header component and its styling

\*modal folder: - contains the modal components and its styling

main.jsx
: entry point of the react app
: responsible for importing the necessary modules and components, creating a root React container, and rendering the main App component into this container to start the application.

- reactDOM.createRoot - create a root react container on the HTML element with the id root - render method called to render the App component, where the App starts rendering

App.jsx
: parent component or main component of the application
: managing the main state of the application, defining the main routes of the application, and rendering the main layout of the application

ContactForm.jsx
: represents a form for adding new contacts
: uses react-hook-form to manage the form state, handle form validation, and handle form submission.
: form is submitted, it calls the handleAddContact function passed as a prop with the form data. Responsible for adding the new contact to a list or database.
: after the form is submitted, it resets the form fields to their initial state, ready for another input.
: validation: It includes custom validation functions

ContactList.jsx
: component used to display the contact list
: provide a user interface for viewing a list of contacts. Each contact is displayed in a row in a table format

\*Displaying Contacts: The component iterates over the currentItems array (which is a subset of all contacts) and creates a table row for each contact. Each row displays the contact's full name, email address, contact number, location, and registered date.

\*View, Update, and Delete Actions: Each row also includes "View", "Update", and "Delete" buttons. These buttons are linked to the /view/:id, /update/:id, and /delete/:id routes respectively, where :id is the ID of the contact. When clicked, these buttons will navigate to the respective routes where the user can view the full details of the contact, update the contact's details, or delete the contact.

\*Pagination: The component uses a PaginationComponent to handle pagination. The itemsPerPage and totalItems props are passed to the PaginationComponent to calculate the number of pages. The paginate function is passed as a prop to handle changing the current page.

- The part of the code maps over the currentItems array and creates a table row for each contact. Each row displays the contact's details and includes "View", "Update", and "Delete" buttons. The PaginationComponent is rendered at the bottom of the table to handle pagination.

ContactUpdate.jsx
: update the details of a contact
: provide a user interface for updating a contact's details. It displays a form with the contact's current details and allows the user to update them

\*State Management: The component uses React's useState hook to manage the state of the updated data and whether a modal should be shown.

\*Form Submission: When the form is submitted, the onSubmit function is called. This function merges the current contact data with the updated data and sets the showModal state to true to show a confirmation modal.

\*Confirmation Modal: The handleConfirm function is called when the user confirms the update in the modal. This function calls the handleUpdateContact function (which is likely passed as a prop) with the updated data and sets the showModal state to false to hide the modal.

\*Form Rendering: The component renders a form with fields for the contact's details. The ID and Full Name fields are read-only and disabled, meaning the user cannot change these values. The Email Address field is editable and uses the register function from react-hook-form to register the field for validation. If there are any validation errors, they are displayed below the field.

ContactDelete.jsx
: component that is used to delete a contact
: provide a user interface for deleting a contact. It displays the contact's details and asks the user to confirm the deletion

\*Retrieving the Contact: The component uses the useParams hook from react-router-dom to get the ID of the contact to be deleted from the URL parameters. It then finds the contact in the contacts array using this ID.

\*Confirmation Modal: The component uses the useState hook to manage whether a confirmation modal should be shown. The ModalConfirmationDelete component is likely used to display this modal.

\*Deleting the Contact: The handleDelete function is called when the user confirms the deletion in the modal. This function calls the handleDeleteContact function (which is passed as a prop) with the ID of the contact to be deleted. It then uses the useNavigate hook from react-router-dom to navigate back to the main page.

\*Rendering the Contact's Details: The component renders a form with the contact's details. All fields are read-only and disabled, meaning the user cannot change these values.

Pagination.jsx
: responsible for creating a pagination system for your items

\*Page Count Calculation: The component calculates the total number of pages based on the total number of items (totalItems) and the number of items per page (itemsPerPage). If there are any remaining items after dividing totalItems by itemsPerPage, it means there is an additional page for these items, so the page count is incremented by 1.

\*Page Numbers Array: The component creates an array of page numbers. This is done by looping from 1 to the total page count and pushing each number into the array.

\*Rendering Pagination Items: The component renders a Pagination component from react-bootstrap. Inside this component, it maps over the array of page numbers and creates a Pagination.Item for each page number. Each Pagination.Item displays the page number and has an onClick event handler that calls the paginate function with the page number when clicked.

The paginate function is expected to be passed as a prop to the Pagination.jsx component. This function should handle the logic for displaying the items on the clicked page number. In summary, the Pagination.jsx component provides a user interface for navigating through different pages of items. It's a reusable component that can be used wherever pagination is needed in your application.

ModalConfirmationUpdate.jsx
:component that displays a modal window to confirm the update of a contact's details. Here's a detailed explanation:

Props: The component receives several props:

show: A boolean that determines whether the modal should be displayed.
handleClose: A function that is called when the modal should be closed.
handleConfirm: A function that is called when the user confirms the update.
emailAddress, contactNumber, location: The updated contact details to be confirmed.
Modal Component: The Modal component from react-bootstrap is used to create the modal window. The show prop determines whether the modal is visible. The onHide prop is set to the handleClose function, which will be called when the modal needs to be closed.

Modal Header: The Modal.Header contains a title that asks the user to confirm the update.

Modal Body: The Modal.Body displays the updated contact details (email address, contact number, and location) that the user is asked to confirm.

Modal Footer: The Modal.Footer contains two buttons:

The "Yes" button, which confirms the update. When clicked, it calls the handleConfirm function.
The "No" button, which cancels the update. When clicked, it calls the handleClose function to close the modal.
In summary, the ModalConfirmationUpdate.jsx component is used to ask the user to confirm the update of a contact's details. It displays the updated details and provides "Yes" and "No" buttons for the user to confirm or cancel the update.

ModalConfirmationDelete.jsx
: a modal dialog that asks the user to confirm the deletion of a record. Here's a detailed explanation:

Props: The component receives three props:

showModal: A boolean that determines whether the modal should be displayed.
handleClose: A function that is called when the modal should be closed.
handleDelete: A function that is called when the user confirms the deletion.
Modal Component: The Modal component from react-bootstrap is used to create the modal window. The show prop determines whether the modal is visible. The onHide prop is set to the handleClose function, which will be called when the modal needs to be closed.

Modal Header: The Modal.Header contains a close button that allows the user to close the modal without confirming the deletion.

Modal Body: The Modal.Body contains a message asking the user if they are sure they want to delete the record.

Modal Footer: The Modal.Footer contains two buttons:

The "Yes" button, which confirms the deletion. When clicked, it calls the handleDelete function.
The "No" button, which cancels the deletion. When clicked, it calls the handleClose function to close the modal.
In summary, the ModalConfirmationDelete component is used to ask the user to confirm the deletion of a record. It displays a modal with a confirmation message and provides "Yes" and "No" buttons for the user to confirm or cancel the deletion.

HAND

---- In React, "props" is short for properties. They are a way of passing data from parent components to child components. The data being passed can be of any type: numbers, strings, objects, arrays, functions, etc.
---- So, when we say "pass as a prop", we mean that we are passing data from a parent component to a child component via props.

const { id } = useParams();
const contactId = parseInt(id, 10);
const contact = contacts
? contacts.find((contact) => contact.id === contactId)
: null;

const { id } = useParams();: This is like asking for directions. In this case, you're asking for a specific piece of information (the id) from a place called useParams. useParams is a tool provided by React Router that holds all the parameters from the URL. So if your URL was something like "/contact/5", useParams would be like a box containing { id: "5" }.

const contactId = parseInt(id, 10);: Now, you have the id but it's a string (like "5"), and you need it to be a number (like 5) to use it properly. So, you use a tool called parseInt to change the id from a string to a number. The 10 here means you're using base 10 numbers, which are the normal numbers we use every day.

const contact = contacts ? contacts.find((contact) => contact.id === contactId) : null;: This is like looking for a specific toy in a toy box. The toy box is contacts, and you're looking for a toy (a contact) whose id matches the contactId you have. If you find it, you take it out of the box and put it in contact. If the toy box is empty (if contacts is null or undefined), then contact will be null because there's no toy to find.

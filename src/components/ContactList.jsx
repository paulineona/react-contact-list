/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import PaginationComponent from "./Pagination";
import { useState } from "react";

// Custom table header and data components for styling
const Th = ({ children }) => <th className='align-baseline'>{children}</th>;
const Td = ({ children }) => <td className='align-middle'>{children}</td>;

// Main ContactList component
export default function ContactList({ contacts }) {
  // State for current page in pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Number of items per page

  const itemsPerPage = 5;

  // Calculate the index of the last and first items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the contacts array to get only the items for the current page
  const currentItems = contacts.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to format the full name
  const formatFullName = (fullName) => {
    const [lastName, firstName, middleInitial] = fullName.split(" ");
    const formatName = (name) =>
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `${formatName(lastName)}, ${formatName(firstName)} ${formatName(
      middleInitial
    )}.`;
  };

  // Render the table with the current items
  return (
    <div className='border-class'>
      <h4 className='title'>Data Table</h4>
      <Table striped hover responsive>
        <thead>
          <tr>
            <Th>Id</Th>
            <Th>Full Name</Th>
            <Th>Email Address</Th>
            <Th>Contact Number</Th>
            <Th>Location</Th>
            <Th>Registered Date</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {/* Iterate over the current items and create a table row for each */}
          {currentItems.map((contact, index) => (
            <tr key={index}>
              <Td>{index + 1 + (currentPage - 1) * itemsPerPage}</Td>
              {/* Format the full name before displaying */}
              <Td>{formatFullName(contact.fullName)}</Td>
              <Td>{contact.emailAddress}</Td>
              <Td>{contact.contactNumber}</Td>
              <Td>{contact.location}</Td>
              <Td>{contact.registeredDate}</Td>
              <Td>
                {/* Link to the view route for this contact */}
                <Link to={`/view/${contact.id}`}>
                  <Button variant='primary' size='sm' className='m-1'>
                    View
                  </Button>
                </Link>
                {/* Link to the update route for this contact */}
                <Link to={`/update/${contact.id}`}>
                  <Button variant='success' size='sm' className='m-1'>
                    Update
                  </Button>
                </Link>
                {/* Link to the delete route for this contact */}
                <Link to={`/delete/${contact.id}`}>
                  <Button variant='danger' size='sm' className='m-1'>
                    Delete
                  </Button>
                </Link>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Render the PaginationComponent with the necessary props */}
      <PaginationComponent
        itemsPerPage={itemsPerPage}
        totalItems={contacts.length}
        paginate={paginate}
      />
    </div>
  );
}

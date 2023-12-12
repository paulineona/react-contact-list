/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import PaginationComponent from "./Pagination";
import { useState } from "react";

const Th = ({ children }) => <th className='align-baseline'>{children}</th>;
const Td = ({ children }) => <td className='align-middle'>{children}</td>;

export default function ContactList({ contacts }) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contacts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const formatFullName = (fullName) => {
    const [lastName, firstName, middleInitial] = fullName.split(" ");
    const formatName = (name) =>
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `${formatName(lastName)}, ${formatName(firstName)} ${formatName(
      middleInitial
    )}.`;
  };

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
          {currentItems.map((contact, index) => (
            <tr key={index}>
              <Td>{index + 1 + (currentPage - 1) * itemsPerPage}</Td>
              <Td>{formatFullName(contact.fullName)}</Td>
              <Td>{contact.emailAddress}</Td>
              <Td>{contact.contactNumber}</Td>
              <Td>{contact.location}</Td>
              <Td>{contact.registeredDate}</Td>
              <Td>
                <Link to={`/view/${contact.id}`}>
                  <Button variant='primary' size='sm' className='m-1'>
                    View
                  </Button>
                </Link>
                <Link to={`/update/${contact.id}`}>
                  <Button variant='success' size='sm' className='m-1'>
                    Update
                  </Button>
                </Link>
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
      <PaginationComponent
        itemsPerPage={itemsPerPage}
        totalItems={contacts.length}
        paginate={paginate}
      />
    </div>
  );
}

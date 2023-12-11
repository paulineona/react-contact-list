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
              <Td>{index + 1}</Td>
              <Td>
                {(() => {
                  const [lastName, firstName, middleInitial] =
                    contact.fullName.split(" ");
                  return `${lastName}, ${firstName} ${middleInitial}.`;
                })()}
              </Td>
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
                <Button variant='success' size='sm' className='m-1'>
                  Update
                </Button>
                <Button variant='danger' size='sm' className='m-1'>
                  Delete
                </Button>
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

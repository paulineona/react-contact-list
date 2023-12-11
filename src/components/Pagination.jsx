/* eslint-disable react/prop-types */
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className='pagination'>
      {pageNumbers.map((number) => (
        <Pagination.Item key={number} onClick={() => paginate(number)}>
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;

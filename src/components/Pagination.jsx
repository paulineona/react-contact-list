/* eslint-disable react/prop-types */
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ itemsPerPage, totalItems, paginate }) => {
  let pageCount = totalItems / itemsPerPage;
  if (totalItems % itemsPerPage !== 0) {
    pageCount++;
  }

  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className='text-dark'>
      {pageNumbers.map((number) => (
        <Pagination.Item key={number} onClick={() => paginate(number)}>
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;

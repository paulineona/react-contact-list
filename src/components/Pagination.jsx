/* eslint-disable react/prop-types */

// Importing the Pagination component from react-bootstrap
import { Pagination } from "react-bootstrap";

// Defining the PaginationComponent
// It takes three props: itemsPerPage, totalItems, and paginate
const PaginationComponent = ({ itemsPerPage, totalItems, paginate }) => {
  // Calculating the total number of pages
  // This is done by dividing the total number of items by the number of items per page
  let pageCount = totalItems / itemsPerPage;

  // If there are any remaining items after dividing totalItems by itemsPerPage,
  // it means there is an additional page for these items, so we increment pageCount by 1
  if (totalItems % itemsPerPage !== 0) {
    pageCount++;
  }

  // Creating an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  // Rendering the Pagination component
  return (
    <Pagination className='text-dark'>
      {/* Mapping over the pageNumbers array to create a Pagination.Item for each page number */}
      {pageNumbers.map((number) => (
        // When a Pagination.Item is clicked, the paginate function is called with the page number
        <Pagination.Item key={number} onClick={() => paginate(number)}>
          {/* Displaying the page number */}  
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;

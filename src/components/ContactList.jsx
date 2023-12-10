import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function ContactList() {
  return (
    <div className='border-class'>
      <h4 className='title'>Data Table</h4>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th className='align-baseline'>Id</th>
            <th className='align-baseline'>Full Name</th>
            <th className='align-baseline'>Email Address</th>
            <th className='align-baseline'>Contact Number</th>
            <th className='align-baseline'>Location</th>
            <th className='align-baseline'>Registered Date</th>
            <th className='align-baseline'>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='align-middle'>1</td>
            <td className='align-middle'>Mark Otto</td>
            <td className='align-middle'>example@email.com</td>
            <td className='align-middle'>0915123456</td>
            <td className='align-middle'>Cebu</td>
            <td className='align-middle'>12/12/2000</td>
            <td className='align-middle'>
              <Button variant='primary' size='sm' className='m-1'>
                View
              </Button>
              {/* Add a View button */}
              <Button variant='success' size='sm' className='m-1'>
                Update
              </Button>
              {/* Add an Update button */}
              <Button variant='danger' size='sm' className='m-1'>
                Delete
              </Button>
              {/* Add a Delete button */}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ContactList;


import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function ContactList() {
  return (
    <div className='border-class'>
      <h4 className='title'>Data Table</h4>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Contact Number</th>
            <th>Location</th>
            <th>Registered Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark Otto</td>
            <td>example@email.com</td>
            <td>0915123456</td>
            <td>Cebu</td>
            <td>12/12/2000</td>
            <td>
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
          <tr>
            <td>2</td>
            <td>John Doe</td>
            <td>example@email.com</td>
            <td>0915123456</td>
            <td>Manila</td>
            <td>01/12/1998</td>
            <td>
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
          <tr>
            <td>3</td>
            <td>John Doe</td>
            <td>example@email.com</td>
            <td>0915123456</td>
            <td>Manila</td>
            <td>01/12/1998</td>
            <td>
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
          <tr>
            <td>4</td>
            <td>John Doe</td>
            <td>example@email.com</td>
            <td>0915123456</td>
            <td>Manila</td>
            <td>01/12/1998</td>
            <td>
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
          <tr>
            <td>5</td>
            <td>John Doe</td>
            <td>example@email.com</td>
            <td>0915123456</td>
            <td>Manila</td>
            <td>01/12/1998</td>
            <td>
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

import Table from 'react-bootstrap/Table';

function WeatherToday() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fat</td>
          <td>Boy</td>
        </tr>
        <tr>
          <td>Slim</td>
          <td>Shady</td>
        </tr>
       </tbody>
    </Table>
  );
}

export default WeatherToday;
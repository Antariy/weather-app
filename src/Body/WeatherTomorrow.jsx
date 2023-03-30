import Table from 'react-bootstrap/Table';

function WeatherTomorrow() {
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
          <td>Tony</td>
          <td>Stark</td>
        </tr>
        <tr>
          <td>Iron</td>
          <td>Man</td>
        </tr>
       </tbody>
    </Table>
  );
}

export default WeatherTomorrow;
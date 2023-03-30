import Table from 'react-bootstrap/Table';

function WeatherWeek() {
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
          <td>Jean</td>
          <td>Claude</td>
        </tr>
        <tr>
          <td>Van</td>
          <td>Damme</td>
        </tr>
       </tbody>
    </Table>
  );
}

export default WeatherWeek;
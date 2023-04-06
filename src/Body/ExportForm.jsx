import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getExportForm } from "../services/apiService";


function ExportForm() {
  const modes = ["xml", "html", "json"];

  const handleSubmit =  (event) => {
    event.preventDefault();

    const params = {
      mode:event.target.mode.value,
     }

    const currentWeatherExport = getExportForm(params);
    window.open(currentWeatherExport);
    };
 
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Mode</Form.Label>
        <Form.Select name="mode">
          {modes.map((mode) => (
            <option value={mode} key={mode}>
              {mode}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <div className="d-grid">
        <Button variant="warning" type="submit">
          Export
        </Button>
      </div>
    </Form>
  );
}

export default ExportForm;

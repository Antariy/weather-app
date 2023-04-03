import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ExportForm() {
  const modes = ["xml", "html", "json"];

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open();
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

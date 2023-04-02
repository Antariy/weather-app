import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ExportForm() {
 
    const formatValues = [
      {
        label: 'xml',
      },
      {
        label: 'html',
      },
      {
        label: 'json',
      },          
    ];

   const handleSubmit = () => {
       window.open();}

 return (        
         
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
    <Form.Label>What type of data do you want to export? </Form.Label>
    <Form.Select aria-label="Chose format" name='format'>
       {formatValues.map(({label}) => (<option value={label} key={label}>{label}</option>))}
    </Form.Select>
   </Form.Group>
        <div className="d-grid gap-2">
        <Button variant="primary" type="submit" onChange={handleSubmit}>
          Export
        </Button>
      </div>
    </Form>  
  );
  }

export default ExportForm;
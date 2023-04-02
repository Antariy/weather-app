import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ExportForm() {
  const [selectedFormat, choseSelectedFormat] = useState('');

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


  function ExportClick() {

    if (selectedFormat === 'xml') {
      window.open()
    } else if (selectedFormat === 'html') {
      window.open();
    } else if (selectedFormat === 'json') {
      window.open();
    }
  }

 return (        
         
      <>
    <Form.Group className="mb-3">
    <Form.Label>What type of data do you want to export? </Form.Label>
    <Form.Select aria-label="Chose format" name='format' onChange={(e) => choseSelectedFormat(e.target.value)}>
       {formatValues.map(({label}) => (<option value={label} key={label}>{label}</option>))}
    </Form.Select>
   </Form.Group>
        <div className="d-grid gap-2">
        <Button variant="primary" type="submit" onClick={ExportClick}>
          Export
        </Button>
      </div>
      </>

 
);

  }


export default ExportForm;

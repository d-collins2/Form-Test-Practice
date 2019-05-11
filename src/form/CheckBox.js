import React from 'react';
import { Form } from 'react-bootstrap'

const CheckBox = ({ checked, handleChange, label, name }) => {
    return (
      <Form.Group>
          <Form.Check
            name={name}
            type="checkbox"
            checked={checked}
            id={name}
            onChange={handleChange}/>
          <Form.Label>{label}</Form.Label>
      </Form.Group>
    )
}

export default CheckBox;

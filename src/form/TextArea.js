import React from 'react';
import { Form } from 'react-bootstrap'


const TextArea = ({value, handleChange, formError, errorClass, placeholder, name, controlId, serviceTypes}) => {
    return (
      <Form.Group
          className={errorClass(formError)}
          controlId="exampleForm.ControlTextarea1">
          <Form.Label>{controlId}</Form.Label>
          <Form.Control
              as="textarea"
              onChange={handleChange}
              rows="7"
              name={name}
              value={value}
              placeholder={placeholder}/>
              <span className="help-block">{formError}</span>
              <div className="text-right">
                  <Form.Text className="text-red">Required</Form.Text>
              </div>
      </Form.Group>
    )
}

TextArea.defaultProps = {
    labelFor: 'checkbox',
    value: [],
    handleChange: function(){},
    label: 'TextArea'
}

export default TextArea;

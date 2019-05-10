import React from 'react';
import { Form } from 'react-bootstrap'


const Select = ({value, handleChange, formError, errorClass, name, controlId, serviceTypes}) => {
    return (
      <Form.Group
          className={errorClass(formError)}
          controlId="controlId">
          <Form.Control
              required
              as="select"
              onChange={handleChange}
              name= "serviceType"
              value={value}>
              <option value="">Select Service Type</option>
              {serviceTypes && serviceTypes.map((type, id) => {
                  return <option key={id} value={type.display_name}>{type.display_name}</option>
              })}
          </Form.Control>
            <span className="help-block">{formError}</span>
            <div className="text-right">
                <Form.Text className="text-red">Required</Form.Text>
            </div>
      </Form.Group>

    )
}

Select.defaultProps = {
    className: 'form-group',
    labelFor: 'checkbox',
    value: [],
    handleChange: function(){},
    label: 'Select'
}

export default Select;

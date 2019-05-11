import React from 'react';
import { Form } from 'react-bootstrap'


const TextArea = ({value, handleChange, formError, errorClass, placeholder, name, controlId, serviceTypes}) => {
    return (
        <Form.Group
            controlId="exampleForm.ControlTextarea1">
            <Form.Label>{controlId}</Form.Label>
            <Form.Control
                required
                as="textarea"
                onChange={handleChange}
                rows="4"
                name={name}
                value={value}
                placeholder={placeholder}/>
              <span className="help-block text-red">{formError}</span>
                <div className="text-right">
                    <Form.Text className="text-muted">Required</Form.Text>
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

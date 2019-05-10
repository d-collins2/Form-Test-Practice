import React from 'react';
import { Form } from 'react-bootstrap'

const TextInput = ({value, handleChange, formError, errorClass, name, placeholder, controlId}) => {
    return (
        <Form.Group
            className={errorClass(formError)}
            controlId={controlId}>
            <Form.Control
                required
                value={value}
                onChange={handleChange}
                type="text"
                name={name}
                placeholder={placeholder}/>
            <span className="help-block">{formError}</span>
            <div className="text-right">
                <Form.Text className="text-red">Required</Form.Text>
            </div>
        </Form.Group>
    )
}

TextInput.defaultProps = {
    value: 'Text Input',
    handleChange: function(){},
    controlId: 'input',
    name: 'input',
    placeholder: 'input',
    type: 'input',
    className: 'form-control',
    formError: ''
}

export default TextInput;

import React from 'react';
import { Form } from 'react-bootstrap'

const TextInput = ({ value, handleChange, formError, name, placeholder, controlId }) => {
    function errorClass(error) {
        if(error){
            return( error.length === 0 ? '' : 'has-error');
        }
    }
    return (
        <Form.Group className={errorClass(formError)} controlid={controlId}>
            <Form.Control
                required
                value={value}
                onChange={handleChange}
                type="text"
                name={name}
                placeholder={placeholder}/>
            <Form.Text className="help-block text-red">{formError}</Form.Text>
            <div className="text-right">
                <Form.Text className="text-muted">Required</Form.Text>
            </div>
        </Form.Group>
    )
}

export default TextInput;

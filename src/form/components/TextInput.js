import React from 'react';
import { Form } from 'react-bootstrap'

const TextInput = ({ controlId, formError, handleChange, name, placeholder, value }) => {
    //Allows the components border to become red if invalid
    function errorClass(error) {
        if(error){
            return( error.length === 0 ? '' : 'has-error');
        }
    }
    return (
        <Form.Group className={errorClass(formError)} controlid={controlId}>
            <Form.Control
                required
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                type="text"
                value={value}/>
            <Form.Text className="help-block text-red">{formError}</Form.Text>
            <div className="text-right">
                <Form.Text className="text-muted">Required</Form.Text>
            </div>
        </Form.Group>
    )
}

export default TextInput;

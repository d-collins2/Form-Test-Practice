import React from 'react';
import { Form } from 'react-bootstrap'

const TextArea = ({ controlId, formError, handleChange, name, value }) => {
    function errorClass(error) {
        if(error){
            return( error.length === 0 ? '' : 'has-error');
        }
    }
    return (
        <Form.Group className={errorClass(formError)} id={controlId}>
            <Form.Label>{controlId}</Form.Label>
            <Form.Control
                required
                as="textarea"
                name={name}
                onChange={handleChange}
                rows="4"
                value={value}/>
            <Form.Text className="help-block text-red">{formError}</Form.Text>
            <div className="text-right">
                <Form.Text className="text-muted">Required</Form.Text>
            </div>
        </Form.Group>
    )
}

export default TextArea;

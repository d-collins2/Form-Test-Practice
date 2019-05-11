import React from 'react';
import { Form } from 'react-bootstrap'

const CheckBox = ({ checked, handleChange, label, name }) => {
    return (
        <Form.Group>
            <Form.Check
                checked={checked}
                id={name}
                name={name}
                onChange={handleChange}
                type="checkbox"/>
            <Form.Label>{label}</Form.Label>
        </Form.Group>
    )
}

export default CheckBox;

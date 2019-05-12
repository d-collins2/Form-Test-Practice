import React from 'react';
import PropTypes from 'prop-types';
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

CheckBox.propTypes = {
    checked: PropTypes.bool,
    handleChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string
};

CheckBox.defaultProps = {
    checked: false,
    formError: "Error",
    handleChange: function(){},
    label: "Label"
}

export default CheckBox;

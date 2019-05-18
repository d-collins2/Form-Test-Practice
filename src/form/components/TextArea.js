import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap'

const TextArea = ({ controlId, formError, handleChange, label, name, value }) => {
    //Allows the components border to become red if invalid
    function isValid(error) {
        if(error){
            return( error.length === 0 ? '' : 'has-error');
        }
    }
    return (
        <Form.Group className={isValid(formError)} id={controlId}>
            <Form.Label>{label}</Form.Label>
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

TextArea.propTypes = {
    controlId: PropTypes.string,
    formError: PropTypes.string,
    handleChange: PropTypes.func,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string
};

TextArea.defaultProps = {
    controlId: "Id",
    formError: "Error",
    handleChange: function(){},
    label: "Label",
    name: "Name",
    value: "Value"
}

export default TextArea;

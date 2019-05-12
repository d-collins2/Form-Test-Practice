import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'

const FormButton = ({ label }) => {
    return (
        <div className="text-right">
            <Button className="btn btn-primary" type="submit">{label}</Button>
        </div>
    )
}

Button.propTypes = {
    label: PropTypes.string
};

Button.defaultProps = {
    label: "Label"
}

export default FormButton;

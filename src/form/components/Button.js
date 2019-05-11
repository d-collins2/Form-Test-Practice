import React from 'react';
import { Button } from 'react-bootstrap'

const FormButton = ({label}) => {
    return (
        <div className="text-right">
            <Button className="btn btn-primary" type="submit">{label}</Button>
        </div>
    )
}

FormButton.defaultProps = {
    options: []
}

export default FormButton;

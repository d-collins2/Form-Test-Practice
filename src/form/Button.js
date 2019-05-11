import React from 'react';
import { Button } from 'react-bootstrap'

const FormButton = ({text}) => {
    return (
        <div className="text-right">
            <Button className="btn btn-primary" type="submit"> {text} </Button>
        </div>
    )
}

FormButton.defaultProps = {
    options: []
}

export default FormButton;

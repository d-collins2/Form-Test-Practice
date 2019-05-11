import React from 'react';

const TextArea = ({ value, handleChange, formError, name, controlId }) => {
    function errorClass(error) {
        if(error){
            return( error.length === 0 ? '' : 'has-error');
        }
    }
    return (
        <div className={`form-group ${errorClass(formError)}`} id={controlId}>
            <label>{controlId}</label>
            <textarea
                required
                className="form-control"
                onChange={handleChange}
                rows="4"
                name={name}
                value={value}/>
            <span className="help-block text-red">{formError}</span>
            <div className="text-right">
                <span><small className="text-muted">Required</small></span>
            </div>
        </div>
    )
}

export default TextArea;

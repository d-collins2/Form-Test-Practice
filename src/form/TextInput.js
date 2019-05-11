import React from 'react';

const TextInput = ({ value, handleChange, formError, name, placeholder, controlId }) => {
    function errorClass(error) {
        if(error){
            return( error.length === 0 ? '' : 'has-error');
        }
    }
    return (
        <div className={`form-group ${errorClass(formError)}`} id={controlId}>
            <input
                required
                className="form-control"
                value={value}
                onChange={handleChange}
                type="text"
                name={name}
                placeholder={placeholder}/>
            <span className="help-block text-red">{formError}</span>
            <div className="text-right">
                <span><small className="text-muted">Required</small></span>
            </div>
        </div>
    )
}

export default TextInput;

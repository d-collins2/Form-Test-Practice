import React from "react";
import Options from "./Options.js";

const Select = ({ value, handleChange, formError, name, controlId, serviceTypes }) => {
    function errorClass(error) {
        if(error){
            return( error.length === 0 ? '' : 'has-error');
        }
    }
  	return (
    		<div className={`form-group ${errorClass(formError)}`} id="controlId">
      			<select
        				required
                className="form-control"
        				onChange={handleChange}
        				name={name}
        				value={value}>
        			  <option value="">Select Service Type</option>
        				<Options options={serviceTypes} />
      			</select>
      			<span className="help-block text-red">{formError}</span>
            <div className="text-right">
                <span><small className="text-muted">Required</small></span>
            </div>
    		</div>
  	);
};

Select.defaultProps = {
	className: "form-group",
	labelFor: "checkbox",
	value: [],
	handleChange: function() {},
	label: "Select"
};

export default Select;

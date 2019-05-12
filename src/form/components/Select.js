import React from "react";
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap'
import Options from "./Options.js";

const Select = ({ controlId, formError, handleChange, name, serviceTypes, value }) => {
    //Allows the components border to become red if invalid
    function errorClass(error) {
        if(error){
            return( error.length === 0 ? '' : 'has-error');
        }
    }
  	return (
    		<Form.Group className={errorClass(formError)} id="controlId">
      			<Form.Control
        				required
                as="select"
                name={name}
        				onChange={handleChange}
        				value={value}>
        			  <option value="">Select Service Type</option>
        				<Options options={serviceTypes}/>
      			</Form.Control>
      			<Form.Text className="help-block text-red">{formError}</Form.Text>
            <div className="text-right">
                <Form.Text className="text-muted">Required</Form.Text>
            </div>
    		</Form.Group>
  	);
};

Select.propTypes = {
    controlId: PropTypes.string,
    formError: PropTypes.string,
    handleChange: PropTypes.func,
    name: PropTypes.string,
    serviceTypes: PropTypes.array,
    value: PropTypes.string
};

Select.defaultProps = {
    controlId: "Id",
    formError: "Error",
    handleChange: function(){},
    name: "Name",
    serviceTypes: [],
    value: "Value"
}

export default Select;

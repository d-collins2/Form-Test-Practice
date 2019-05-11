import React from "react";
import { Form } from 'react-bootstrap'
import Options from "./Options.js";

const Select = ({ value, handleChange, formError, name, controlId, serviceTypes }) => {
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
        				onChange={handleChange}
        				name={name}
        				value={value}>
        			  <option value="">Select Service Type</option>
        				<Options options={serviceTypes} />
      			</Form.Control>
      			<Form.Text className="help-block text-red">{formError}</Form.Text>
            <div className="text-right">
                <Form.Text>className="text-muted">Required</Form.Text>
            </div>
    		</Form.Group>
  	);
};

export default Select;

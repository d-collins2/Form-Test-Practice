import React from "react";
import { Form } from 'react-bootstrap'
import Options from "./Options.js";

const Select = ({ controlId, formError, handleChange, name, serviceTypes, value }) => {
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
                <Form.Text>className="text-muted">Required</Form.Text>
            </div>
    		</Form.Group>
  	);
};

export default Select;

import React from "react";
import { Form } from "react-bootstrap";
import Options from "./Options.js";

const Select = ({
  	value,
  	handleChange,
  	formError,
  	errorClass,
  	name,
  	controlId,
  	serviceTypes
}) => {
  	return (
    		<Form.Group controlId="controlId">
      			<Form.Control
        				required
        				as="select"
        				onChange={handleChange}
        				name="serviceType"
        				value={value}
      			>
      			<option value="">Select Service Type</option>
      				  <Options options={serviceTypes} />
      			</Form.Control>
      			<span className="help-block text-red">{formError}</span>
      			<div className="text-right">
      				  <Form.Text className="text-muted">Required</Form.Text>
      			</div>
    		</Form.Group>
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

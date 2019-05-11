import React, { Component } from 'react';
import "./Form.css"
import { Row, Form } from 'react-bootstrap'
import Button from './Button.js'
import CheckBox from './CheckBox.js'
import TextArea from './TextArea.js'
import TextInput from './TextInput.js'
import Select from './Select.js'

class RequestForm extends Component{
    state = {
        formErrors: {
            firstName: '',
            lastName: '',
            email: '',
            serviceType: '',
            description: ''
        },
        valid: {
            firstName: false,
            lastName: false,
            email: false,
            serviceType: false,
            description: false
        },
        firstName: '',
        lastName: '',
        email: '',
        serviceType: '',
        description: '',
        checked: false,
        formValid: false
    }

    //Checks if the input field on the form is valid.
    validateField = (fieldName, value) => {
        const tempValid = {...this.state.valid}
        const tempErrors = {...this.state.formErrors}
        switch(fieldName) {
            case 'firstName':
                tempValid.firstName = value.length >= 1;
                tempErrors.firstName = tempValid.firstName ? '': 'First Name is empty.';
                break;
            case 'lastName':
                tempValid.lastName = value.length >= 1;
                tempErrors.lastName = tempValid.lastName ? '': 'Last Name is empty.';
                break;
            case 'email':
                tempValid.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                tempErrors.email = tempValid.email ? '' : 'Email is invalid.';
                break;
            case 'serviceType':
                tempValid.serviceType = value.length >= 1;
                tempErrors.serviceType = tempValid.serviceType ? '' : 'Service Type is invalid.';
                break;
            case 'description':
                tempValid.description = value.length >= 1;
                tempErrors.description = tempValid.description ? '' : 'Description is empty.';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: tempErrors,
            valid: tempValid
        }, this.validateForm);
    }

    // Checks if all fields are valid and allows the button to submit a request.
    validateForm() {
        const { checked } = this.state
        const {
            firstName,
            lastName,
            email,
            serviceType,
            description
        } = this.state.valid
        this.setState({
            formVal:  firstName &&
                      lastName &&
                      email &&
                      serviceType &&
                      description &&
                      checked
        })
    }

    // Sends a POST request which returns the response in a console.log.
    onSubmit = (event) => {
        event.preventDefault()
        const { firstName, lastName, email, serviceType, description } = this.state
        fetch('http://localhost:49567/api/assistance-requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                assistance_request: {
                    'contact': {
                        'first_name': firstName,
                        'last_name': lastName,
                        'email': email
                    },
                    'service_type': serviceType,
                    'description': description
                }
            })
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)
            if(response.echo){
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                serviceType: '',
                description: ''
            },
                alert(response.message))
            } else {
                alert(response.message)
            }
        })
    }

    // Sets state of the target input field and checks if its a valid input.
    handleChange = (event) => {
    let { name, type, checked, value } = event.target
    const newValue = type === 'checkbox' ? checked : value;
        this.setState({
            [name]: newValue },
            () => { this.validateField(name, newValue) }
        )
    }

    errorClass(error) {
        if(error){
            return( error.length === 0 ? '' : 'has-error');
        }
    }

    render() {
        const {
            firstName,
            lastName,
            email,
            serviceType,
            description
        } = this.state.formErrors
        return (
            <Row>
                <Form
                    onSubmit={this.onSubmit}
                    className="col-md-3 col-md-offset-4 form"
                >
                    <h2 className="title">New Assistance Request</h2>
                    <TextInput
                        controlId={"FirstName"}
                        formError={firstName}
                        errorClass={this.errorClass}
                        handleChange={this.handleChange}
                        name={"firstName"}
                        placeholder={"First Name"}
                        value={this.state.firstName}
                    />
                    <TextInput
                        controlId={"LastName"}
                        errorClass={this.errorClass}
                        formError={lastName}
                        handleChange={this.handleChange}
                        name={"lastName"}
                        placeholder={"Last Name"}
                        value={this.state.lastName}
                    />
                    <TextInput
                        controlId={"Email"}
                        errorClass={this.errorClass}
                        formError={email}
                        handleChange={this.handleChange}
                        name={"email"}
                        placeholder={"Email Address"}
                        value={this.state.email}

                    />
                    <Select
                        controlId={"SelectType"}
                        errorClass={this.errorClass}
                        formError={serviceType}
                        handleChange={this.handleChange}
                        name={"serviceType"}
                        serviceTypes={this.props.serviceTypes}
                        value={this.state.serviceType}
                    />
                    <TextArea
                        controlId={"Description"}
                        errorClass={this.errorClass}
                        formError={description}
                        handleChange={this.handleChange}
                        name={"description"}
                        serviceTypes={this.props.description}
                        value={this.state.description}
                    />
                    <CheckBox
                        checked={this.state.checked}
                        handleChange={this.handleChange}
                        label="I hereby accept the terms of service for THE NETWORK and the Privacy Policy"
                        name="checked"
                    />
                    <Button text={"Get Assitance"}/>
                </Form>
            </Row>
        );
    }
}


export default RequestForm;

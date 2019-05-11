import React, { Component } from 'react';
import "./Form.css"
import { Row, Form } from 'react-bootstrap'
import TextInput from './TextInput.js'
import Select from './Select.js'
import TextArea from './TextArea.js'
import CheckBox from './CheckBox.js'
import Button from './Button.js'

class RequestForm extends Component{
    state = {
        formErrors: { firstName: '', lastName: '', email: '', serviceType: '', description: '' },
        firstName: '',
        firstNameValid: false,
        lastName: '',
        lastNameValid: false,
        email: '',
        emailValid: false,
        serviceType: '',
        serviceTypeValid: false,
        description: '',
        descriptionValid: false,
        subscribed: false,
        formValid: false
    }

    //Checks if the input field on the form is valid.
    validateField = (fieldName, value) => {
        let { firstNameValid, lastNameValid, emailValid, serviceTypeValid, descriptionValid, formErrors } = this.state
        switch(fieldName) {
            case 'firstName':
                firstNameValid = value.length >= 1;
                formErrors.firstName = firstNameValid ? '': 'First Name is empty.';
                break;
            case 'lastName':
                lastNameValid = value.length >= 1;
                formErrors.lastName = lastNameValid ? '': 'Last Name is empty.';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                formErrors.email = emailValid ? '' : 'Email is invalid.';
                break;
            case 'serviceType':
                serviceTypeValid = value.length >= 1;
                formErrors.serviceType = serviceTypeValid ? '' : 'Service Type is invalid.';
                break;
            case 'description':
                descriptionValid = value.length >= 1;
                formErrors.description = descriptionValid ? '' : 'Description is empty.';
                break;
            default:
                break;
        }
        this.setState({
                        formErrors: formErrors,
                        firstNameValid: firstNameValid,
                        lastNameValid: lastNameValid,
                        emailValid: emailValid,
                        serviceTypeValid: serviceTypeValid,
                        descriptionValid: descriptionValid
                      }, this.validateForm);
    }

    // Checks if all fields are valid and allows the button to submit a request.
    validateForm() {
        const {
                firstNameValid,
                lastNameValid,
                emailValid,
                serviceTypeValid,
                descriptionValid,
                subscribed
              } = this.state
        this.setState({formValid:
                        firstNameValid &&
                        lastNameValid &&
                        emailValid &&
                        serviceTypeValid &&
                        descriptionValid &&
                        subscribed
                      });
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
            this.setState({
                            firstName: '', lastName: '', email: '', serviceType: '', description: '' },
                            alert(response.message))
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

    render() {
        const { firstName, lastName, email, serviceType, description} = this.state.formErrors
        console.log(this.state)
        return (
            <Row>
                <Form onSubmit={this.onSubmit} className="col-md-3 col-md-offset-4 form">
                    <h2 className="title">New Assistance Request</h2>
                    <TextInput
                        controlId={"FirstName"}
                        formError={firstName}
                        errorClass={this.errorClass}
                        handleChange={this.handleChange}
                        name={"firstName"}
                        placeholder={"First Name"}
                        value={this.state.firstName}/>
                    <TextInput
                        controlId={"LastName"}
                        errorClass={this.errorClass}
                        formError={lastName}
                        handleChange={this.handleChange}
                        name={"lastName"}
                        placeholder={"Last Name"}
                        value={this.state.lastName}/>
                    <TextInput
                        controlId={"Email"}
                        errorClass={this.errorClass}
                        formError={email}
                        handleChange={this.handleChange}
                        name={"email"}
                        placeholder={"Email Address"}
                        value={this.state.email}/>
                    <Select
                        controlId={"SelectType"}
                        errorClass={this.errorClass}
                        formError={serviceType}
                        handleChange={this.handleChange}
                        name={"serviceType"}
                        serviceTypes={this.props.serviceTypes}
                        value={this.state.serviceType}/>
                    <TextArea
                        controlId={"Description"}
                        errorClass={this.errorClass}
                        formError={description}
                        handleChange={this.handleChange}
                        name={"description"}
                        serviceTypes={this.props.description}
                        value={this.state.description}/>
                    <CheckBox
                        checked={this.state.subscribed}
                        handleChange={this.handleChange}
                        label="I hereby accept the terms of service for THE NETWORK and the Privacy Policy"
                        labelFor="subscribed"/>
                    <Button text={"Get Assitance"}/>
                </Form>
            </Row>
        );
    }
}


export default RequestForm;

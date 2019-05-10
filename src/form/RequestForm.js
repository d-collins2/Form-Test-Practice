import React, { Component } from 'react';
import { Row, Card, Form, Button } from 'react-bootstrap'
import FormErrors from './FormErrors.js'

const textRight = {
  textAlign: 'right'
}

class RequestForm extends Component{
  state = {
    firstName: '',
    lastName: '',
    email: '',
    serviceType: '',
    description: '',
    firstNameValid: false,
    lastNameValid: false,
    emailValid: false,
    serviceTypeValid: false,
    descriptionValid: false,
    formValid: false,
    formErrors: {
      firstName: '',
      lastName: '',
      email: '',
      serviceType: '',
      description: ''}
  }

  validateField(fieldName, value) {
  let {
        firstNameValid,
        lastNameValid,
        emailValid,
        serviceTypeValid,
        descriptionValid,
        formErrors} = this.state

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
      formErrors.serviceType = serviceTypeValid ? '' : 'Service Type is empty.';
      break;
    case 'description':
      descriptionValid = value.length >= 10;
      formErrors.description = descriptionValid ? '' : 'Description is too short.';
      break;
    default:
      break;
  }

  this.setState({formErrors: formErrors,
                  firstNameValid: firstNameValid,
                  lastNameValid: lastNameValid,
                  emailValid: emailValid,
                  serviceTypeValid: serviceTypeValid,
                  descriptionValid: descriptionValid
                }, this.validateForm);
  }

  validateForm() {
    const {
      firstNameValid,
      lastNameValid,
      emailValid,
      serviceTypeValid,
      descriptionValid} = this.state

    this.setState({formValid:
                    firstNameValid &&
                    lastNameValid &&
                    emailValid &&
                    serviceTypeValid &&
                    descriptionValid});
  }

  assistanceRequests = (event) => {
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
          "contact": {
            "first_name": firstName,
            "last_name": lastName,
            "email": email
          },
          "service_type": serviceType,
          "description": description
        }
      })
    })
    .then(res => res.json())
    .then(response => console.log(response))
  }

  handleChange = (event) => {
  const { name, value } = event.target
    this.setState({
      [name]: value },
      () => { this.validateField(name, value) }
    )
  }

  errorClass(error) {
    return(error.length === 0 ? 'is-valid' : 'has-error');
  }

  render(){
    console.log(this.state)
    const { firstName, lastName, email, serviceType, description} = this.state.formErrors
    return (
      <Row>
      <Card>
        <Card.Body>
        <Form onSubmit={this.assistanceRequests} className="col-md-6 col-md-offset-4 form">
          <h2 className="title">New Assistance Request</h2>
          <Form.Group
            className={`form-group ${this.errorClass(firstName)}`}
            controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              value={this.state.firstName}
              onChange={this.handleChange}
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              data-error="Please select one option." />
            <div style={textRight}>
              <Form.Text className="text-muted">Required</Form.Text>
            </div>
          </Form.Group>

          <Form.Group
            className={`form-group ${this.errorClass(lastName)}`}
            controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="Enter Last Name" />
            <div style={textRight}>
              <Form.Text className="text-muted">Required</Form.Text>
            </div>
          </Form.Group>

          <Form.Group
            className={`form-group ${this.errorClass(email)}`}
            controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Enter Email Address" />
            <div style={textRight}>
              <Form.Text className="text-muted">Required</Form.Text>
            </div>
          </Form.Group>

          <Form.Group
            className={`form-group ${this.errorClass(serviceType)}`}
            controlId="formBasicEmail">
            <Form.Label>Service Type</Form.Label>
            <Form.Control
              required
              as="select"
              onChange={this.handleChange}
              name= "serviceType">
              value={this.state.serviceType}
              <option value="">Select Service Type</option>
              {this.props.serviceTypes.map((type, id) => {
                return <option key={id} value={type.display_name}>{type.display_name}</option>
              })}
            </Form.Control>
            <div style={textRight}>
              <Form.Text className="text-muted">Required</Form.Text>
            </div>
          </Form.Group>

          <Form.Group
            className={`form-group ${this.errorClass(description)}`}
            controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              onChange={this.handleChange}
              rows="3"
              name="description"
              value={this.state.description}/>

              <div style={textRight}>
                <Form.Text className="text-muted">Required</Form.Text>
              </div>
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check
              required
              type="checkbox"
              label="I hereby accept the terms of service for THE NETWORK and the Privacy Policy"
              feedback="You must agree before submitting." />
          </Form.Group>

          <div style={textRight}>
            <Button
              className="btn btn-primary"
              type="submit"
              disabled={!this.state.formValid}>
              Get Assitance
            </Button>
          </div>
        </Form>
        </Card.Body>
        </Card>
      </Row>
    );
  }
}


export default RequestForm;

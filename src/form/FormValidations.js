import React from 'react';

class Validations extends React.Component {
  state = {
    firstNameValid: false,
    lastNameValid: false,
    emailValid: false,
    serviceTypeValid: false,
    descriptionValid: false,
    formValid: false,
    formErrors: this.props.formErrors
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
      descriptionValid = value.length >= 8;
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
  render() {
    return (
      () => this.validateField()
    )
  }
}

export default Validations

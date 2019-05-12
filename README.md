# Unite Us - Code Challenge

A form which allows a user to submit a POST request for assistance.

# Contents
- [Folders](#folders)
- [Form](#form)
- [Test](#test)

## Folders
The app currently has 3 folders which are ```form```, ```components``` and ```tests```. The ```form``` folder contains all of the forms functionality and holds the ```components``` folder. The ```components``` folder holds the children components which are currently used in the `RequestForm.js`. The ```_test_``` folder runs the [Jest](jestjs.io) and [Enzyme](https://airbnb.io/enzyme/) tests for all of the components in the application.

## Form

### Components
The `components` folder contains 6 lower leveled form components.
* The `TextInput.js` contains the functionality for a text field.
* The `TextArea.js` contains the functionality for a text area field.
* The `Select.js` contains the functionality for a dropdown menu.
* The `Options.js` contains the functionality for the options of the parent `Select.js` component.
* The `Button.js` contains the functionality for a button component.
* The `CheckBox.js` contains the functionality for the check box field.

If a text input field, text area field or select field are not valid, the border around these components becomes red and a message is rendered underneath.

### Request Form
The ```RequestForm.js``` is the parent component where the functionality of the form lies. Validations are checked onChange of the input fields. The first name, last name, and description validation checks whether these fields are empty. The email field uses a regular expression which checks whether a "@" and "." exist in a specific order, e.g., test@test.com. The service type field is valid as long as the first option is not selected. All of the components are required by the form which offers another form of validation onSubmit.

As long as the 201 code is sent back the form will send an alert message, clear the fields, and console.log the response. Otherwise the form will only send an alert message and not clear the fields.

## Test
The `test` folder contains 6 test files and a snapshots folder which is used by [Jest](jestjs.io).

### Request Form
The `RequestForm.test.js` contains the following tests for the Request Form:
* Should capture firstname correctly onChange
* Should capture lastname correctly onChange
* Should capture email correctly onChange
* Should capture checkbox ticked correctly onChange
* Should call alert() when submit button is clicked

### Text Input
The `TextInput.test.js` contains the following tests:
* Should render correctly
* Should call changeHandler onChange on input

### Text Area
The `TextArea.test.js` contains the following tests:
* Should render correctly
* Should have the correct Text Area label
* Should call changeHandler onChange on input

### Option
The `Options.test.js` contains the following tests:
* Should render correctly
* Should have the correct number of option tags

### Button
The `Button.test.js` contains the following tests:
* Should render correctly
* Should have the correct button label

### Check Box
The `CheckBox.test.js` contains the following tests:
* Should render correctly
* Should have a single input tag
* Should have the correct checkbox label
* Should call changeHandler once onChange

### Select
The `Select.test.js` contains the following tests:
* Should render correctly
* Should have one select
* Should be able to select one <option> from drop down

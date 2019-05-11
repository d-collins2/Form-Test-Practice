# Unite Us - Code Challenge

Guidelines for this challenge can be found [Here](https://gist.github.com/geoherna/6088fa657d7415dbe0cb7c9aa255b69d). 
 
A form which allows a user to submit a POST request for assistance. 

# Contents

- [Folders](#folders)
- [Form](#form)
- [Tests](#tests)

# Folders 
The app currently has 3 folders which are ```form```, ```components``` and ```tests```. The ```form``` folder contains all of the forms functionality and holds the ```components``` folder. The ```components``` folder holds the children components which are currently used in the RequestForm.js. The ```_test_``` folder runs the [Jest](jestjs.io) and [Enzyme](https://airbnb.io/enzyme/) tests for all of the components in the application.

## Components
The `components` folder contains 6 lower leveled form componenets. 
* The `TextInput.js` contains the functionality for a text field. 
* The `TextArea.js` contains the functionality for a text area field. 
* The `Select.js` contains the functionality for a dropdown menu. 
* The `Options.js` contains the functionality for the options of the parent `Select.js` component. 
* The `Button.js` contains the functionality for a button component. 
* The `CheckBox.js` contains the functionality for the check box field. 

If a text input field, text area field or select field are not valid, the border around these components becomes red and a message is rendered underneath. 

### Request Form
The ```RequestForm.js``` is the parent component where the functionality of the form lies. Validations are checked onChange of the input fields. The first name, last name, and description fields validation checks whether these fields are empty. The email field uses a regular expression which checks whether a "@" and "." exists in a specific order, e.g., test@test.com. The service type field is valid as long as the first option is not selected. All of the components are required by the form which offers another form of validation onSubmit. 


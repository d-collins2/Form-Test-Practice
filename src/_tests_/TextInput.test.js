import React from 'react';
import renderer from 'react-test-renderer';
import { Form } from 'react-bootstrap'
import { shallow } from 'enzyme';
import TextInput from '../form/TextInput';

describe('<TextInput />', function() {

    it('Should render correctly', function(){
        const component = renderer.create(<TextInput />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should call changeHandler onChange on input', function() {
        const mockHandler = jest.fn();
        const component = shallow(<TextInput handleChange={mockHandler}/>);
        const input = component.find(Form.Control);
        input.simulate('change');
        expect(mockHandler.mock.calls.length).toBe(1);
    })
})

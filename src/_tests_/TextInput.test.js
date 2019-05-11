import renderer from 'react-test-renderer';
import TextInput from '../form/TextInput';
import React from 'react';
import { shallow } from 'enzyme';

describe('<TextInput />', function() {

    it('Should render correctly', function(){
        const component = renderer.create(<TextInput />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should have <div> with correct class name', function(){
        const component = shallow(<TextInput />);
        const div = component.find('div').first()
        expect(div.hasClass('form-group')).toBe(true)
    });

    it('Should call changeHandler onChange on input', function() {
        const mockHandler = jest.fn();
        const component = shallow(<TextInput handleChange={mockHandler}/>);
        const input = component.find('input');
        input.simulate('change');
        expect(mockHandler.mock.calls.length).toBe(1);
    })
})

import React from 'react';
import renderer from 'react-test-renderer';
import { Form } from 'react-bootstrap'
import { shallow } from 'enzyme';
import CheckBox from '../form/components/Checkbox.js';

describe('<CheckBuox />', function(){

    it('should render correctly', function(){
        const component = renderer.create(<CheckBox />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have a single input tag', function(){
        const component = shallow(<CheckBox />);
        expect(component.find(Form.Check).length).toBe(1);
    })

    it('should have the correct checkbox label', function(){
        var label = "label";
        const component = shallow(<CheckBox label={label}/>);
        expect(component.find(Form.Label).text()).toEqual(label);
    });

    it('should call changeHandler once onChange', function(){
        const mockHandler = jest.fn();
        const component = shallow(<CheckBox handleChange={mockHandler}/>);
        const input = component.find(Form.Check);
        input.checked = true;
        input.simulate('change');
        expect(mockHandler.mock.calls.length).toBe(1);
    });
})

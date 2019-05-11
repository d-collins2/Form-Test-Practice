import React from 'react';
import renderer from 'react-test-renderer';
import { Form } from 'react-bootstrap'
import { shallow } from 'enzyme';
import CheckBox from '../form/components/Checkbox.js';

describe('<CheckBuox />', function(){

    it('Should render correctly', function(){
        const component = renderer.create(<CheckBox />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should have a single input tag', function(){
        const component = shallow(<CheckBox />);
        expect(component.find(Form.Check).length).toBe(1);
    })

    it('Should have the correct checkbox label', function(){
        const label = "label";
        const component = shallow(<CheckBox label={label}/>);
        expect(component.find(Form.Label).text()).toEqual(label);
    });

    it('Should call changeHandler once onChange', function(){
        const mockHandler = jest.fn();
        const component = shallow(<CheckBox handleChange={mockHandler}/>);
        const input = component.find(Form.Check);
        input.checked = true;
        input.simulate('change');
        expect(mockHandler.mock.calls.length).toBe(1);
    });
})

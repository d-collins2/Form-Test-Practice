import React from 'react';
import renderer from 'react-test-renderer';
import { Form } from 'react-bootstrap'
import { shallow, mount } from 'enzyme';
import TextArea from '../form/components/TextArea';

describe('<TextArea />', function () {
    it('Should render correctly', function () {
        const component = renderer.create(<TextArea />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should have the correct Text Area label', function(){
        const label = "label";
        const component = mount(<TextArea label={label}/>);
        expect(component.find(Form.Label).text()).toEqual(label);
    });

    it('Should call changeHandler onChange on input', function() {
        const mockHandler = jest.fn();
        const event = { target: { value: "sometext" } };
        const component = mount(<TextArea handleChange={mockHandler}/>);

        expect(component.find(Form.Control).simulate("change", event));
        expect(mockHandler.mock.calls.length).toBe(1);
    })
})

import React from 'react';
import renderer from 'react-test-renderer';
import { Form } from 'react-bootstrap'
import { shallow } from 'enzyme';
import Select from '../form/components/Select';

describe('<Select />', function(){
    it('Should render correctly', function() {
        const component = renderer.create(<Select />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Should have one <select>', function() {
        const component = shallow(<Select />);
        expect(component.find(Form.Control).length).toBe(1);
    })

    it('Should have the correct number of default option tags', function(){
        const component = shallow(<Select />);
        expect(component.find('option').length).toEqual(1);
    });


    it('Should be able to select one <option> from drop down', function() {
        const component = shallow(<Select />);
        expect(component.find('option').first().props().overlay);
    })
})

import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from 'react-bootstrap'
import { shallow } from 'enzyme';
import FormButton from '../form/components/Button';

describe('<FormButton />', function () {
    it('Should render correctly', function () {
        const component = renderer.create(<FormButton />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have the correct button label', function(){
        const label = "label";
        const component = shallow(<FormButton label={label}/>);
        expect(component.find(Button).text()).toEqual(label);
    });
})

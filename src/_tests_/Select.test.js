import renderer from 'react-test-renderer';
import Select from '../form/Select';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Select />', function(){

    it('Should render correctly', function() {

        const component = renderer.create(<Select />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    })

    it('Should have one <select>', function() {

        const component = shallow(<Select />);
        expect(component.find('select').length).toBe(1);

    })

})

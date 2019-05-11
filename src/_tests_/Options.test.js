import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Options from '../form/Options.js';

const options = ['1', '2', '3', '4'];
describe('<Options />', function(){
    it('should render correctly', function(){
        const component = renderer.create(<Options options={options}/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have the correct number of option tags', function(){
        const component = mount(<Options options={options} />);
        expect(component.find('option').length).toEqual(4);
    });

})

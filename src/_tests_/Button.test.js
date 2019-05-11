import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from '../form/components/Button';

describe('<Button />', function () {
    it('Should render correctly', function () {
        const component = renderer.create(<Button />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})

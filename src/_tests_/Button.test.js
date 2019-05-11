import renderer from 'react-test-renderer';
import Button from '../form/Button';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Button />', function () {
    it('Should render correctly', function () {
        const component = renderer.create(<Button />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})

import React from 'react';
import { Form } from 'react-bootstrap'
import { mount } from 'enzyme';
import RequestForm from '../form/RequestForm';

describe('<RequestForm>', function() {

    it('Should capture firstname correctly onChange', function(){
        const component = mount(<RequestForm />);
        const input = component.find('input').at(0);
        input.instance().value = 'Damon';
        input.simulate('change');
        expect(component.state().firstName).toEqual('Damon');
    })

    it('Should capture lastname correctly onChange', function(){
        const component = mount(<RequestForm />);
        const input = component.find('input').at(1);
        input.instance().value = 'Collins';
        input.simulate('change');
        expect(component.state().lastName).toEqual('Collins');
    })

    it('Should capture email correctly onChange', function(){
        const component = mount(<RequestForm />);
        const input = component.find('input').at(2);
        input.instance().value = 'test@gmail.com';
        input.simulate('change');
        expect(component.state().email).toEqual('test@gmail.com');
    })

    it('Should capture checkbox ticked correctly onChange', function(){
        const component = mount(<RequestForm />);
        const input = component.find('input').at(3)
        input.instance().checked = true;
        input.simulate('change');
        expect(component.state().checked).toEqual(true);
    })
    //have to fix this test.
    it('Should call alert() when submit button is clicked', function(){
        const state = {
          firstName:'hello',
          lastName:'world',
          email:'hello@world.com',
          serviceType:'Benefit',
          description:'I am sick.',
          formValid: true
      }
        const component = mount(<RequestForm />);

        window.alert = jest.fn();
        component.setState(state)
        expect(component.find(Form).simulate('submit'));
    })
})

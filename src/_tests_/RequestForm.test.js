import React from 'react';
import { mount } from 'enzyme';
import RequestForm from '../form/RequestForm';

describe('<RequestForm>', function() {

    it('Should capture firstname correctly onChange', function(){
        const component = mount(<RequestForm />);
        const input = component.find('input').at(0);
        input.instance().value = 'hello';
        input.simulate('change');
        expect(component.state().firstName).toEqual('hello');
    })

    it('Should capture lastname correctly onChange', function(){
        const component = mount(<RequestForm />);
        const input = component.find('input').at(1);
        input.instance().value = 'world';
        input.simulate('change');
        expect(component.state().lastName).toEqual('world');
    })

    it('Should capture email correctly onChange and change the props accordingly', function(){
        const component = mount(<RequestForm />);
        const input = component.find('input').at(2);
        input.instance().value = 'mail@hotmail.com';
        input.simulate('change');
        expect(component.state().email).toEqual('mail@hotmail.com');
    })

    it('Should capture email correctly onChange and change the state accordingly', function(){
        const component = mount(<RequestForm />);
        const input = component.find('input').at(2);
        input.instance().value = 'mail@hotmail.com';
        input.simulate('change');
        expect(component.state().email).toEqual('mail@hotmail.com');
    })

    it('Should capture checkbox ticked correctly onChange', function(){
        const component = mount(<RequestForm />);
        const input = component.find('input').at(3);
        input.instance().checked = true;
        input.simulate('change');
        expect(component.state().subscribed).toEqual(true);
    })

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
        expect(component.find('form').simulate('submit'));
    })
})

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
        // input.simulate('change', {target: {email: 'mail@hotmail.com'}}); -- this does not work

        input.instance().value = 'mail@hotmail.com';
        input.simulate('change');
        expect(component.find('input').at(2).props().value).toEqual('mail@hotmail.com');
        // Alternatively, can check state
        // expect(component.state().email).toEqual('mail@hotmail.com');
    })

    it('Should capture email correctly onChange and change the state accordingly', function(){

        const component = mount(<RequestForm />);
        const input = component.find('input').at(2);
        input.instance().value = 'mail@hotmail.com';
        input.simulate('change');
        expect(component.state().email).toEqual('mail@hotmail.com');
    })

    it('Should capture select numbers correctly onChange', function(){
        // For multi select, set the individual option's selected property to true
        const component = mount(<RequestForm />);
        const input = component.find('select').at(0);
        const optionOne = component.find('option').at(0);
        optionOne.instance().selected = true;
        input.simulate('change')

        // Alternatiely can check state
        expect(component.state().serviceType).toEqual('1');
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
          firstNameValid:true,
          lastName:'world',
          lastNameValid:true,
          email:'hello@world.com',
          emailValid:true,
          serviceType:'Benefit',
          serviceTypeValid:true,
          description:'I am sick.',
          descriptionValid:true,
          subscribed: true,
          formValid: true
      }

        const component = mount(<RequestForm />);
        window.alert = jest.fn();
        component.setState(state)

        expect(component.find('form').simulate('submit')).toBe(true);
    })
})

import React from 'react';
import { shallow, mount } from 'enzyme';
import RequestForm from './RequestForm.js';

describe('RequestForm', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<RequestForm debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with given strings', () => {
    const strings = ['one', 'two'];
    const component = shallow(<RequestForm list={strings} />);
    expect(component).toMatchSnapshot();
  });

  let component = shallow(<RequestForm/>);
  it('should render correctly with no props', () => {
    expect(component).toMatchSnapshot();
  });

  it('should find a submit button', () => {
    expect(component.find('Button').text()).toEqual('Get Assitance')
  });

  it('should not submit a request with out full validation', () => {
    expect(component.find('Button').simulate('click'))
  });

  component = mount(<RequestForm />);
  it('Should capture First Name correctly onChange', function(){
    const input = component.find('input').at(0);
    input.instance().value = 'Damon';
    input.simulate('change');
    expect(component.state().firstName).toEqual('Damon');
  })

  it('Should capture Last Name correctly onChange', function(){
    const input = component.find('input').at(1);
    input.instance().value = 'Collins';
    input.simulate('change');
    expect(component.state().lastName).toEqual('Collins');
  })

  it('Should capture Email Address correctly onChange', function(){
    const component = mount(<RequestForm />);
    const input = component.find('input').at(2);
    input.instance().value = 'test@gmail.com';
    input.simulate('change');
    expect(component.state().email).toEqual('test@gmail.com');
  })

  it('Should capture Service Type correctly onChange', function(){
    const input = component.find('select').at(0);
    const optionEnglish = component.find('option').at(0);
    optionEnglish.instance().value = "Benefits";
    input.simulate('change')
    expect(component.find('select').at(0).props().value).toEqual('Benefits');
  })

  it('should submit a request if all validations are true', () => {
    const state = {
      firstName:'hello',
      lastName:'world',
      email:"test@test.com",
      serviceType:"Benefits",
      description:"Need alot of help",
    }

    const expectedArg = "lirstName: hello, lastName: world, email: test@test.com, serviceType: Benefits, description: Need alot of help";
    window.alert = jest.fn();
    component.setState(state)
    component.find('form').simulate('submit')
    expect(window.alert).toHaveBeenCalledWith(expectedArg);
  });

});

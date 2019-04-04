import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  }

  // Proceed to the next step
  nextStep = () => {
    // pull 'step' out of state using destructuring
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Return to the previous step
  prevStep = () => {
    // pull 'step' out of state using destructuring
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle fields as they change
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city,
      bio } = this.state;
    const values = {firstName, lastName, email, occupation, city,
      bio };

    // We will have a switch statement instead of a single return statement
    switch(step) {
      case 1:
        return (
          // At step=1, return a FormUserDetails that will take in certain props
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
      return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />
    }


  }
}

export default UserForm;

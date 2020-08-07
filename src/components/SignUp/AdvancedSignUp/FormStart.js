import React, { Component } from 'react';
import FormUserDetails from './FormCredentials.js';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    password:'',
    date_of_birth:'',
    city:'',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { name, email, password, date_of_birth, city } = this.state;
    const values = { name, email, password, date_of_birth, city };

    switch (step) {
      case 1:
        return (
          <FormCredentials
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
          <FormArtistProfile
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return (
        <FormCollaboration
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values} />
        );
        case 5:
        return (<FormConfirmation
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values} />
        );
        case 6:
        return <Success/>;

      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
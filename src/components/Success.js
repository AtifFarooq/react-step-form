import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  continue = (e) => {
    // We want to prevent the default
    e.preventDefault();
    // This is the space where we will process the Form
    // i.e. send the data to an API such as Express or Flask
    this.props.nextStep();
  }

  back = (e) => {
    // We want to prevent the default
    e.preventDefault();
    this.props.prevStep();
  }

  render() {

    return (
      // Wrap everything around the MuiThemeProvider
      <MuiThemeProvider>
        <div>
          <AppBar title="Success!" />
          <h1>Thank you for your submission</h1>
          <p>You will receive an e-mail with further instructions</p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Success;

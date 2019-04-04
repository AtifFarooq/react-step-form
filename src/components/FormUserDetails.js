import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  continue = (e) => {
    // We want to prevent the default
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    // Destructuring to pull out the 'values' and handleChange from the props
    const {values, handleChange} = this.props;
    return (
      // Wrap everything around the MuiThemeProvider
      <MuiThemeProvider>
        <div>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter your first name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br/>
          <TextField
            hintText="Enter your last name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br/>
          <TextField
            hintText="Enter your e-mail address"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br/>
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 50
  }
}

export default FormUserDetails;

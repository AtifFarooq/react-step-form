import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  continue = (e) => {
    // We want to prevent the default
    e.preventDefault();
    this.props.nextStep();
  }

  back = (e) => {
    // We want to prevent the default
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    // Destructuring to pull out the 'values' and handleChange from the props
    const {values, handleChange} = this.props;
    return (
      // Wrap everything around the MuiThemeProvider
      <MuiThemeProvider>
        <div>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter your occupation"
            floatingLabelText="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br/>
          <TextField
            hintText="Enter your city"
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br/>
          <TextField
            hintText="Enter your Bio"
            floatingLabelText="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br/>
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
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

export default FormPersonalDetails;

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
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
    // Destructuring to pull out the 'values' from the props
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
    return (
      // Wrap everything around the MuiThemeProvider
      <MuiThemeProvider>
        <div>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={ firstName }
            />
            <ListItem
              primaryText="Last Name"
              secondaryText={ lastName }
            />
            <ListItem
              primaryText="Email"
              secondaryText={ email }
            />
            <ListItem
              primaryText="Occupation"
              secondaryText={ occupation }
            />
            <ListItem
              primaryText="City"
              secondaryText={ city }
            />
            <ListItem
              primaryText="Bio"
              secondaryText={ bio }
            />
          </List>
          <br/>
          <RaisedButton
            label="Confirm & Continue"
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

export default Confirm;

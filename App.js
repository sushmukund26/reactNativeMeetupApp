import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'

import HomePage from './src/components/HomePage'
import ContactsPage from './src/components/ContactsPage'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="homePage" 
            component={HomePage} 
            title="My Home Page" />
          <Scene 
            rightTitle="Fav"
            onRight={()=> console.log("Hi")}
            key="contactsPage" 
            component={ContactsPage} 
            title="My Contacts Page" />
        </Scene>
      </Router>
    );
  }
}

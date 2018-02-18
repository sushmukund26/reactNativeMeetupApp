import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomePage extends Component {

  onPress() {
      Actions.contactsPage({
        message:"Favorite Contacts"
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.welcome}
          onPress={this.onPress}
          title="Go to contacts page"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  }
});

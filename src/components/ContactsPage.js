import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Switch } from 'react-native';

const contacts = [
  {
    name:'Harry',
    isFavorite: false,
    id:1
  },
  {
    name:'Jack',
    isFavorite: true,
    id:2
  },
  {
    name:'Tom',
    isFavorite: false,
    id:3
  }
]
export default class ContactsPage extends Component {
  constructor() {
    super();
    const users = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      members: users.cloneWithRows(contacts),
      contactList: contacts
    }
  }

  switchValueChange(rowData, value) {
    newDs = this.state.contactList.slice()
    newDs = newDs.map((el) => el.id === rowData.id ? Object.assign({}, 
      el, {isFavorite:value}) : el)
    
    this.setState ({
      members: this.state.members.cloneWithRows(newDs),
      contactList: newDs
    })
  }

  displayFavorites() {
      favoriteMembers = 
      this.state.contactList.filter((el) => el.isFavorite).map((el) => el.name)
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return(
          <ListView 
            style = {styles.favList}
            dataSource = {ds.cloneWithRows(favoriteMembers)}
            renderRow = {(rowData) => <Text>{rowData}</Text>  }
          />
      )
  }

  render() {
    return (
      <View>
        <ListView 
          dataSource = {this.state.members}
          renderRow = {(rowData) => 
            <View style = {styles.viewStyle}>
              <Text>{rowData.name}</Text>
              <Switch style={styles.switchStyle}
                value={rowData.isFavorite}
                onValueChange = {(value) => this.switchValueChange(rowData, value)}/>
            </View>
        }/>
        <View style = {styles.favView}>
          <Text style = {styles.favViewTitle}>{this.props.message}</Text>
          {this.displayFavorites()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection:'row',
    padding: 10,
    borderColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: '#F5FCFF'
  },
  switchStyle: {
    position: 'absolute',
    right: 0
  },
  favView: {
    paddingTop: 40,
    alignItems: 'center'
  },
  favList: {
    paddingTop: 15
  },
  favViewTitle: {
    borderColor: 'black',
    borderBottomWidth: 1,
    fontSize: 22
  }
});

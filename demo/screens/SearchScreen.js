import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SearchBar } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  state: {
    toChange: String,
  }
  
  constructor(props) {
    super(props);
    this.state = {
      toChange: ' ',
    };
  }

  render() {
    return (
        <View>
        <SearchBar
        onChangeText={(toChange) => this.setState({toChange})}
        placeholder='Hello World'/>
        <Text> {' ' + this.state.toChange+ ' '} </Text>
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SearchBar } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (<SearchBar
        placeholder='Hello World'/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

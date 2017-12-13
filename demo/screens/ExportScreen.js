import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { ExpoLinksView } from '@expo/samples';
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';
import '../data/accountData.js'
import { Linking } from 'react-native';

export default class ExportScreen extends React.Component {
  static navigationOptions = {
    title: 'Export as PDF',
  };
  state = {
     filename: '',
     email: ''
  }
  handleFilename = (text) => {
     this.setState({ filename: text })
  }
  handleEmail = (text) => {
     this.setState({ email: text })
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Filename"
          placeholderTextColor = "#808080"
          autoCapitalize = "none"
          onChangeText = {this.handleFilename}/>


        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Recipient"
          placeholderTextColor = "#808080"
          autoCapitalize = "none"
          onChangeText = {this.handleEmail}/>

        <Touchable
          style={styles.optionExport}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressExportBut}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.optionTextContainer, {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'}
            ]}>
              <Text style={styles.optionText}>
                Export
              </Text>
            </View>
          </View>
        </Touchable>

      </View>
    );
  }
  _handlePressExportBut = () => {
      Linking.openURL('mailto:gordonanderson@umass.edu?subject=Dashboard PDF&body=Attached is the dashboard in PDF format');
  };
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 23,
     flex: 1,
     backgroundColor: '#fff',
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#808080',
     borderWidth: 1,
     marginLeft: 40,
     marginRight: 40,
     borderRadius: 7,
     padding: 10
  },
  optionText: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 1,
    color: '#ffffff',
  },
  optionExport: {
      backgroundColor: '#4682b4',
      paddingHorizontal: 15,
      paddingVertical: 15,
      marginBottom: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#EDEDED',
      marginLeft: 80,
      marginRight: 80,
      marginTop: 30,
      borderRadius: 7,
  },

});

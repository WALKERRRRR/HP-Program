import React, {Component} from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';

//TODO Change the titles to be buttons and have it expand. Change the text box to onPress maybe?

const dataUrgent = ['A', 'B']
const dataCaution = ['A', 'B', 'C', 'D', 'E']
const dataNeutral = ['A', 'B', 'C', 'D', 'E', 'F', 'B', 'C', 'D', 'E', 'F', 'B', 'C', 'D', 'E', 'F']
const signUrgent = "+"

export default class SectionListBasics extends Component {
  static navigationOptions = {
    title: 'Alerts',
  };
  render() {
    return (
      <View style={styles.container}>
        <Touchable
          style={styles.optionUrgent}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressCngPass}>
          <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Ionicons name="ios-warning" size={25} color="#ff0000" />
          </View>
            <Text style={styles.titleText}>Urgent Alerts ({dataUrgent.length})</Text>
            <Text style={styles.signText}> ({signUrgent}) </Text>
            </View>
        </Touchable>
        <SectionList style={styles.sectionStyle}
          sections={[
            {data: dataUrgent},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index}
        />


        <Touchable
          style={styles.optionCaution}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressCngPass}>
          <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Ionicons name="ios-warning" size={25} color="#EAEA14" />
          </View>
            <Text style={styles.titleText}>Caution Alerts ({dataCaution.length})</Text>
            <Text style={styles.signText}> ({signUrgent}) </Text>
          </View>
        </Touchable>
        <SectionList style={styles.sectionStyle}
          sections={[
            {data: dataCaution},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index}
        />

        <Touchable
          style={styles.optionNeutral}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressCngPass}>
          <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Ionicons name="ios-warning" size={25} color="#00FF00" />
          </View>
          	<Text style={styles.titleText}>Neutral Alerts ({dataNeutral.length})</Text>
          	<Text style={styles.signText}> ({signUrgent}) </Text>
          </View>
        </Touchable>
        <SectionList style={styles.sectionStyle}
          sections={[
            {data: dataNeutral},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  sectionStyle:{
    minHeight: 50,
  },
  titleText:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44,
  },
  optionUrgent: {
    backgroundColor: '#EDEDED',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionCaution: {
    backgroundColor: '#EDEDED',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionNeutral: {
      backgroundColor: '#EDEDED',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionIconContainer: {
    marginRight: 9,
  },
  signText: {
    paddingHorizontal: 175,
    textAlign: 'right',
    fontSize: 15
  }
})


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);

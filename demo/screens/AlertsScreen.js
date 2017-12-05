import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';
import PushNotificationAndroid from 'react-native-push-notification';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'Urgent Alerts', data: ['A', 'B', 'C', 'D', 'E', 'F', 'B', 'C', 'D', 'E', 'F', 'B', 'C', 'D', 'E', 'F']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeaderUrgent}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <SectionList
          sections={[
            {title: 'Caution Alerts', data: ['A', 'B', 'C', 'D', 'E', 'F', 'B', 'C', 'D', 'E', 'F', 'B', 'C', 'D', 'E', 'F']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeaderCaution}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <SectionList
          sections={[
            {title: 'Neutral Alerts', data: ['A', 'B', 'C', 'D', 'E', 'F', 'B', 'C', 'D', 'E', 'F', 'B', 'C', 'D', 'E', 'F']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeaderNeutral}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop: 22
  },
  sectionHeaderUrgent: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,24,24,1.0)',
  },
  sectionHeaderCaution: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,24,1.0)',
  },
  sectionHeaderNeutral: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(24,247,24,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);

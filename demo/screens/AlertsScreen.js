import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  static navigationOptions = {
    title: 'Alerts',
  };
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.urgentTitle}>
            <Text style={styles.titleText}>Urgent Alerts</Text>
          </View>
        <SectionList style={styles.sectionStyle}
          sections={[
            {data: ['A']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index}
        />

        <View style={styles.cautionTitle}>
            <Text style={styles.titleText}>Caution Alerts</Text>
        </View>
        <SectionList style={styles.sectionStyle}
          sections={[
            {data: ['A', 'B', 'C', 'D', 'E']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index}
        />
      
        <View style={styles.neutralTitle}>
          <Text style={styles.titleText}>Neutral Alerts</Text>
        </View>
        <SectionList style={styles.sectionStyle}
          sections={[
            { data: ['A', 'B', 'C', 'D', 'E', 'F', 'B', 'C', 'D', 'E', 'F', 'B', 'C', 'D', 'E', 'F']},
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
  urgentTitle: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    backgroundColor: 'red',
  },
  titleText:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  cautionTitle: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    backgroundColor: 'rgba(247,247,24,1.0)',
  },
  neutralTitle: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
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

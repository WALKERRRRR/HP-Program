import React, {Component} from 'react';
import { AppRegistry, Alert, SectionList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';

//TODO Change the titles to be buttons and have it expand. Change the text box to onPress maybe?

const dataUrgent = ['A', 'B']
const dataCaution = ['A', 'B', 'C', 'D', 'E']
const dataNeutral = ['A', 'B', 'C', 'D', 'E', 'F', 'B', 'C', 'D', 'E', 'F', 'B', 'C', 'D', 'E', 'F']
var signUrgent = "+"
var signCaution = "+"
var signNeutral = "+"
var heightUrgent = "0"
var widthUrgent = "0"
var hidden = "0"

export default class SectionListBasics extends Component {
  static navigationOptions = {
    title: 'Alerts',
  };
  constructor() {
   super()
   this.state = {
      signUrgent: '+',
      signCaution: '+',
      signNeutral: '+',
      heightUrgent: '0',
      widthUrgent: '0',
      hidden: "0", //0 is false, 1 is true
   }
 }

  render() {
    return (
      <View style={styles.container}>
        <Touchable
          style={styles.optionUrgent}
          background={Touchable.Ripple('#ea4355', true)}
          onPress={() => {
            if(signUrgent === "+"){
              signUrgent = "-";
              this.setState({signUrgent: "-"})
              this.setState({status:!this.state.status});
            }
            else if(signUrgent === "-"){
              signUrgent = "+";
              this.setState({signUrgent: "+"})
              this.setState({status:this.state.status});
            }
          }}>
          <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Ionicons name="ios-warning" size={25} color="#ea4355" />
          </View>
            <Text style={styles.titleText}>Urgent Alerts ({dataUrgent.length})</Text>
            <Text style={styles.signText}> ({signUrgent}) </Text>
            </View>
        </Touchable>
        <View style={urgentHider()}>
        <SectionList style={styles.sectionStyle}
          sections={[
            {data: dataUrgent},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index}
        />
        </View>

        <Touchable
          style={styles.optionCaution}
          background={Touchable.Ripple('#fbbc05', true)}
          onPress={() => {
            if(signCaution === "+"){
              signCaution = "-";
              this.setState({signCaution: "-"})
            }
            else if(signCaution === "-"){
              signCaution = "+";
              this.setState({signCaution: "+"})
            }
          }}>
          <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Ionicons name="ios-warning" size={25} color="#fbbc05" />
          </View>
            <Text style={styles.titleText}>Caution Alerts ({dataCaution.length})</Text>
            <Text style={styles.signText}> ({signCaution}) </Text>
          </View>
        </Touchable>
        <View style={cautionHider()}>
        <SectionList style={styles.sectionStyle}
          sections={[
            {data: dataCaution},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index}
        />
        </View>
        <Touchable
          style={styles.optionNeutral}
          background={Touchable.Ripple('#34a853', true)}
          onPress={() => {
            if(signNeutral === "+"){
              signNeutral = "-";
              this.setState({signNeutral: "-"})
            }
            else if(signNeutral === "-"){
              signNeutral = "+";
              this.setState({signNeutral: "+"})
            }
          }}>
          <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Ionicons name="ios-warning" size={25} color="#34a853" />
          </View>
          	<Text style={styles.titleText}>Neutral Alerts ({dataNeutral.length})</Text>
          	<Text style={styles.signText}> ({signNeutral}) </Text>
          </View>
        </Touchable>
        <View style={neutralHider()}>
        <SectionList style={styles.sectionStyle}
          sections={[
            {data: dataNeutral},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
      </View>
    );
  }
}

urgentHider = function() {
   return {
     height: hideUrgent(),
   }
 }

function hideUrgent(){
  if(signUrgent === "+"){
  return 0
  }
  else{
    return 200;
  }
}

cautionHider = function() {
   return {
     height: hideCaution(),
   }
 }

function hideCaution(){
  if(signCaution === "+"){
  return 0
  }
  else{
    return 200;
  }
}

neutralHider = function() {
   return {
     height: hideNeutral(),
   }
 }

function hideNeutral(){
  if(signNeutral === "+"){
  return 0;
  }
  else{
    return 200;
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  sectionStyle:{
    flex:1,
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
    flex:1,
    alignItems: 'flex-end',
    fontSize: 18,
  },
  hide:{
    height:0,
    width: 0,
  }
})


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);

import React, { Component } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import SortableList from 'react-native-sortable-list';
import { WebBrowser } from 'expo';
import '../data/accountData.js';
import '../data/data.js';
import '../data/dashlets.js';
//import {listData} from './HomeScreen.js';
import SystemScreen from './SystemScreen'
import './HomeScreen'


const window = Dimensions.get('window');
global.systemindex = 0;
//var listData = global.listData;

var systemData = {};
var count = 0;
// Object.keys(global.data).forEach(function(key) {
while (count<20){
  if(global.data[count]['includeInAggregate']){
      tempDict = {};
      tempDict["text"] = global.data[count]['systemName'];
      tempDict["id"] = 0;
      tempDict["active"] = true;
      tempDict["test"] = 1;

      systemData[count] = tempDict;
      count++;
    }
}
// });


export default class ConfigScreen extends Component {
  static navigationOptions = {
    title: 'Dashboard Configuration',
  };
  render() {
    console.log(global.listData);
    var listData = global.listData;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Dashlets</Text>
        </View>
        <SortableList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={listData}
          renderRow={this._renderRow}
          onPressRow={this._displayModal}/>


          <View style={styles.titleContainer}>
          <Text style={styles.title}>System List</Text>
          </View>
          <SortableList
            style={styles.list}
            contentContainerStyle={styles.contentContainer}
            data={systemData}
            renderRow={this._renderRow}
            onPressRow={this._displayModal2}/>

      </View>

    );
  }
  _displayModal2 = (key) => {
    const { navigate } = this.props.navigation;
    global.systemindex = key;
    navigate('System', {systemindex: key});
    //return <SystemScreen navigation = {this.props.navigation} systemindex = {key}/>
  }
  _displayModal = (key) => {
    return
  }
  _renderRow = ({ data, active, key, updateFunc }) => {
    return <RemovableRow data={data} active={active} key={key} updateFunc={updateFunc}/>
  }
}

class RemovableRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
        activeRowKey: null,
        visibleModal: false,
        deleteModal: false,
    }

    this._active = new Animated.Value(0);

    this._style = {
      ...Platform.select({
        ios: {
          transform: [{
            scale: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.1],
            }),
          }],
          shadowRadius: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 10],
          }),
        },

        android: {
          transform: [{
            scale: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.07],
            }),
          }],
          elevation: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 6],
          }),
        },
      })
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      Animated.timing(this._active, {
        duration: 300,
        easing: Easing.bounce,
        toValue: Number(nextProps.active),
      }).start();
    }
  }

  render() {
    const { data, active } = this.props;

    return (
      <Animated.View style={[
        styles.row,
        this._style,
      ]}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <Text style={styles.text}>{data.text}</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',

    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
    }),
  },

  title: {
    fontSize: 25,
    //paddingVertical: 10,
    color: '#222222',
  },

  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentContainer: {
    width: window.width,

    ...Platform.select({
      ios: {
        paddingHorizontal: 30,
      },

      android: {
        paddingHorizontal: 0,
      }
    })
  },

  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    height: 50,
    flex: 1,
    marginTop: 3,
    marginBottom: 3,
    borderRadius: 4,


    ...Platform.select({
      ios: {
        width: window.width - 30 * 2,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: { height: 2, width: 2 },
        shadowRadius: 2,
      },

      android: {
        width: window.width - 30 * 2,
        elevation: 0,
        marginHorizontal: 30,
      },
    })
  },

  image: {
    width: 20,
    height: 20,
    position: "absolute",
    bottom: 13,
    right: 10,
  },

  text: {
    fontSize: 16,
    color: '#222222',
  },
});

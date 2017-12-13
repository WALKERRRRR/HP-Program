/**
 * Sample React Native App
 * httpss://github.com/facebook/react-native
 * @flow
 *
 *
 * TODO
 *
 * Dashboard:
 * Popup (Modal) on click on a dashlet - contains aggregate graphs and data
 * Delete dashlet from dashboard
 * add dashlet from template (+ in bottom right OR on bottom of dashboard)
 *
 * Dashlet:
 * Aggregates
 *  - count (group)
 *  - total storage
 *  - average disk space
 * Can be swiped left to reveal remove button.
 *
 * Favorite systems list represented somehow - list of systems that dashboards aggregate to.
 * These are systems that the aggregates talk about.
 */

import React, { Component } from 'react';
import {
  Animated,
  Easing,
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { WebBrowser } from 'expo';
import CustomMultiPicker from '../components/react-native-multiple-select-list/multipleSelect.js';
import SortableList from '../components/my-sortable-list/src/SortableList.js';
import Swipeout from '../components/my-swipeout/dist/index.js'
import Modal from '../components/react-native-modal/src/index.js'

const window = Dimensions.get('window')

const userList = {
  "123":"Tom",
  "124":"Michael",
  "125":"Christin"
}

// listData will be where the system data is organized.
// listData will be where the system data is organized.
const listData = {
  0: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[0]['systemName'],
    id: 0,
    active: true,
    test : 1,
    lastUpdate: global.data[0]['updated'],
    model: global.data[0]['model'],
    percentAva: global.data[0]['capacity.total.freePct'],
    totalAva:global.data[0]['capacity.total.freeTiB'],
    readSpeed: global.data[0]['performance.summary.portInfo.readServiceTimeMillis'],
    writeSpeed: global.data[0]['performance.summary.portInfo.writeServiceTimeMillis'],      
  },
  1: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[0]['systemName'],
    id: 1,
    active: true,
          test : 1,
          lastUpdate: global.data[1]['updated'],
    model: global.data[1]['model'],
    percentAva: global.data[1]['capacity.total.freePct'],
    totalAva:global.data[1]['capacity.total.freeTiB'],
    readSpeed: global.data[1]['performance.summary.portInfo.readServiceTimeMillis'],
    writeSpeed: global.data[1]['performance.summary.portInfo.writeServiceTimeMillis'],  

  },
  2: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[2]['systemName'],
    id: 2,
    active: true,
    test : 1,
    lastUpdate: global.data[2]['updated'],
    model: global.data[2]['model'],
    percentAva: global.data[2]['capacity.total.freePct'],
    totalAva:global.data[2]['capacity.total.freeTiB'],
    readSpeed: global.data[2]['performance.summary.portInfo.readServiceTimeMillis'],
    writeSpeed: global.data[2]['performance.summary.portInfo.writeServiceTimeMillis'],  

  },
  3: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[3]['systemName'],
    id: 3,
    active: true,          
    test : 1,
    lastUpdate: global.data[3]['updated'],
    model: global.data[3]['model'],
    percentAva: global.data[3]['capacity.total.freePct'],
    totalAva:global.data[3]['capacity.total.freeTiB'],
    readSpeed: global.data[3]['performance.summary.portInfo.readServiceTimeMillis'],
    writeSpeed: global.data[3]['performance.summary.portInfo.writeServiceTimeMillis'],  

  },
  4: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[4]['systemName'],
    id: 4,
    active: true,
                test : 1,
          lastUpdate: global.data[4]['updated'],
    model: global.data[4]['model'],
    percentAva: global.data[4]['capacity.total.freePct'],
    totalAva:global.data[4]['capacity.total.freeTiB'],
    readSpeed: global.data[4]['performance.summary.portInfo.readServiceTimeMillis'],
    writeSpeed: global.data[4]['performance.summary.portInfo.writeServiceTimeMillis'],  

  },
  5: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[5]['systemName'],
    id: 5,
    active: true,
    test : 1,
    lastUpdate: global.data[5]['updated'],
    model: global.data[5]['model'],
    percentAva: global.data[5]['capacity.total.freePct'],
    totalAva:global.data[5]['capacity.total.freeTiB'],
    readSpeed: global.data[5]['performance.summary.portInfo.readServiceTimeMillis'],
    writeSpeed: global.data[5]['performance.summary.portInfo.writeServiceTimeMillis'],  

  },
  6: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[6]['systemName'],
    id: 6,
    active: true,
    test : 0,
    lastUpdate: global.data[6]['updated'],
    model: global.data[6]['model'],
    percentAva: global.data[6]['capacity.total.freePct'],
    totalAva:global.data[6]['capacity.total.freeTiB'],
    readSpeed: global.data[6]['performance.summary.portInfo.readServiceTimeMillis'],
    writeSpeed: global.data[6]['performance.summary.portInfo.writeServiceTimeMillis'],  

  },
  7: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[7]['systemName'],
    id: 7,
    active: true,
    test : 0,
    lastUpdate: global.data[7]['updated'],
    model: global.data[7]['model'],
    percentAva: global.data[7]['capacity.total.freePct'],
    totalAva:global.data[7]['capacity.total.freeTiB'],
    readSpeed: global.data[7]['performance.summary.portInfo.readServiceTimeMillis'],
    writeSpeed: global.data[7]['performance.summary.portInfo.writeServiceTimeMillis'],  

  },
};

export default class Dashboard extends Component {  
  static navigationOptions = {
    title: 'Dashboard',
  };

  state = {
        activeRowKey: null,
        addDashlet: false,
        toAdd: null,
  };
  
  // Button to Add Dashlets to the Board
  _renderAddButton = (onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.addButton}>
        <Text style={styles.text}>Add new system</Text>
      </View>
    </TouchableOpacity>
  );

  _getInactiveDashlet() {
      temp = {}
      for (x in listData) {
          if (listData[x]['active'] == false) {
              temp[x] = listData[x]['id'] + ": " + listData[x]['text']
          }
      }
      return temp;
  }

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={{height: 50, alignSelf: 'stretch', backgroundColor: 'powderblue',borderRadius: 2, alignItems: 'center'}}>
        <Text style={styles.text}>Select Dashlets to Add</Text>
      </View>
      <View style={{alignSelf: 'stretch', height: 200}}>
      <CustomMultiPicker
          options={this._getInactiveDashlet()}
          search={false} // dont show search bar
          multiple={true} // can select multiple
          returnValue={"key"} // label or value
          callback={(res)=>{ this.setState({toAdd: res}) }} //set toAdd in the state
          rowBackgroundColor={"#eee"}
          rowHeight={40}
          rowRadius={5}
          iconColor={"#00a2dd"}
          iconSize={30}
          selectedIconName={"ios-checkmark-circle-outline"}
          unselectedIconName={"ios-radio-button-off-outline"}
          scrollViewHeight={100}
          selected={[]}
        />
        </View>
        <View style={{backgroundColor: 'lightgrey', alignSelf: 'stretch', borderRadius: 2}}>
          {this._renderButton({text: 'Add'}, () => this._addDashletHelper())}       
          {this._renderButton({text: 'Cancel'}, () => this.setState({ addDashlet: false, toAdd: null }))}
        </View>
    </View>
  );
                    
  // Sets selected dashlets to active
  // Then forces an update
  _addDashletHelper() {
    toAdd = this.state.toAdd;
    for (var i = 0; i < toAdd.length; i++) {
        listData[toAdd[i]]['active'] = true;
    }
    // Turn off the add dashlet modal and clear toAdd
    this.setState({ addDashlet: false, toAdd: null });
    // force update :(
    this.forceUpdate()
  }

  // 
  _renderButton = (data, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </TouchableOpacity>
  );


  render() {
    return (
      <View style={styles.container}>

        <SortableList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={listData}
          renderRow={this._renderRow}/>
        {this._renderAddButton(() => this.setState({ addDashlet: true }))}
        <Modal isVisible={this.state.addDashlet === true}>{this._renderModalContent()}
        </Modal>
      </View>
    );
  }
  
  _renderRow = ({ data, active, key, updateFunc }) => {
    return <RemovableRow data={data} active={active} key={key} updateFunc={updateFunc}/>
  }

  _openAggregatePage = (aggregate) => {
    // TODO: Open aggregate page and display this aggregate
    return (
      <AggregateScreen />
    );
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

  _renderButton1 = (data, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.text1}>
        <Text style={styles.text}>{data.id + ": " + data.text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderButton = (data, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </TouchableOpacity>
  );


  _renderModalContent = (data) => (
    <View style={styles.modalContent}>
      <Text style = {styles.text1}>{'Last Update Time: '}</Text>
      <Text style = {styles.text1}>{data.lastUpdate}</Text>
      <Text style = {styles.text1}>{'System Model: '+ data.model}</Text>
      <Text style = {styles.text1}>{'Storage Available: '+ Math.round(data.percentAva*10)/10 + "%"}</Text>
      <Text style = {styles.text1}>{'Total Storage Available: '+ Math.round(data.totalAva*10)/10 + "TiB"}</Text>
      <Text style = {styles.text1}>{'Average Write Speed: '+ Math.round(data.writeSpeed*10)/10+ ' mills'}</Text>
      <Text style = {styles.text1}>{'Average Read Speed: '+ Math.round(data.readSpeed*10)/10 + ' mills'}</Text>
      {this._renderButton({text: 'Close'}, () => this.setState({ visibleModal: null }))}
    </View>
  );

  _renderCloseWindow = (data, updateFunc) => (
    <View style={styles.modalContent}>
      <Text>Remove Dashlet?</Text>
      <View style={{width: 100, height: 50}}>
            {this._renderButton({text: 'Yes'}, () => this._onRemove(data, updateFunc))}
            {this._renderButton({text: 'No'}, () => this.setState({ deleteModal: false }))}
      </View>
    </View>
  );

  _onRemove (data, updateFunc) {
      this.setState({deleteModal: false});
      data['active'] = false;
      updateFunc();
  }

  render() {
    const { data, active, key, updateFunc } = this.props;
      
    const swipeSettings = {
        autoClose: true,
        onClose: (secId, rowId, direction) => {
            this.setState({activeRowKey: null});
        },
        onOpen: (secId, rowId, direction) => {
            this.setState({activeRowKey: null });
        },
        right: [
            {
                onPress: () => {
                    this.setState({deleteModal: true})
                },
                text: 'X', type: 'delete'
            }
        ]
    }

    return (
      <Animated.View style={[styles.row,this._style]}>
        <View style={styles.rowLeft}>
            <Image source={{ uri: data.image }} style={styles.image} />
            {this._renderButton1(data, () => this.setState({ visibleModal: 1 }))}
            <Modal isVisible={this.state.visibleModal === 1}>{this._renderModalContent(data)}</Modal>
            <Modal isVisible={this.state.deleteModal === true}>{this._renderCloseWindow(data, updateFunc)}</Modal>
        </View>
        <Swipeout {...swipeSettings}>
            <View style={styles.rowRight}>
                <Text style={styles.text}></Text>
            </View>
        </Swipeout>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },

  title: {
    fontSize: 20,
    paddingVertical: 20,
    color: '#999999',
  },

  list: {
    flex: 1,
  },

  contentContainer: {
    width: window.width,
  },
    
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'lightblue'
  },
  addButton: {
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: 'lightblue',
  },
    
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
  },
    
  modalImage1: {
    width: 200,
    height: 200,
    marginRight: 30,
    borderRadius: 25,
    borderColor: 'red',
    borderWidth: 2,
  },
  modalImage: {
    width: 200,
    height: 200,

  },
    
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 80,
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginTop: 3,
    marginBottom: 3,
    width: window.width,
  },
    
  rowLeft: {
    paddingLeft: 20,
    width: window.width - 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  
  rowRight: {
    width: 100,
    height: 78,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  image: {
    width: 50,
    height: 50,
    marginRight: 30,
    borderRadius: 25,
  },

  text: {
    fontSize: 20,
    color: '#222222',
  },

  text1: {
    fontSize: 20,
    color: '#222222',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => Dashboard);
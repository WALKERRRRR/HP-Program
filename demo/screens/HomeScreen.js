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
import Swipeout from '../components/my-swipeout/dist/index.js';
import Modal from '../components/react-native-modal/src/index.js';
import DashletManager from '../components/dashboard/DashletManager.js';
//import '../data/accountData.js';

const window = Dimensions.get('window');

var DashManager = new DashletManager({});

export default class Dashboard extends Component {  
    
  static navigationOptions = {
    title: 'Dashboard',
  };

  state = {
        activeRowKey: null,
        addDashlet: false,
        toAdd: null,
        manager: new DashletManager([]),
  };
  
  // Button to Add Dashlets to the Board
  _renderAddButton = (onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.addButton}>
        <Text style={styles.text}>Add new system</Text>
      </View>
    </TouchableOpacity>
  );

  // Function to render the Add Dashlet Window
  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={{height: 50, alignSelf: 'stretch', backgroundColor: 'powderblue',borderRadius: 2, alignItems: 'center'}}>
        <Text style={styles.text}>Select Dashlets to Add</Text>
      </View>
      <View style={{alignSelf: 'stretch', height: 200}}>
      <CustomMultiPicker
          options={this.state.manager._getInactiveDashlets()}
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
                    
  // Updates the data in the dashlets
  _updateDashlets(data) {
    // TODO: implement me!
  }
                    
  // Sets selected dashlets to active
  // Then forces an update
  _addDashletHelper() {
    // Call the helper function in the dashlet manager
    this.state.manager._setActiveDashlets(this.state.toAdd)
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
          data={this.state.manager._getDashlets()}
          renderRow={this._renderRow}/>
        {this._renderAddButton(() => this.setState({ addDashlet: true }))}
        <Modal isVisible={this.state.addDashlet === true}>{this._renderModalContent()}
        </Modal>
      </View>
    );
  }
  
  _renderRow = ({ dashlet, active, key, updateFunc }) => {
    return <RemovableRow dashlet={dashlet} active={active} key={key} updateFunc={updateFunc}/>
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

  _renderButton = (data, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </TouchableOpacity>
  );


  _renderModalContent = (dashlet) => (
    <View style={styles.modalContent}>
      <Image source={ require('../images/ds.jpg')} style={styles.modalImage} />
      <Text>total Storage avalible</Text>
      {this._renderButton({text: 'Close'}, () => this.setState({ visibleModal: false }))}
    </View>
  );

  _renderCloseWindow = (dashlet, updateFunc) => (
    <View style={styles.modalContent}>
      <Text>Remove Dashlet?</Text>
      <View style={{width: 100, height: 50}}>
            {this._renderButton({text: 'Yes'}, () => this._onRemove(dashlet, updateFunc))}
            {this._renderButton({text: 'No'}, () => this.setState({ deleteModal: false }))}
      </View>
    </View>
  );

  _onRemove (dashlet, updateFunc) {
      this.setState({deleteModal: false});
      dashlet._setAsInactive();
      updateFunc();
  }

  render() {
    const { dashlet, active, key, updateFunc } = this.props;
      
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
            <dashlet.view/>
            {this._renderButton(dashlet, () => this.setState({ visibleModal: 1 }))}
            <Modal isVisible={this.state.visibleModal === 1}>{this._renderModalContent(dashlet)}</Modal>
            <Modal isVisible={this.state.deleteModal === true}>{this._renderCloseWindow(dashlet, updateFunc)}</Modal>
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
    fontSize: 24,
    color: '#222222',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => Dashboard);
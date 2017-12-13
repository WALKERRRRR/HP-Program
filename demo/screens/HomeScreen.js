@@ -1,126 +1,139 @@
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
import SortableList from 'react-native-sortable-list';
import SortableList from '../components/my-sortable-list/src/SortableList.js';
import { WebBrowser } from 'expo';
import '../data/data.js'
import '../data/dashlets.js'

const window = Dimensions.get('window')
import Swipeout from '../components/my-swipeout/dist/index.js'
import Modal from 'react-native-modal'
import '../data/data.js';


// listData will be where the system data is organized.
const listData = {
  0: {
    image: 'https://placekitten.com/200/240',
    text: "Average Disk Size",
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[0]['systemName'],
    id: 0,
    active: true,
  },
  1: {
    image: 'https://placekitten.com/200/201',
    text: "Total Storage Space",
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[0]['systemName'],
    id: 1,
    active: true,
  },
  2: {
    image: 'https://placekitten.com/200/202',
    text: "Total Number of Disks",
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[2]['systemName'],
    id: 2,
    active: true,
  },
  3: {
    image: 'https://placekitten.com/200/203',
    text: ""
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[3]['systemName'],
    id: 3,
    active: true,
  },
  4: {
    image: 'https://placekitten.com/200/204',
    text: ""
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[4]['systemName'],
    id: 4,
    active: true,
  },
  5: {
    image: 'https://placekitten.com/200/205',
    text: ""
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[5]['systemName'],
    id: 5,
    active: true,
  },
  6: {
    image: 'https://placekitten.com/200/210',
    text: 'Kiki',
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[6]['systemName'],
    id: 6,
    active: true,
  },
  7: {
    image: 'https://placekitten.com/200/215',
    text: 'Smokey',
  },
  8: {
    image: 'https://placekitten.com/200/220',
    text: 'Gizmo',
  },
  9: {
    image: 'https://placekitten.com/220/239',
    text: 'Kitty',
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[7]['systemName'],
    id: 7,
    active: true,
  },
};

const window = Dimensions.get('window');

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };

  state = {
        activeRowKey: null,
        visibleModal: null,
        deleteModal: false,
        refresh: 1,
  };
  _renderButton = (data, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderButton1 = (onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.addButton}>
        <Text style={styles.text}>Add new system</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent1 = () => (
    <View style={styles.modalContent}>
      <Text>No system avaliable</Text>
      {this._renderButton({text: 'Cancel'}, () => this.setState({ visibleModal: null }))}
    </View>
  );

export default class Basic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Systems Dashboard</Text>

        <SortableList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={listData}
          order={global.dashletOrder}
          sortingEnabled = {true}
          toggleRowActive = {true}
          renderRow={this._renderRow}
          onPressRow={this._renderModalContent}
        />
          renderRow={this._renderRow}/>
        {this._renderButton1(() => this.setState({ visibleModal: 1 }))}
        <Modal isVisible={this.state.visibleModal === 1}>{this._renderModalContent1()}
        </Modal>
      </View>
    );
  }

  _openAggregatePage = (aggregate) => {
    // TODO: Open aggregate page and display this aggregate
    return (
      <AggregateScreen />
    );
  }

  _renderRow = ({ data, active }) => {
    return <Row data={data} active={active} />
  _renderRow = ({ data, active, key }) => {
    return <RemovableRow data={data} active={active} key={key}/>
  }
}

class Row extends Component {

class RemovableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
        activeRowKey: null,
    }

    this._active = new Animated.Value(0);

@ -164,34 +177,86 @@ class Row extends Component {
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


  _renderModalContent = (data) => (
    <View style={styles.modalContent}>
      <Image source={ require('../images/ds.jpg')} style={styles.modalImage} />
      <Text>total Storage avalible</Text>
      {this._renderButton({text: 'Close'}, () => this.setState({ visibleModal: null }))}
    </View>
  );

  _renderCloseWindow = (data, temp) => (
    <View style={styles.modalContent}>
      <Text>Remove Dashlet?</Text>
      <View style={{width: 100, height: 50}}>
            {this._renderButton({text: 'Yes'}, () => this._onRemove(data, temp))}
            {this._renderButton({text: 'No'}, () => this.setState({ deleteModal: false }))}
      </View>
    </View>
  );

  _onRemove (data, temp) {
      this.setState({deleteModal: false});
      data['active'] = false;
  }

  render() {
    const { data, active } = this.props;
    const { data, active, temp } = this.props;

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
                    // data['active'] = false;
                    this.setState({deleteModal: true})
                },
                text: 'X', type: 'delete'
            }
        ]
    }

    return (
      <Animated.View style={[
        styles.row,
        this._style,
      ]}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <Text style={styles.text}>{data.text}</Text>
     <Animated.View style={[styles.row,this._style]}>
        <View style={styles.rowLeft}>
            <Image source={{ uri: data.image }} style={styles.image} />
            {this._renderButton(data, () => this.setState({ visibleModal: 1 }))}
            <Modal isVisible={this.state.visibleModal === 1}>{this._renderModalContent(data)}</Modal>
            <Modal isVisible={this.state.deleteModal === true}>{this._renderCloseWindow(data, temp)}</Modal>
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

    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
    }),
  },

  title: {
@ -206,45 +271,68 @@ const styles = StyleSheet.create({

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
    padding: 16,
    height: 80,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
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
@ -255,7 +343,9 @@ const styles = StyleSheet.create({
  },

  text: {
    fontSize: 18,
    fontSize: 24,
    color: '#222222',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => Dashboard);

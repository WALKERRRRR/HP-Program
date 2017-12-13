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
import SortableList from '../components/my-sortable-list/src/SortableList.js';
import { WebBrowser } from 'expo';
import Swipeout from '../components/my-swipeout/dist/index.js'
import Modal from 'react-native-modal'
import '../data/data.js';


// listData will be where the system data is organized.
const listData = {
  0: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[0]['systemName'],
    id: 0,
    active: true,
  },
  1: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[0]['systemName'],
    id: 1,
    active: true,
  },
  2: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[2]['systemName'],
    id: 2,
    active: true,
  },
  3: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[3]['systemName'],
    id: 3,
    active: true,
  },
  4: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[4]['systemName'],
    id: 4,
    active: true,
  },
  5: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[5]['systemName'],
    id: 5,
    active: true,
  },
  6: {
    image: 'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png',
    text: global.data[6]['systemName'],
    id: 6,
    active: true,
  },
  7: {
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

  render() {
    return (
      <View style={styles.container}>

        <SortableList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={listData}
          renderRow={this._renderRow}/>
        {this._renderButton1(() => this.setState({ visibleModal: 1 }))}
        <Modal isVisible={this.state.visibleModal === 1}>{this._renderModalContent1()}
        </Modal>
      </View>
    );
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


  _renderModalContent = (data) => (
    <View style={styles.modalContent}>
      <Image source={ require('../images/ds.jpg')} style={styles.modalImage} />
      <Text>total Storage avalible</Text>
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
            {this._renderButton(data, () => this.setState({ visibleModal: 1 }))}
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
    fontSize: 24,
    color: '#222222',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => Dashboard);
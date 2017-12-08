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
import '../data/data.js';

const window = Dimensions.get('window');

// listData will be where the system data is organized.
const listData = {
  0: {
    text: global.data[0]['companyName'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png',
  },
  1: {
    text: global.data[0]['systemName'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png',
  },
  2: {
    text: global.data[2]['companyName'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png',
  },
  3: {
    text: global.data[3]['companyName'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png',
  },
  4: {
    text: global.data[4]['companyName'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png',
  },
  5: {
    text: global.data[5]['companyName'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png',
  },
};
const systemData = {
  0: {
    text: global.data[0]['companyName'],
  },
  1: {
    text: global.data[0]['systemName'],
  },
  2: {
    text: global.data[2]['companyName'],
  },
  3: {
    text: global.data[3]['companyName'],
  },
  4: {
    text: global.data[4]['companyName'],
  },
  5: {
    text: global.data[5]['companyName'],
  },
};

export default class ConfigScreen extends Component {
  static navigationOptions = {
    title: 'Dashboard Configuration',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Dashlets</Text>
        <Image
          source={{ uri: 'http://clipart-library.com/images/8T65jX9Gc.png' }}
          resizeMode="contain"
          fadeDuration={0}
          style={{ width: 30, height: 30, marginTop: 1, position: "absolute", bottom: 10, right: 30}}
        />
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
            onPressRow={this._displayModal}/>

      </View>

    );
  }
  _displayModal = (key) => {
    return
  }
  _renderRow = ({ data, active }) => {
    return <Row data={data} active={active} />
  }
}

class Row extends Component {

  constructor(props) {
    super(props);

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
    // alignSelf: 'flex-end',
    // justifyContent: 'center',
    // alignItems: 'center',
    position: "absolute",
    bottom: 13,
    right: 10,
  },

  text: {
    fontSize: 16,
    color: '#222222',
  },
});

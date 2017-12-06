import React from 'react';
import { ScrollView, StyleSheet, SectionList, Image, Text, View  } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Constants } from 'expo';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };


  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
        <View style={styles.titleIconContainer}>
            <Image
              source={{ uri: 'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png' }}
              style={{ width: 128, height: 128 }}
              resizeMode="cover"
            />
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.titleTextContainer}>
            <View style={styles.centerText}>
              <Text style={styles.nameText} numberOfLines={1}>
                {"Username"}
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressConfig}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={{ uri: 'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png' }}
                  resizeMode="contain"
                  fadeDuration={0}
                  style={{ width: 20, height: 20, marginTop: 1 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  Dashboard Configuration
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            background={Touchable.Ripple('#ccc', false)}
            style={styles.option}
            onPress={this._handlePressExport}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={{ uri: 'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png' }}
                  fadeDuration={0}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  Dashboard Export
                </Text>
              </View>
            </View>
          </Touchable>


          <Touchable
            style={styles.optionLogout}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressLogout}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  Logout
                </Text>
              </View>
            </View>
          </Touchable>

        </View>
      </View>
    </ScrollView>
    );


    _handlePressConfig = () => {
      Expo.WebBrowser.openBrowserAsync('https://slack.expo.io');
    };

    _handlePressExport = () => {
      WebBrowser.openBrowserAsync('http://docs.expo.io');
    };

    _handlePressLogout = () => {
      WebBrowser.openBrowserAsync('http://forums.expo.io');
    };
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  titleIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 2,
  },
  sectionHeaderContainer: {
    backgroundColor: '#fbfbfb',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ededed',
  },
  sectionHeaderText: {
    fontSize: 14,
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  sectionContentText: {
    color: '#808080',
    fontSize: 14,
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,

  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPreview: {
    width: 17,
    height: 17,
    borderRadius: 2,
    marginRight: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  colorTextContainer: {
    flex: 1,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#ededed',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
    marginLeft: 10,
    marginRight: 10,
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
  centerText: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  optionLogout: {
      backgroundColor: '#4682b4',
      paddingHorizontal: 15,
      paddingVertical: 15,
      marginBottom: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#EDEDED',
      marginLeft: 60,
      marginRight: 60,
      marginTop:30,
  },
});

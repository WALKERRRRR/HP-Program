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
      //<ScrollView style={styles.container}>
      //   {/* Go ahead and delete ExpoLinksView and replace it with your
      //      * content, we just wanted to provide you with some helpful links */}
      //
      <View>
      <View style={styles.titleContainer}>
        <View style={styles.titleIconContainer}>
            <Image
              source={{ uri: 'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png' }}
              style={{ width: 64, height: 64 }}
              resizeMode="cover"
            />
        </View>

        <View style={styles.titleTextContainer}>
          <Text style={styles.nameText} numberOfLines={1}>
            {"Username"}
          </Text>

          <Text style={styles.slugText} numberOfLines={1}>
            {"slug"}
          </Text>

          <Text style={styles.descriptionText}>
            {"User desc"}
          </Text>
        </View>
      </View>

      <View>
        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressDocs}>
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
                Read the Expo documentation
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          background={Touchable.Ripple('#ccc', false)}
          style={styles.option}
          onPress={this._handlePressSlack}>
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
                Join us on Slack
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressForums}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Ask a question on the Expo forums
              </Text>
            </View>
          </View>
        </Touchable>
      </View>
    </View>
    //</ScrollView>
    );


    _handlePressSlack = () => {
      WebBrowser.openBrowserAsync('https://slack.expo.io');
    };

    _handlePressDocs = () => {
      WebBrowser.openBrowserAsync('http://docs.expo.io');
    };

    _handlePressForums = () => {
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
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  titleIconContainer: {
    marginRight: 15,
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
  slugText: {
    color: '#a39f9f',
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: '#4d4d4d',
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
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});

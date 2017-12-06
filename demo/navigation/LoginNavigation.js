import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import RootNavigation from './RootNavigation';
import LoginScreen from '../screens/Login';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const LoginStackNavigator = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    RootNav: {
      screen: RootNavigation,
      //screen: ({ navigation }) => <RootNavigation screenProps={{ rootNavigation: navigation }} />
    },
  },
  {
    navigationOptions: () => ({
      header: null,
    }),
  }
);

export default class LoginNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <LoginStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}

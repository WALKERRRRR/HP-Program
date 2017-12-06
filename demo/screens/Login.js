import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';
import { SearchBar } from 'react-native-elements';
import { AppRegisty, Alert, Text, TextInput, View, Image, Platform, StyleSheet, Button } from 'react-native';
import RootNavigation from '../navigation/RootNavigation';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', correctInformation: false};
  }

  render() {
     let hpe_pic = {
       uri: 'https://cdn.comparethecloud.net/wp-content/uploads/2017/02/HPE-Unveils-Its-New-Converged-IoT-1.jpg'
     };


     if(this.state.correctInformation == true){
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
     }
     else{
       return (
         <View style={styles.page}>
          <View style={{width: 20, height: 70, backgroundColor: 'white'}}/>
          <View style={{alignItems: 'center'}}>
              <Image
                style={{alignItems: 'center'}}
                source={hpe_pic} style={{width: 300, height: 150 }}/>
          </View>


          <View style={{alignItems: 'center'}}>
            <TextInput
              style={{padding: 10, height: 50, width: 250, borderColor: 'grey', borderWidth: 1}}
              placeholder='Username'
              autoCorrect={false}
              placeholderTextColor= 'grey'
              autoCapitalize='none'
              onChangeText={(username) => this.setState({username})}
            />
          </View>


          <View style={{width: 20, height: 10, backgroundColor: 'white'}}/>


          <View style={{alignItems: 'center'}}>
            <TextInput
              style={{padding: 10, height: 50, width: 250, borderColor: 'grey', borderWidth: 1}}
              placeholder='Password'
              placeholderTextColor='grey'

              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
          </View>


          <View style={{width: 20, height: 30, backgroundColor: 'white'}}/>

          <View style={{alignItems: 'center'}}>
            <Button style={styles.button}
              // onPress={() => {onPressLogin(this.state.username, this.state.password)}}
              onPress={() => {
                pw = this.state.password;
                un = this.state.username.toLowerCase();

                if(un == 'username' && pw == 'password'){
                    this.setState(previousState => {
                      return { correctInformation: true };
                    });
                }
                else {
                  Alert.alert("Incorrect Username or Password");
                }
              }}

              title='Login'
              color = {Platform.OS === 'ios' ? 'green' : 'white'}
              accessibilityLabel="Login to your account after typing in Username and Password"
            />
          </View>
          <View style={{ width: 20, height: 300, backgroundColor: 'white' }} />
        </View>
        
      );
    }
  }
}

// function onPressLogin(un,pw){
//   un = un.toLowerCase();
//   if(un == 'username' && pw == 'password'){
//
//       return true;
//
//
//   } else {
//     Alert.alert("Incorrect Username or Password!");
//     return false;
//   }
// }

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    flex: 1,
  }
});

import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';
import { SearchBar } from 'react-native-elements';
import { AppRegisty, Alert, Text, TextInput, View, Image, Platform, StyleSheet, Button } from 'react-native';
import RootNavigator from '../navigation/RootNavigation';
import '../data/data.js'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', correctInformation: false, accountData:[]};
  }

  render() {
     let hpe_pic = {
       uri: 'https://cdn.comparethecloud.net/wp-content/uploads/2017/02/HPE-Unveils-Its-New-Converged-IoT-1.jpg'
     };


     if(this.state.correctInformation == true){
      return (
        <RootNavigator />
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
              style={{borderRadius: 7, padding: 10, height: 50, width: 250, borderColor: 'grey', borderWidth: 1}}
              placeholder='Username'
              autoCorrect={false}
              placeholderTextColor= 'grey'
              autoCapitalize='none'
              onChangeText={(username) => this.setState({username})}
            />
          </View>



          <View style={{alignItems: 'center', marginTop: 20}}>
            <TextInput
              style={{borderRadius: 7, padding: 10, height: 50, width: 250, borderColor: 'grey', borderWidth: 1}}
              placeholder='Password'
              placeholderTextColor='grey'

              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
          </View>


          <View style={{borderRadius: 7, marginTop: 30,  justifyContent: 'center', width: 150, alignItems: 'center', backgroundColor: 'green'}}>
            <Button style={{alignItems: 'center'}}
              // onPress={() => {onPressLogin(this.state.username, this.state.password)}}
              onPress={() => {
                pw = this.state.password;
                un = this.state.username.toLowerCase();

                if(un != '' && pw == '123'){
                    for(i = 0; i < 500; i++ ){
                      if(un == global.data[i]["companyName"].toLowerCase()){
                        this.state.accountData.push(global.data[i]);
                      }
                    }
                    if(this.state.accountData.length != 0 ){
                      this.setState(previousState => {
                        return { correctInformation: true };
                      });
                    }
                    else{
                      Alert.alert("Username not Valid");
                    }
                }
                else {
                  Alert.alert("Incorrect Username or Password");
                }
              }}

              title='Login'
              color = {Platform.OS === 'ios' ? 'white' : 'green'}
              accessibilityLabel="Login to your account after typing in Username and Password"
            />
          </View>

          <Text>Use UN: Phat, PW: 123</Text>

        </View>

      );
    }
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  }
);

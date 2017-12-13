import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';
import { SearchBar } from 'react-native-elements';
import { AppRegisty, Alert, Text, TextInput, View, Image, Platform, StyleSheet, Button } from 'react-native';
import '../data/data.js'
import '../data/accountData.js'
import ExportScreen from './ExportScreen';


var usernameUpdate = '';
var passwordUpdate = '';
export {usernameUpdate};


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };




  render() {
    const { navigate } = this.props.navigation;
     let hpe_pic = {
       uri: 'https://cdn.comparethecloud.net/wp-content/uploads/2017/02/HPE-Unveils-Its-New-Converged-IoT-1.jpg'
     };
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
            onChangeText={(username) => usernameUpdate = username}
          />
        </View>



        <View style={{alignItems: 'center', marginTop: 20}}>
          <TextInput
            style={{borderRadius: 7, padding: 10, height: 50, width: 250, borderColor: 'grey', borderWidth: 1}}
            placeholder='Password'
            placeholderTextColor='grey'

            secureTextEntry={true}
            onChangeText={(password) => passwordUpdate = password}
          />
        </View>


        <View style={{borderRadius: 7, marginTop: 30,  justifyContent: 'center', width: 70, alignItems: 'center', backgroundColor: 'green'}}>
          <Button style={{alignItems: 'center', borderRadius: 7}}
            // onPress={() => {onPressLogin(username, password)}}
            onPress={() => {
              pw = passwordUpdate;
              un = usernameUpdate.toLowerCase();

              if(un != '' && pw == '123'){
                  //console.log(un);
                  //console.log(pw);
                  var rowNumber = 0;
                  for(i = 0; i < global.data.length; i++ ){

                    if(un == global.data[i]["companyName"].toLowerCase()){
                      //console.log(un);
                      //console.log(global.data[i]["companyName"].toLowerCase());
                      global.accountData.push(global.data[i]);
                      global.accountData[rowNumber]['rowNumber'] = ""+rowNumber;
                      rowNumber += 1;
                    }
                  }
                  //console.log(global.accountData.length);
                  if(global.accountData.length != 0 ){
                    navigate('Main');
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

      </View>

    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  }
);

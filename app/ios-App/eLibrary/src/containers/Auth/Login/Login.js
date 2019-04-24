/**
 * © Copyrights 2018
 * eLibrary- Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  AsyncStorage
} from 'react-native';

//Import register page
import Register from '../Register/Register'

import _CONFIG_ from '../../Global/_CONFIG_'
import Metrics from '../../Dimensions/Metrics'

//Importing cutom libraries
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import { ScrollView } from 'react-native-gesture-handler';
import AwesomeAlert from 'react-native-awesome-alerts';
import {ProgressDialog} from "react-native-simple-dialogs";
import * as Animatable from 'react-native-animatable';


//Create API LINKS
var MAIN_API = _CONFIG_.USER_LOGIN_URL;

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        user_email   : '',
        user_password: '',

        progress:false,
        loginError:false,
        fillDetails:false,
        reuestError:false,
      };
  }

  componentWillMount(){
   
  }

  loginAuthenticationFunction(){
    this.setState({
        progress:true,
      });
  
      var object = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify( {
          "User_Email": this.state.user_email,
          "User_Password":this.state.user_password,
        })
    };
  
  
    fetch(MAIN_API,object)
      .then((response) => response.json())
      .then((responseText) => {
        //Login success
        if(responseText.status_code == '200'){
          this.setState({
            progress:false,
            
          });

          //Save details to asyncstorage
          try {
                AsyncStorage.setItem('user_email', JSON.stringify(this.state.user_email));
            }
            catch (e) {
            console.log('caught error', e);
            }

            //Tem Solution - Drawer - Real is Homne Screen
            var { navigate} = this.props.navigation;
            navigate("Drawer",{});
     
        }else if(responseText.status_code == '400'){
          this.setState({
            progress:false,
            loginError:true,
          });
        }else if(responseText.status_code == '401'){
            this.setState({
              progress:false,
              reuestError:true,
            });
          }
  
      })
      .catch((error) => {
        MAIN_API = _CONFIG_.USER_LOGIN_URL_BACKUP;
        this.loginAuthenticationFunction();
      });
  }

  onClickListener = (viewId) => {
    // Alert.alert("Alert", "Button pressed "+viewId);
    if(viewId == 'register'){
        this.props.navigation.navigate("Register" , {screen:Register});
    }else if(viewId == 'login'){
            this.loginAuthenticationFunction();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} source={require('../../../assets/home/bg.png')}/>
        <Animatable.View  animation="bounceInLeft" style={{marginTop:Metrics.DEVICE_HEIGHT/3}}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(user_email) => this.setState({user_email})}/>
          <Image style={styles.inputIcon} source={require('../../../assets/auth/email.png')}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(user_password) => this.setState({user_password})}/>
          <Image style={styles.inputIcon} source={require('../../../assets/auth/password.png')}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text style={styles.btnText}>Dont Have Account ? Register Here</Text>
        </TouchableOpacity>

    </Animatable.View>
    <ProgressDialog
            visible={this.state.progress}
            title="Checking Details"
            message="Please, wait..."
        />

        <AwesomeAlert
          show={this.state.loginError}
          showProgress={false}
          title="Invalid Credentials"
          message="Please check your detials"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
              this.setState({
                loginError:false
              });
          }}
          />

        <AwesomeAlert
          show={this.state.reuestError}
          showProgress={false}
          title="Request Not Accept"
          message="Sorry your request still not accepted !"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
              this.setState({
                reuestError:false
              });
          }}
          />

          <AwesomeAlert
          show={this.state.fillDetails}
          showProgress={false}
          title="Fill All Fields"
          message="Please fill all the details"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
              this.setState({
                fillDetails:false
              });
          }}
          />


      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#DCDCDC',
      },
      inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:300,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        marginTop:25,
    
        shadowColor: "#808080",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
      },
      inputIcon:{
        width:30,
        height:30,
        marginRight:15,
        justifyContent: 'center'
      },
      buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:300,
        borderRadius:30,
        backgroundColor:'transparent',
        marginTop:20,
      },
      btnByRegister: {
        height:15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:20,
        width:300,
        backgroundColor:'transparent'
      },
      loginButton: {
        backgroundColor: "#00b5ec",
    
        shadowColor: "#808080",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
    
        elevation: 19,
      },
      loginText: {
        color: 'white',
      },
      bgImage:{
        flex: 1,
        resizeMode:'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
    
      },
      btnText:{
        color:"white",
        fontWeight:'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
      },
      textByRegister:{
        color:"white",
        fontWeight:'bold',
        textAlign:'center',
    
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
      }
}); 
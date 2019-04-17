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
  Alert
} from 'react-native';

import Login from '../Login/Login'
import _CONFIG_ from '../../Global/_CONFIG_'
import Metrics from  '../../Dimensions/Metrics'

//Importing cutom libraries
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import { ScrollView } from 'react-native-gesture-handler';
import AwesomeAlert from 'react-native-awesome-alerts';
import {ProgressDialog} from "react-native-simple-dialogs";
import * as Animatable from 'react-native-animatable';

//Create API LINKS
var MAIN_API = _CONFIG_.USER_REGISTER_URL;

//Nationality Data
const userNationalityData = [
    { value: 'Sri Lankan' },
    { value: 'American' },
    { value: 'Indian' },
    { value: 'German' },
    { value: 'British' },
    { value: 'Italian' },
    { value: 'Pakistani' },
    { value: 'Russian' },
  ];


export default class Register extends Component {

  constructor(props) {
    super(props);

     //Dropdown Reference Testing
     this.onChangeTextForNationality = this.onChangeTextForNationality.bind(this);
     this.nationalitySelect = this.updateRef.bind(this, 'Nationality');

    this.state = {
        user_firstname   : '',
        user_lastname: '',
        user_email   : '',
        user_password: '',
        user_address   : '',
        user_contactno: '',

        Nationality:'',
        selectNationality:'',

        date:'',

        registerError:false,
        registerComplete:false,
        progress:false,
      };
  }


  componentWillMount(){
   
  }

//Category Select Text Change Mehthod
onChangeTextForNationality(text) {
    ['Nationality',]
        .map((name) => ({ name, ref: this[name] }))
        .filter(({ ref }) => ref && ref.isFocused())
        .forEach(({ name, ref }) => {
        this.setState({ [name]: text , selectNationality:text});
    
        });

        
}

  // Category and Condition Update Method
  updateRef(name, ref) {
    this[name] = ref;
   
  }

  function_RegisterUser(){

    //Check the user is Local or Non-Local
    var userIsAcceptTest ; 
    if(this.state.selectNationality == 'Sri Lankan'){
         userIsAcceptTest = '1'
    }else{
        userIsAcceptTest = '0'
    }

    //Get Current Date 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    var userRegDate = year + '-' + month + '-' + date;

    this.setState({
        // progress:true,
      });
  
      var object = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify( {
          "User_First_Name": this.state.user_firstname,
          "User_Last_Name":this.state.user_lastname,
          "User_Nationality": this.state.selectNationality,
          "User_Address":this.state.user_address,
          "User_Contact_Number": this.state.user_contactno,
          "User_DOB":this.state.date,
          "User_Email": this.state.user_email,
          "User_Password":this.state.user_password,
          "User_Reg_Date": userRegDate,
          "User_IsAccept":userIsAcceptTest
        })
    };
  
  
    fetch(MAIN_API,object)
      .then((response) => response.json())
      .then((responseText) => {
        debugger;
        if(responseText.status_code == '200'){
          this.setState({
            progress:false,
            registerComplete:true,
          });
     
        }else if(responseText.status_code == '400'){
          this.setState({
            progress:false,
            registerError:true,
          });
        }
  
      })
      .catch((error) => {
        MAIN_API = _CONFIG_.USER_REGISTER_URL_BACKUP;
        this.function_RegisterUser();
      });
  }

  onClickListener = (viewId) => {
   if(viewId =='login'){
    this.props.navigation.navigate("Login" , {screen:Login});
   }else if (viewId == 'register'){
    this.function_RegisterUser();
   }
  }

  

  render() {

    let {Nationality} = this.state;


    return (
        
      <View style={styles.container}>
        <Image style={styles.bgImage} source={require('../../../assets/home/bg.png')}/>
        {/* <ScrollView style={{width:Metrics.DEVICE_WIDTH ,alignItems:'center',justifyContent:'center'}}> */}
        <Animatable.View  animation="bounceInLeft" style={{marginTop:Metrics.DEVICE_HEIGHT/3.5}}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="First Name"
              keyboardType="text"
              underlineColorAndroid='transparent'
              onChangeText={(user_firstname) => this.setState({user_firstname})}/>
          <Image style={styles.inputIcon} source={require('../../../assets/auth/name.png')}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Last Name"
              keyboardType="text"
              underlineColorAndroid='transparent'
              onChangeText={(user_lastname) => this.setState({user_lastname})}/>
          <Image style={styles.inputIcon} source={require('../../../assets/auth/name.png')}/>
        </View>

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
       <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Address"
              underlineColorAndroid='transparent'
              onChangeText={(user_address) => this.setState({user_address})}/>
          <Image style={styles.inputIcon} source={require('../../../assets/auth/address.png')}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Contact Number"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={(user_contactno) => this.setState({user_contactno})}/>
          <Image style={styles.inputIcon} source={require('../../../assets/auth/contact_no.png')}/>
        </View>

        <View style={{width:270,marginTop:-25}}>
        <Dropdown
                ref={this.nationalitySelect}
                value={Nationality}
                onChangeText={this.onChangeTextForNationality}
                label='Nationality'
                data={userNationalityData}
                rippleOpacity={0.1}
                baseColor='white'

              />
       </View>
       <View style={{width:300,}}>
       <DatePicker
        style={{width: 300 ,color:'white'}}
        date={this.state.date}
        mode="date"
        placeholder="Select Birthday"
        format="YYYY-MM-DD"
        minDate="1930-05-01"
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
       </View>


        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('register')}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onClickListener('login')}>
            <Text style={styles.btnText}>Already Have Account ? Login Here</Text>
        </TouchableOpacity>

        </Animatable.View>
        {/* </ScrollView> */}

        {/* All Alerts */}

        <ProgressDialog
            visible={this.state.progress}
            title="Checking Details"
            message="Please, wait..."
        />

        <AwesomeAlert
          show={this.state.registerError}
          showProgress={false}
          title="Email Already In Use"
          message="Try with different email to register"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
              this.setState({
                registerError:false
              });
          }}
          />

        <AwesomeAlert
          show={this.state.registerComplete}
          showProgress={false}
          title="Awesome !!!"
          message="Your account is successfully registered..."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText=""
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
                 //Navigate to Login Screen
              var { navigate} = this.props.navigation;
              navigate("Login",{});

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
        backgroundColor: '#DCDCDC',
      },
      inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:300,
        height:45,
        marginBottom:15,
        flexDirection: 'row',
        alignItems:'center',
    
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
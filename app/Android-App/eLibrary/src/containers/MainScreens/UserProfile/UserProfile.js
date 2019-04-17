/**
 * © Copyrights 2018
 * eLibrary- Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */

import React, {Component} from 'react';
import { Animated, Easing,Image,StyleSheet,View,ImageBackground,AsyncStorage,ScrollView,Text,FlatList,TouchableOpacity,Alert,BackHandler} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import * as Animatable from 'react-native-animatable';



import Metrics from '../../../containers/Dimensions/Metrics'
import _CONFIG_ from '../../Global/_CONFIG_'

import { ConfirmDialog , ProgressDialog} from 'react-native-simple-dialogs';


//Create API LINKS
var MAIN_API = _CONFIG_.GET_USERDETAILS_URL;


//Get Email From Async Storage
const retrieve = async (key)
 => {
     try{
        let value =  await AsyncStorage.getItem(key)

        return value;
    }catch(error){
        throw error;
    }
};


export default class UserProfile extends Component{

    constructor(props) {
    super(props);
    this.state = {
      user_first_name:'',
      user_email:'',
      user_contact_no:'',
      user_last_name:'',
      progress:false,
    };
    
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount(){
        //Retrieve user logged email address from local storage and pass to API call
        retrieve('user_email').then(result =>{
          this.function_GetUserDetails(result);
      });

     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
   }
   
   componentWillUnmount() {
     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
   }

   //Back button handle event - Android Only
    handleBackButtonClick() {
        this.props.navigation.goBack();
        return true;
    }


    //User Detail API Call Function 
    function_GetUserDetails(result){

      let userLoggedEmail = JSON.parse(result)

      this.setState({progress:true});

      fetch(MAIN_API, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify( {
          "User_Email": userLoggedEmail,
        })
  
  
    })
        .then((response) => response.json())
        .then((responseText) => {
          // alert(responseText.data);
          // console.log(responseText.data[0].full_name)
          if(responseText.data[0].status_code == '200'){
            this.setState({
              user_first_name:responseText.data[0].User_First_Name,
              user_email:responseText.data[0].User_Email,
              user_contact_no:responseText.data[0].User_Contact_Number,
              user_last_name:responseText.data[0].User_Last_Name,
              progress:false,
            });
          }else if (responseText.status_code == '400'){
            alert('Error')
          }
            
            
        })
        .catch((error) => {
          MAIN_API = _CONFIG_.GET_USERDETAILS_URL_BACKUP;
          this.function_GetUserDetails();
            
        });

    }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/home/bg.png')}  
                style={styles.container}>

        <TouchableOpacity style={styles.drawerIcon} onPress= {this.handleBackButtonClick}>
            <Image style={styles.imagestyle}
                source={require('../../../assets/drawer/back.png')} />
            </TouchableOpacity>
        
            <Text style={styles.headerTextMain}>My Profile
            </Text>

            <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.user_first_name + " " + this.state.user_last_name}</Text>
              <Text style={styles.info}>{this.state.user_email}</Text>
              <Text style={styles.info}>{this.state.user_contact_no}</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Update My Details</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Remove My Account</Text> 
              </TouchableOpacity>
            </View>
        </View>
   
        </ImageBackground>

        <ProgressDialog
            visible={this.state.progress}
            title="Checking Details"
            message="Please, wait..."
            onTouchOutside={() => this.setState({progress: true})}
        />

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  //drawer image
  drawerIcon:{
    width:40,
    height:40,
    position: 'absolute',
    marginTop:18,
    left: Metrics.DEVICE_WIDTH/60,
  
  },
  imagestyle:{
  width:35,
  height:35,
  position: 'absolute',
  left: Metrics.DEVICE_WIDTH/60,
  },
    headerTextMain:{
      color: 'white',
      fontSize: 21,
      marginLeft:Metrics.DEVICE_WIDTH/4.9,
      // width:Metrics.DEVICE_WIDTH,
      height:60,
      marginTop:20,
    },


    header:{
      backgroundColor: 'transparent',
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"white",
      fontWeight:'600',
    },
    body:{
      marginTop:20,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "white",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "white",
    },
  
  
});

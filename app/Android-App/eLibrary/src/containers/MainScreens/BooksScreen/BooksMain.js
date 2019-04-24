/**
 * © Copyrights 2018
 * eLibrary- Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */

import React, {Component} from 'react';
import { Animated, TouchableHighlight,Image,StyleSheet,View,ImageBackground,AsyncStorage,ScrollView,Text,FlatList,TouchableOpacity,Alert,BackHandler,ListView,TextInput} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import * as Animatable from 'react-native-animatable';
import { Dialog , ProgressDialog , ConfirmDialog} from "react-native-simple-dialogs";

//GET API FILE
import _CONFIG_ from '../../Global/_CONFIG_'

import Metrics from '../../../containers/Dimensions/Metrics';

//Create API LINKS
var MAIN_API = _CONFIG_.GET_BOOK_DETAILS_URL;

export default class BooksMain extends Component{

    constructor(props) {
      super(props);
      this.state = {
        jsonData: [],
        progress:false,
        search:'',
      };
      this.dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

     //Get User Logged Email From Local Storage
    getUserEmail = async () => {
      let user_email = await AsyncStorage.getItem('user_email');
      return user_email;
    }

    componentDidMount(){
      //Getting user logged email
      this.getUserEmail().then((user_email) => {
        console.log(user_email);
        this.function_GetBooksDetails(user_email);
      })

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

  //Get Books Details API Call Function
  function_GetBooksDetails(user_email){

    let User_Email = JSON.parse(user_email);

    this.setState({progress:true});

    fetch(MAIN_API, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify( {
        "User_Email": User_Email,
      })

  })
      .then((response) => response.json())
      .then((responseText) => {
          if(responseText.status_code == '400'){
            this.setState({
                  progress:false,
                });
          }else if(responseText.data[0].status_code == '200'){
            this.setState({
              jsonData:responseText.data,
              progress:false,
            });
   
          }
          
      })
      .catch((error) => {
        MAIN_API = _CONFIG_.GET_BOOK_DETAILS_URL_BACKUP;
        this.function_GetBooksDetails(user_email);
      });

  }

  //Search Books API Call
  function_SearchBook(){

    this.setState({progress:true});

    fetch(_CONFIG_.SEARCH_BOOK_DETAILS_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify( {
        "Book_Name": this.state.search,
      })

  })
      .then((response) => response.json())
      .then((responseText) => {
          if(responseText.status_code == '400'){
            this.setState({
                  progress:false,
                });
          }else if(responseText.data[0].status_code == '200'){
            this.setState({
              jsonData:responseText.data,
              progress:false,
            });
   
          }
          
      })
      .catch((error) => {
        // MAIN_API = _CONFIG_.GET_BOOK_DETAILS_URL_BACKUP;
        // this.function_GetBooksDetails(user_email);
      });
  }

  clickEventListener(value){
    if(value == 'search'){
      // alert(this.state.search)
      if(this.state.search.length == 0){
        this.getUserEmail().then((user_email) => {
          this.function_GetBooksDetails(user_email);
        })
      }else{
        this.function_SearchBook();
      }
      
    }
  }


  render() {
    return (
      <View style={styles.container}>
 
        <ImageBackground source={require('../../../assets/home/bg.png')}  
                style={styles.container}>
    <View>
        <TouchableOpacity style={styles.drawerIcon} onPress= {this.handleBackButtonClick}>
            <Image style={styles.imagestyle}
                source={require('../../../assets/drawer/back.png')} />
            </TouchableOpacity>
        
            <Text style={styles.headerTextMain}>Books</Text>
     
          <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={require('../../../assets/books/search-orange.png')}/>
            <TextInput style={styles.inputs}
                ref={'search'}
                placeholder="Search Books"
                underlineColorAndroid='transparent'
                onChangeText={(search) => this.setState({search})}/>
          </View>

          <TouchableHighlight style={styles.saveButton} onPress={() => this.clickEventListener('search')}>
            <Image style={[styles.icon, styles.iconBtnSearch]} source={require('../../../assets/books/search-white.png')}/>
          </TouchableHighlight>
        </View>
      </View>

        {this.state.jsonData &&
        <ListView enableEmptySections={true}
         dataSource={this.dataSource.cloneWithRows(this.state.jsonData)}
        renderRow={(service) => {
          return (
            <View style={styles.box}>
              <Image style={styles.image} source={{uri: service.Book_Image}} />
              <View style={styles.boxContent}>
                <Text style={styles.title}>{service.Book_Name}</Text>
                <Text style={styles.description}>{service.Book_Author_Name}</Text>
              </View>
            </View>
          )
        }}/> }

   
        </ImageBackground>

        <ProgressDialog
              visible={this.state.progress}
              title="Loading Data"
              message="Please, wait..."
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
    image: {
      width: 90,
      height:90,
    },
    box: {
      padding:20,
      marginTop:5,
      marginBottom:5,
      backgroundColor: 'white',
      flexDirection: 'row',
    },
    boxContent: {
      flex:1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginLeft:5,
    },
    title:{
      fontSize:18,
      color:"#151515",
    },
    description:{
      fontSize:15,
      color: "#646464",
    },
    buttons:{
      flexDirection: 'row',
    },
    button: {
      height:35,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10,
      width:50,
      marginRight:5,
      marginTop:5,
    },
    icon:{
      width:20,
      height:20,
    },
    view: {
      backgroundColor: "#FF1493",
    },
    profile: {
      backgroundColor: "#1E90FF",
    },
    message: {
      backgroundColor: "#228B22",
    },
    formContent:{
      flexDirection: 'row',
      marginTop:30,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        height:45,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        margin:10,
    },
    icon:{
      width:30,
      height:30,
    },
    iconBtnSearch:{
      alignSelf:'center'
    },
    inputs:{
        height:60,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      marginLeft:15,
      justifyContent: 'center'
    },
    saveButton: {
      height:45,
      justifyContent: 'center',
      alignItems: 'center',
      margin:10,
      width:70,
      alignSelf: 'flex-end',
      backgroundColor: '#40E0D0',
      borderRadius:30,
    },
    saveButtonText: {
      color: 'white',
    },
    notificationList:{
      marginTop:20,
      padding:10,
    },
    notificationBox: {
      padding:20,
      marginTop:5,
      marginBottom:5,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      borderRadius:10,
    },
    description:{
      fontSize:18,
      color: "#3498db",
      marginLeft:10,
    },
  
  
});

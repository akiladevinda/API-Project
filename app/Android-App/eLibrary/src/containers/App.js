/**
 * © Copyrights 2018
 * eLibrary- Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */

import React, {Component} from 'react';
import { Animated, Easing,Dimensions,StyleSheet,View,Image,AsyncStorage,ScrollView,Text} from 'react-native';
import { StackNavigator,DrawerNavigator, DrawerActions , DrawerItems,NavigationActions ,createStackNavigator ,createDrawerNavigator, createAppContainer} from 'react-navigation';


//import Main Screens
import Splash from '../containers/SplashScreen/Splash'
import Home from '../containers/HomeScreen/Home'
import BooksMain from '../containers/MainScreens/BooksScreen/BooksMain'
import GovPubMain from '../containers/MainScreens/Government/GovPubMain'
import Newspapers from '../containers/MainScreens/Newspapers/Newspapers'
import OlaScripts from '../containers/MainScreens/OlaScripts/OlaScripts'
import UserProfile from '../containers/MainScreens/UserProfile/UserProfile'

//Authentication Pages
import Login from '../containers/Auth/Login/Login'
import Register from '../containers/Auth/Register/Register'


import Metrics from '../containers/Dimensions/Metrics'
console.disableYellowBox = true;
// Drawer Header Image
const CustomeDrawerImage = (props) => (

  <View style={{width: Metrics.DEVICE_WIDTH/1.3, height: 190,}}>
 
    <Image
      style={styles.drawerHeaderImage}
      source={require('../assets/drawer/header.png')}/> 
      <View >  
      <ScrollView style={{width:Metrics.DEVICE_WIDTH/1.3,height:Metrics.DEVICE_HEIGHT/1.3}}>
      <DrawerItems
              {...props}
              onItemPress = {({ route, focused }) => {
                  if(route.routeName == 'Logout'){
                    props.navigation.navigate('Drawer');
                     props.navigation.navigate('Login');
                     AsyncStorage.setItem('alreadyLaunched', JSON.stringify(false))

                  }else{
                    props.navigation.navigate(route.routeName);
                  }
                }
                }
            />

            </ScrollView>
            </View>
  </View>

)



//Drawer icons and pages
const Drawer = createDrawerNavigator({
  
  'Home':{
      screen: Home,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/drawer/home.png")}
            resizeMode="contain"
            style={{ width: 25, height: 25,  }}
          />
        )
      }
  },
  'Books':{
    screen: BooksMain,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("../assets/drawer/books.png")}
          resizeMode="contain"
          style={{ width: 25, height: 25,  }}
        />
      )
    }
},
'News Papers':{
    screen: Newspapers,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("../assets/drawer/newspapers.png")}
          resizeMode="contain"
          style={{ width: 25, height: 25,  }}
        />
      )
    }
},
'Government Publications':{
    screen: GovPubMain,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("../assets/drawer/government.png")}
          resizeMode="contain"
          style={{ width: 25, height: 25,  }}
        />
      )
    }
},
'Ola Leaf':{
    screen: OlaScripts,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("../assets/drawer/ola-leaf.png")}
          resizeMode="contain"
          style={{ width: 25, height: 25,  }}
        />
      )
    }
},
'My Profile':{
    screen: UserProfile,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("../assets/drawer/myprofile.png")}
          resizeMode="contain"
          style={{ width: 25, height: 25,  }}
        />
      )
    }
},
'Logout':{
    screen: Home,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("../assets/drawer/logout.png")}
          resizeMode="contain"
          style={{ width: 25, height: 25,  }}
        />
      )
    }
},


},{
drawerWidth: Metrics.DEVICE_WIDTH/1.3,
contentComponent: CustomeDrawerImage,
drawerPosition: 'left',
contentOptions: {
  labelStyle: {
    fontSize:16,
  },
},
drawerOpenRoute: 'DrawerOpen',
drawerCloseRoute: 'DrawerClose',
drawerToggleRoute: 'DrawerToggle',
drawerBackgroundColor: "white",
});

// Main App Navigation
const NavigationApp = createStackNavigator({ 
 

    Splash:{ screen: Splash,navigationOptions: { title: 'Splash', header: null, gesturesEnabled: false},},
    Login:{ screen: Login,navigationOptions: { title: 'Login', header: null, gesturesEnabled: false},},
    Register:{ screen: Register,navigationOptions: { title: 'Register', header: null, gesturesEnabled: false},},
    Home:{ screen: Home,navigationOptions: { title: 'Home', header: null, gesturesEnabled: false},},
    Drawer:{ screen: Drawer,navigationOptions: { title: 'Drawer', header: null, gesturesEnabled: false},},
    BooksMain:{ screen: BooksMain,navigationOptions: { title: 'BooksMain', header: null, gesturesEnabled: false},},
    GovPubMain:{ screen: GovPubMain,navigationOptions: { title: 'GovPubMain', header: null, gesturesEnabled: false},},
    Newspapers:{ screen: Newspapers,navigationOptions: { title: 'Newspapers', header: null, gesturesEnabled: false},},
    OlaScripts:{ screen: OlaScripts,navigationOptions: { title: 'OlaScripts', header: null, gesturesEnabled: false},},
    UserProfile:{ screen: UserProfile,navigationOptions: { title: 'UserProfile', header: null, gesturesEnabled: false},},
   
  
  });
  
  export default class App extends Component{
  
    constructor(props) {
      super(props);
  
    }
    render() {
    
      return (
        <NavigationApp />   
      );
    }
  }

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    },
  drawerHeaderImage:{
    width: Metrics.DEVICE_WIDTH/1.3,
    height: 150,
    resizeMode: 'stretch',

  }
});

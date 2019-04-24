/**
 * © Copyrights 2018
 * eLibrary- Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,Dimensions,ImageBackground,AsyncStorage,StatusBar
} from 'react-native';

//Device width and height
import Metrics from '../Dimensions/Metrics';


//importing custom npm libraries
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';

export default class Splash extends Component{

  constructor(props) {
    super(props);

}


componentWillMount(){
    //Check user already signed in or not
    AsyncStorage.getItem("alreadyLaunched").then(value => {

      var launchedBefore = JSON.parse(value);
      if(launchedBefore == null){
        setTimeout(() => {
          this.props.navigation.navigate("Login",{screen: "Login"});
      }, 1000);

      }
      else if(launchedBefore == true){
        setTimeout(() => {
          this.props.navigation.navigate("Drawer",{screen: "Drawer"});
      }, 1000);

      }

      else if(launchedBefore == false){
        setTimeout(() => {
          this.props.navigation.navigate("Login",{screen: "Login"});
      }, 1000);

      }

    })
        // setTimeout(() => {
        //     this.props.navigation.navigate("Drawer",{screen: "Drawer"});
        //  }, 2000);


}

  render() {
    return (

     
      <View style={styles.container}>

        <StatusBar backgroundColor="black" barStyle="light-content"/>
        <View animation="pulse" iterationCount="infinite">
          <ImageBackground source={require('../../assets/splash/bg.png')}  
                style={styles.container}></ImageBackground>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'

},
linearGradient:{
  width: Metrics.DEVICE_WIDTH,
  height: Metrics.DEVICE_HEIGHT,
  justifyContent: 'center',
  alignItems: 'center',
}




});

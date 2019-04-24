/**
 * © Copyrights 2019
 * eLibrary - Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */


import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  Dimensions,
  TouchableOpacity

} from 'react-native';
import { DrawerActions } from 'react-navigation';
//import custom libraries
import LinearGradient from 'react-native-linear-gradient';


//Device width and height
import Metrics from '../Dimensions/Metrics';

export default class Toolbar extends Component{



  render() {
    return (
    <View style={styles.header}>

        <TouchableOpacity style={styles.drawerIcon} onPress={() =>   this.props.navigation.openDrawer()}>
        <Image style={styles.imagestyle}
              source={require('../../assets/drawer/menu2.png')} />
        </TouchableOpacity>

        <Text style={styles.headerTextMain}>eLibrary</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
        // backgroundColor: '#ffffff',
        width:Metrics.DEVICE_WIDTH,
        height:120,
        justifyContent:'center',
      },
      linearGradient: {
        width:Metrics.DEVICE_WIDTH,
        height:80,
        justifyContent:'center',
      },
      headerTextMain:{
        color: 'white',
        fontSize: 21,
        marginLeft:Metrics.DEVICE_WIDTH/6,
        width:Metrics.DEVICE_WIDTH,
        // height:60,
        marginTop:10,
        // marginBottom:-1,
      },

      drawerIcon:{
          width:40,
          height:40,
          position: 'absolute',
          left: Metrics.DEVICE_WIDTH/50,
          right: 0,
       
      },
      imagestyle:{
        width: 50,
        height: 50,
        marginBottom:5,

      },

  

});

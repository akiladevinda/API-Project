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



import Metrics from '../../../containers/Dimensions/Metrics';


export default class Newspapers extends Component{

    constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount(){
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


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/home/bg.png')}  
                style={styles.container}>

        <TouchableOpacity style={styles.drawerIcon} onPress= {this.handleBackButtonClick}>
            <Image style={styles.imagestyle}
                source={require('../../../assets/drawer/back.png')} />
            </TouchableOpacity>
        
            <Text style={styles.headerTextMain}>Newspapers
            </Text>
   
        </ImageBackground>

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
  
  
});

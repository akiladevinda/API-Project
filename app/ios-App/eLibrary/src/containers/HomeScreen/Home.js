/**
 * © Copyrights 2018
 * eLibrary- Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */

import React, {Component} from 'react';
import { Animated, BackHandler,Image,StyleSheet,View,ImageBackground,AsyncStorage,ScrollView,Text,FlatList,TouchableOpacity,Alert} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import * as Animatable from 'react-native-animatable';

//Import Routing Pages
import BooksMain from '../MainScreens/BooksScreen/BooksMain'
import GovPubMain from '../MainScreens/Government/GovPubMain'
import Newspapers from '../MainScreens/Newspapers/Newspapers'
import OlaScripts from '../MainScreens/OlaScripts/OlaScripts'
import UserProfile from '../MainScreens/UserProfile/UserProfile'


//importing toolbar
import Toolbar from '../Toolbar/Toolbar';
import Metrics from '../Dimensions/Metrics';

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



export default class Home extends Component{

    constructor(props) {
    super(props);
    this.state = {
        data: [
          {id:1, title: "Books", image:require('../../assets/home/books.png')},
          {id:2, title: "Newspapers", image:require('../../assets/home/newspapers.png')},
          {id:3, title: "Government Publications", image:require('../../assets/home/gov-pub.png')} ,
          {id:4, title: "Ola-Leaf Manuscripts", image:require('../../assets/home/ola-leaf.png')} ,
          {id:5, title: "My Profile", image:require('../../assets/home/profile.png')} ,
        ]
      };
    }

clickEventListener(item) {
    if(item.id == 1){
        this.props.navigation.navigate("BooksMain" , {screen:BooksMain});
    }else if(item.id ==2){
      this.props.navigation.navigate("Newspapers" , {screen:Newspapers});
    }else if (item.id ==3){
      this.props.navigation.navigate("GovPubMain" , {screen:GovPubMain});
    }else if (item.id ==4){
      this.props.navigation.navigate("OlaScripts" , {screen:OlaScripts});
    }else if(item.id ==5){
      this.props.navigation.navigate("UserProfile" , {screen:UserProfile});
    }
}


componentWillMount(){

  //Write Local Storage when the application launched after login
  AsyncStorage.setItem('alreadyLaunched', JSON.stringify(true));


}

componentDidMount(){
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
 
}

handleBackButton(){
    BackHandler.exitApp();
    return true;
}

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/home/bg.png')}  
                style={styles.container}>
        <Toolbar navigation={this.props.navigation}/>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={item.image}/>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
        </ImageBackground>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 5,
    // backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor:'transparent',
    flexBasis: '42%',
    marginHorizontal: 10,
    borderColor:'white',
    borderRadius:30,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:15,
    flex:1,
    alignSelf:'center',
    color:"white",
    textAlign: 'center'
    
  },
});

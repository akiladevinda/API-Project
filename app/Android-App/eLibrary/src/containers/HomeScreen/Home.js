/**
 * © Copyrights 2018
 * eLibrary- Mobile Application
 * Version 1.0
 * Author : Akila Devinda
 */

import React, {Component} from 'react';
import { Animated, Easing,Dimensions,StyleSheet,View,ImageBackground,AsyncStorage,ScrollView,Text} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import * as Animatable from 'react-native-animatable';


//importing toolbar
import Toolbar from '../Toolbar/Toolbar';
import Metrics from '../Dimensions/Metrics';


export default class Home extends Component{

    constructor(props) {
    super(props);
    }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/home/bg.png')}  
                style={styles.container}>
        <Toolbar navigation={this.props.navigation}/>
        {/* Books Section */}
        <ScrollView  style={{height:Metrics.DEVICE_HEIGHT/0.1}}>
        <Animatable.Text style={styles.animateText} animation="bounceInLeft">Books</Animatable.Text>
        <Animatable.Text style={styles.animateTextMore} animation="bounceInLeft">More</Animatable.Text>
        <ScrollView 
        showsHorizontalScrollIndicator={true}
        horizontal={true}
        style={{backgroundColor:'white',}}>
       
        <View style={styles.flatListItem}>
                <Card>
                    <CardImage 
                    source={{uri: 'http://bit.ly/2GfzooV'}} 
                    />
                    <CardTitle
                    style={{marginTop:35,fontSize:3}}
                    subtitle="Book Title"
                    />
                    <CardContent text="Clifton, Western Cape" />
                    <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                        onPress={() => {}}
                        title="Open"
                        color="#FEB557"
                    />
                    </CardAction>
                </Card>
               
        </View>

        <View style={styles.flatListItem}>
                <Card>
                    <CardImage 
                    source={{uri: 'http://bit.ly/2GfzooV'}} 
                    />
                    <CardTitle
                    style={{marginTop:35,fontSize:3}}
                    subtitle="Book Title"
                    />
                    <CardContent text="Clifton, Western Cape" />
                    <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                        onPress={() => {}}
                        title="Open"
                        color="#FEB557"
                    />
                    </CardAction>
                </Card>
               
        </View>

        <View style={styles.flatListItem}>
                <Card>
                    <CardImage 
                    source={{uri: 'http://bit.ly/2GfzooV'}} 
                    />
                    <CardTitle
                    style={{marginTop:35,fontSize:3}}
                    subtitle="Book Title"
                    />
                    <CardContent text="Clifton, Western Cape" />
                    <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                        onPress={() => {}}
                        title="Open"
                        color="#FEB557"
                    />
                    </CardAction>
                </Card>
               
        </View>

        </ScrollView>

         {/* Newspaper Section */}
         <Animatable.Text style={styles.animateText} animation="bounceInLeft">Newspapers</Animatable.Text>
         <Animatable.Text style={styles.animateTextMore} animation="bounceInLeft">More</Animatable.Text>
        <ScrollView 
        showsHorizontalScrollIndicator={true}
        horizontal={true}
        style={{backgroundColor:'white',}}>
       
        <View style={styles.flatListItem}>
                <Card>
                    <CardImage 
                    source={{uri: 'http://bit.ly/2GfzooV'}} 
                    />
                    <CardTitle
                    style={{marginTop:35,fontSize:3}}
                    subtitle="Book Title"
                    />
                    <CardContent text="Clifton, Western Cape" />
                    <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                        onPress={() => {}}
                        title="Open"
                        color="#FEB557"
                    />
                    </CardAction>
                </Card>
               
        </View>

        <View style={styles.flatListItem}>
                <Card>
                    <CardImage 
                    source={{uri: 'http://bit.ly/2GfzooV'}} 
                    />
                    <CardTitle
                    style={{marginTop:35,fontSize:3}}
                    subtitle="Book Title"
                    />
                    <CardContent text="Clifton, Western Cape" />
                    <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                        onPress={() => {}}
                        title="Open"
                        color="#FEB557"
                    />
                    </CardAction>
                </Card>
               
        </View>

        <View style={styles.flatListItem}>
                <Card>
                    <CardImage 
                    source={{uri: 'http://bit.ly/2GfzooV'}} 
                    />
                    <CardTitle
                    style={{marginTop:35,fontSize:3}}
                    subtitle="Book Title"
                    />
                    <CardContent text="Clifton, Western Cape" />
                    <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                        onPress={() => {}}
                        title="Open"
                        color="#FEB557"
                    />
                    </CardAction>
                </Card>
               
        </View>

    

        </ScrollView>


         {/* Government Section */}
         <Animatable.Text style={styles.animateText} animation="bounceInLeft">Government Publications</Animatable.Text>
         <Animatable.Text style={styles.animateTextMore} animation="bounceInLeft">More</Animatable.Text>
        <ScrollView 
        showsHorizontalScrollIndicator={true}
        horizontal={true}
        style={{backgroundColor:'white',}}>
       
        <View style={styles.flatListItem}>
                <Card>
                    <CardImage 
                    source={{uri: 'http://bit.ly/2GfzooV'}} 
                    />
                    <CardTitle
                    style={{marginTop:35,fontSize:3}}
                    subtitle="Book Title"
                    />
                    <CardContent text="Clifton, Western Cape" />
                    <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                        onPress={() => {}}
                        title="Open"
                        color="#FEB557"
                    />
                    </CardAction>
                </Card>
               
        </View>

        <View style={styles.flatListItem}>
                <Card>
                    <CardImage 
                    source={{uri: 'http://bit.ly/2GfzooV'}} 
                    />
                    <CardTitle
                    style={{marginTop:35,fontSize:3}}
                    subtitle="Book Title"
                    />
                    <CardContent text="Clifton, Western Cape" />
                    <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                        onPress={() => {}}
                        title="Open"
                        color="#FEB557"
                    />
                    </CardAction>
                </Card>
               
        </View>

        <View style={styles.flatListItem}>
                <Card>
                    <CardImage 
                    source={{uri: 'http://bit.ly/2GfzooV'}} 
                    />
                    <CardTitle
                    style={{marginTop:35,fontSize:3}}
                    subtitle="Book Title"
                    />
                    <CardContent text="Clifton, Western Cape" />
                    <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                        onPress={() => {}}
                        title="Open"
                        color="#FEB557"
                    />
                    </CardAction>
                </Card>
               
        </View>

    

        </ScrollView>

</ScrollView>
    
        </ImageBackground>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListItem:{
    width:180 ,
     height:250
  },
  animateText:{
    fontSize:17,
    marginLeft: 5,
    marginTop:5,
    color: 'white',
  },
  animateTextMore:{
    fontSize:17,
    marginLeft:360,
    marginTop:-25,
    color: 'white',
  },
});

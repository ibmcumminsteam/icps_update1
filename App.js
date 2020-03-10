import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer,  createSwitchNavigator } from 'react-navigation';
// import { createDrawerNav } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';
// import {icps}
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Login from './Login';
import CloudScreen from './screens/CloudScreen';
import System from './screens/System';
import Hardware from './screens/Hardware';


import { HeaderBackButton } from 'react-navigation-stack';
// import ApiKeys from './constants/ApiKeys';
// import * as firebase from 'firebase';


// import PushNotificationIOS from 'react-native';
// import PubNubReact from 'pubnub-react';


// const DrawerAppNavigator = createDrawerNavigator({
//     Dashboard: {
//       screen: Screen1
//     },
//     Pattern: {
//       screen: Screen2
//     },
//     Catalog: {
//       screen: Screen3
//     },
//     Login: {
//       screen : Login
//     }
  
//   });
const navigationOptions = ({ navigation }) => ({
  header: null, 
  disableGesture: true
})
      
// var PushNotification = require('react-native-push-notification');
const AppNavigator = createStackNavigator(  

   
        {  
            Screen1: {screen: Screen1, navigationOptions},
            Screen2: {screen: Screen2, navigationOptions},  
            Screen3:{screen: Screen3, navigationOptions},  
            Login: {screen: Login, navigationOptions},
            
        },  
        {  
            initialRouteName: "Login"  
        } ,{
          mode: 'modal',
          headerMode: 'none',
          headerVisible: false, headerMode: 'none', 
        } 
);  

const DrawNav = createDrawerNavigator({

    // Login: { screen: },
    Dashboard: {
        screen : AppNavigator
      },
    Patterns: {
      screen: Screen2
    },
    Catalog: {
      screen: Screen3 
    },
    Cloud: {
      screen: CloudScreen
    },
    System: {
      screen: System
    },
    Hardware: {
      screen: Hardware
    },
    
    
}, {
  mode: 'modal',
  headerMode: 'none',
} );

const MainNav = createSwitchNavigator({

    HomeDrawer: DrawNav,
    AuthStack: AppNavigator,
});

const AppContainer = createAppContainer(MainNav);

// const AppContainer = createAppContainer(DrawerAppNavigator);  
export default class App extends React.Component {  
   render() {  
        return (
        <>
        
        <AppContainer/>
        </>
        ) 
    }  
}  

// export default MainNav;

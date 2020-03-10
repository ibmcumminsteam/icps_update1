import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  View,
} from "react-native";

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,  createSwitchNavigator } from 'react-navigation';

import VirtualSystemPatternScreen from "./screens/VirtualSystemPatternScreen" ;
import VirtualApplicationPatternScreen from "./screens/VirtualApplicationPatternScreen";
import VirtualAppliancesScreen from "./screens/VirtualAppliancesScreen";

import VirtualSystemInstancesScreen from "./screens/VirtalSystemInstancesScreen";
import VirtualApplicationInstancesScreen from './screens/VirtualApplicationInstancesScreen';
import VirtualMachineScreen from './screens/VirtulMachineScreen';

import Screen1 from './Screen1';
import MyHeader from './screens/MyHeader' ;


function Separator() {
  return <View style={styles.separator} />;
}
class Screen2 extends React.Component {
  // static navigationOptions = {
  //   };
  static navigationOptions = ({ navigation }) => ({
    header: null, 
  })

  renderRow = highlighted => {
    if (Platform.OS !== "android") {
      return (
        <View
          style={[
            { backgroundColor: "#f0f0f0", height: 1 },
            highlighted && { marginLeft: 1 }
          ]}
        />
      );
    }

    return null;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MyHeader/>
        <FlatList
          ItemSeparatorComponent={this.renderRow}
          style={styles.container}
          onScroll={this.handleScroll}
          scrollEventThrottle={16}
          data={[
            {
              key: "row_1",
              text: "Virtual System Patterns",
              screen: "VirtualSystemPatternScreen"
            },
            {
              key: "row_2",
              text: "Virtual System Patterns(Classic)",
              screen: "VirtualSystemPatternScreen"
            },
            {
              key: "row_3",
              text: "Virtual Application Patterns",
              screen: "VirtualApplicationPatternScreen"
            },
            {
              key: "row_4",
              text: "Virtual Appliances",
              screen: "VirtualAppliancesScreen"
            },
            {
              key: "row_5",
              text: "Virtual System Instances",
              screen: "VirtualSystemInstancesScreen"
            },
            {
              key: "row_6",
              text: "Virtual System Instances(Classic)",
              screen: "VirtualSystemInstancesScreen"
            },
            {
              key: "row_7",
              text: "Virtual Applicantion Instances",
              screen: "VirtualApplicationInstancesScreen"
            },
            {
              key: "row_8",
              text: "Virtual Machine",
              screen: "VirtualMachineScreen"
            },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.row}
              activeOpacity={0.7}
              onPress={() => {
                this.props.navigation.navigate(item.screen); 
              }}
            >
              <Text>{item.text}</Text>
              <Separator/>

            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}

const AppNavigator = createStackNavigator({
  Screen2: {
    screen: Screen2
  },
  VirtualSystemPatternScreen: {
    screen: VirtualSystemPatternScreen
  },
  VirtualSystemPatternScreenClassic: {
    screen: VirtualSystemPatternScreen
  },
  VirtualApplicationPatternScreen: {
    screen: VirtualApplicationPatternScreen
  },
  VirtualAppliancesScreen: {
    screen: VirtualAppliancesScreen
  },
  VirtualSystemInstancesScreen: {
    screen: VirtualSystemInstancesScreen
  },
  VirtualSystemInstancesScreenClassic: {
    screen: VirtualSystemInstancesScreen
  },
  VirtualApplicationInstancesScreen: {
    screen: VirtualApplicationInstancesScreen
  },
  VietualMachineScreen: {
    screen: VirtualMachineScreen
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 2
  },

});

export default createAppContainer(AppNavigator);
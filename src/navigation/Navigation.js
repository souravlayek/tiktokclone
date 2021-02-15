import React from 'react'
import { Image,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../layout/HomePage';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DummyPage from '../layout/DummyPage';



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      showIcon: true,
      // showLabel: false,
      lazyLoad: true,
      tabStyle: {
      backgroundColor: 'rgba(0,0,0,1)',
      },
      activeTintColor: "white"
    }}>
      <Tab.Screen options={{
        tabBarIcon: ({color}) => (
          <Entypo name="home" size={25} color={color} />
        )
      }} name="home" component={HomePage} />
      <Tab.Screen options={{
        tabBarIcon: ({color}) => (
          <AntDesign name="search1" size={25} color={color} />
        )
      }} name="search" component={DummyPage} />
      <Tab.Screen options={{
        tabBarLabel: () => null,
        tabBarIcon: ({color}) => (
          <Image source={require("../assets/tikplus.png")} style={{
            // width: 30,
            height: 40
          }} resizeMode="contain" />
        )
      }} name="add" component={DummyPage} />
      <Tab.Screen options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="message-minus-outline" size={25} color={color} />
        )
      }} name="inbox" component={DummyPage} />
      <Tab.Screen options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="ios-person-outline" size={25} color={color} />
        )
      }}  name="profile" component={DummyPage} />
    </Tab.Navigator>
  )
}



const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default Navigation

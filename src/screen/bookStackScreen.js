import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Bookscreen from '../screen/bookScreen';
import Homescreen from '../screen/homeScreen';

const Stack = createStackNavigator();

const BookStack=({navigation}) =>{
  return(
      <Stack.Navigator>
        <Stack.Screen name="MyBook" component={Bookscreen} 
        options={{
          headerRight: ()=> <Image source={{uri:"https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/btn_search.png"}} style={{height:40, width:40}} />,
          headerLeft: ()=> {
            return(
              <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                <Image source={{uri:"https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/btn_navbar_mobile.png"}} style={{height:40, width:40}}/>
              </TouchableOpacity>
            )
          },
          headerTitleStyle: { color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#00b49f' }
        }}
        />
      </Stack.Navigator>
  );
}
const HomeStack=({navigation}) =>{
  return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} 
        options={{
          headerRight: ()=> <Image source={{uri:"https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/btn_search.png"}} style={{height:40, width:40}} />,
          headerLeft: ()=> {
            return(
              <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                <Image source={{uri:"https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/btn_navbar_mobile.png"}} style={{height:40, width:40}}/>
              </TouchableOpacity>
            )
          },
          headerTitleStyle: { color: '#fff'},
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#00b49f' }
        }}
        />
      </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabStack=()=> {
  return (
      <Tab.Navigator
        initialRouteName="My Book"
        tabBarOptions={{
          activeTintColor: '#ffffff',
          activeBackgroundColor: '#00b49f',
          inactiveTintColor: '#5c5c5c',
          labelStyle: {fontSize: 12, marginBottom: 8},
          tabStyle: {
            height: 56,
            width: 120
          },
          style: { borderColor: '#d1d1d1', borderWidth: 1, height:56, width:360}
        }}
      >
        <Tab.Screen name="Home" component={HomeStack}
          options = {{
            tabBarIcon: ({focused})=> (
              focused
              ? <Image source={{uri:"https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/touch/icon_drawer_home_pressed.png"}} style={styles.Icon}/>
              : <Image source={{uri:"https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/icon_drawer_home.png"}} style={styles.Icon}/>
            )
          }}
        />
        <Tab.Screen name="MyBook" component={BookStack}
            options = {{
              tabBarIcon: ({focused})=> (
                focused
                ?<Image source={{uri:'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/touch/icon_drawer_mybook_pressed.png'}} style={styles.Icon} />
                :<Image source={{uri:'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/icon_drawer_mybook.png'}} style={styles.Icon} />
              )
            }}
          />
        <Tab.Screen name="Favorit" component={BookStack}
            options = {{
              tabBarIcon: ()=>(
                <Image source={{uri:'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/icon_drawer_favorites.png'}}
                style={styles.Icon} />
              )
            }}
          />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  Icon: {
    height: 24,
    width: 24
  },
  headerContent: {
    width:304,
    height:170,
    backgroundColor: '#00b49f',
    bottom:4
  },
  Content: {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: 'flex-end',
  marginLeft: 16,
  marginTop: 10
  },
  textDetail: {
    width: 230,
    marginBottom: 16
  },
  headImg: {
    height: 70,
    width: 70,
    marginLeft: 13,
    marginTop: 37
  },
  DownIcon: {
    height: 24,
    width: 24,
    marginBottom: 20.7
  },
  font: {
    fontSize: 14,
    color: '#fff'
  }
})
export default TabStack;
 
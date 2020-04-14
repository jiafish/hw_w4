import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Bookscreen from '../screen/bookScreen';

const Stack = createStackNavigator();

const BookStackScreen=({navigation}) =>{
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
          headerTitleStyle: { color: '#fff' },
          headerStyle: { backgroundColor: '#00b49f' }
        }}
        />
      </Stack.Navigator>
  );
}

export default BookStackScreen;
 
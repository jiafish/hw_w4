import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import BookStack from './src/screen/bookStackScreen';
const Drawer = createDrawerNavigator();


const App=()=>{
  return(
    <NavigationContainer>
    <Drawer.Navigator
          drawerStyle={{
            backgroundColor: '#ebebeb',
            width: 304,
          }}
          drawerContent= { prop => <CustomDrawerContent{...prop}/> }
          drawerContentOptions={{
            activeTintColor: '#ffffff',
            activeBackgroundColor: '#00b49f',
            inactiveTintColor: '#5c5c5c',
            itemStyle: { height:54, width: 304, marginLeft: 0, borderRadius: 0, marginTop: 0, marginBottom: 0},
            labelStyle: {fontSize: 14, marginTop: 3}
          }}
          initialRouteName = 'MyBook'
        >
          <Drawer.Screen name="Home" component={BookStack}
            options = {{
              drawerIcon: ({focused})=> (
                focused
                ? <Image source={{uri:"https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/touch/icon_drawer_home_pressed.png"}} style={styles.Icon}/>
                : <Image source={{uri:"https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/icon_drawer_home.png"}} style={styles.Icon}/>
              )
            }}
          />
          <Drawer.Screen name="MyBook" component={BookStack}
            options = {{
              drawerIcon: ({focused})=> (
                focused
                ?<Image source={{uri:'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/touch/icon_drawer_mybook_pressed.png'}} style={styles.Icon} />
                :<Image source={{uri:'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/icon_drawer_mybook.png'}} style={styles.Icon} />
              )
            }}
          />
          <Drawer.Screen name="Favorit" component={BookStack}
            options = {{
              drawerIcon: ()=>(
                <Image source={{uri:'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/icon_drawer_favorites.png'}}
                style={styles.Icon} />
              )
            }}
          />
          <Drawer.Screen name="Setting" component={BookStack}
            options = {{
              drawerIcon: ()=>(
                <Image source={{uri:'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/icon_drawer_setting.png'}}
                style={styles.Icon} />
              )
            }}
          />
          <Drawer.Screen name="About us" component={BookStack}
            options = {{
              drawerIcon: ()=>(
                <Image source={{uri:'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/icon_drawer_aboutus.png'}}
                style={styles.Icon} />
              )
            }}
          />
    </Drawer.Navigator>
    </NavigationContainer>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContent}>
        <Image source={{uri:'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/img_user_photo.png'}} style={styles.headImg} />
        <View style={styles.Content} >
          <View style={styles.textDetail}>
            <Text style={styles.font}>GamexHCl</Text>
            <Text style={[styles.font,{marginTop:5}]}>gdlab2017@gmail.com</Text>
          </View>
          <Image source={{uri:'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/btn_down_arrow.png'}} style={styles.DownIcon}/>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
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

export default App;
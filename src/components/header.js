import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header=() =>{
  return(
    <View>
      <Image 
        source={{uri: "https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/btn_navbar_mobile.png"}}
        style={styles.drawerImg}
      />
      <Text style={styles.title}>My Book</Text>
      <Image 
        source={{uri: "https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/btn_search.png"}}
        style={styles.serchImg}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  drawerImg: {
    height: 40,
    width: 40,
    marginLeft: 8
  },
  serchImg: {
    height: 40,
    width: 40,
    marginRight: 8
  },
  title: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Header;
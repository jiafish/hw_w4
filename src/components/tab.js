import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Home = 'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/icon_bottomnav_home.png';
const Book = 'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/icon_bottomnav_mybook.png';
const Favorit = 'https://raw.githubusercontent.com/jiafish/hw_w4/master/assets/Icon/untouch/icon_bottomnav_favorites.png';

const Tab=() =>{
  return(
    <View style={styles.tabBody}>
      <View style={styles.tab}>
        <Image source={{uri: Home}} style={styles.icon}/>
      </View>
      <View style={styles.tab}>
        <Image source={{uri: Book}} style={styles.icon}/>
      </View>
      <View style={styles.tab}>
        <Image source={{uri: Favorit}} style={styles.icon}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tabBody: {
    height:56,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 48,
    marginTop: 536
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  icon: {
    height:24,
    width: 24,
    marginTop: 6
  },
  unTouchText: {
    fontSize: 12,
    color: '#818181',
    marginBottom: 8
  }
})

export default Tab;
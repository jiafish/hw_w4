import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Book =() =>{
  return(
    <View>
      <View style={styles.row}>
        <Image 
          source={{uri: }} style={}
        />
        <View>
          <Text></Text>
          <Text></Text>
          <View></View>
          <Text></Text>
        </View>
      </View>
    </View>
  )
};

const styles=StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bookImg: {
    height: 140,
    width: 93
  }
});
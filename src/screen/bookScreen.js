import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Data from '../json/bookinfo.json';

const Book =() =>{
  return(
    <ScrollView style={{flex: 1}}>
      <View style={styles.BodyStyle}>
        <View style={styles.bookImgBG}>
          <Image 
            source={{uri: Data[0].bookImg}} style={styles.bookImg}
          />
        </View>
        <View style={styles.Detail}>
          <Text style={styles.name}> {Data[0].name} </Text>
          <Text style={styles.author}> {Data[0].author} </Text>
          <Text style={styles.foreword}> {Data[0].foreword} </Text>
          <View style={styles.unloading}>
            <View style={styles.loading}></View>
          </View>
          <Text style={styles.percent}> {Data[0].percent} </Text>
        </View>
      </View>

      <View style={styles.BodyStyle}>
        <View style={styles.bookImgBG}>
          <Image 
          source={{uri: Data[1].bookImg}} style={styles.bookImg}
        />
        </View>
        
        <View style={styles.Detail}>
          <Text style={styles.name}> {Data[1].name} </Text>
          <Text style={styles.author}> {Data[1].author} </Text>
          <Text style={styles.foreword}> {Data[1].foreword} </Text>
          <View style={styles.unloading}></View>
          <Image source={{uri: Data[1].percent}} style={styles.start}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles=StyleSheet.create({
  BodyStyle: {
    backgroundColor: '#f8f8f8',
    width: 360,
    height: 170,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:12,
    paddingLeft:15
  },
  bookImgBG:{
    width: 99,
    height: 146,
    backgroundColor: '#f8f8f8',
    borderColor: '#d1d1d1',
    borderWidth: 0.5,
    shadowColor: '#40000000',
    shadowRadius: 2,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookImg: {
    height: 140,
    width: 93
  },
  Detail: {
    paddingLeft:24,
    alignItems: 'flex-start'
  },
  name: {
    color: '#2e2e2e',
    fontSize: 18,
    fontWeight: "bold",
    height:22,
    marginTop: 15
  },
  author: {
    fontSize: 14,
    color: '#717171',
    marginTop: 11,
    height: 18
  },
  foreword: {
    fontSize: 12,
    color: '#b1b1b1',
    width: 194,
    height: 30,
    marginTop: 11
  },
  unloading: {
    backgroundColor: '#c3c3c3',
    width: 194,
    height: 3,
    borderRadius: 3,
    marginTop: 10
  },
  loading: {
    width: 97,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#70b4a1'
  },
  percent: {
    color: '#b1b1b1',
    fontSize: 12,
    marginTop: 12,
    height: 16,
  },
  start: {
    width: 82,
    height: 21,
    marginTop: 12
  },
}) 

export default Book;
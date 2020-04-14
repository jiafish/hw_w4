import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bookscreen from './src/screen/bookScreen';
import Header from './src/components/header';
import Tab from './src/components/tab';

const App=()=> {
  return (
    <Header/>
    <Bookscreen/>
    <Tab/>
  );
}

const styles = StyleSheet.create({

})

export default App;
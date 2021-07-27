import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SoulHealth from './src/componentes/SoulHealth';
import Content from "./src/componentes/Content";
import {styles} from "./src/styles/style";

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar hidden ={true} backgroundColor = "#00BCD4"></StatusBar>
      <SoulHealth/>
      <Content/>
    </View>
    </ScrollView>
  );
}


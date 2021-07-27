import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import {styles} from "../styles/style";

export default function SouthHealth(){
    return(
        <View style={styles.header}>
            <Image style={styles.logo}
            source={require('../../src/imgs/logo.png')} />
            <Text style={styles.textoLogo}>Soul Health</Text>
        </View>

    )
} 

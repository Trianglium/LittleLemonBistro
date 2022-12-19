import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';

export default function MenuItemScreen({ navigation }) {

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerText: {
      padding: 40,
      fontSize: 30,
      color: '#000',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#000',
      textAlign: 'center',
    },
    button: {
      fontSize: 22,
      padding: 10,
      marginVertical: 8,
      margin: 100,
      backgroundColor: '#495E57',
      borderColor: '#495E57',
      borderWidth: 2,
      borderRadius: 50,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 18,
    },
  });
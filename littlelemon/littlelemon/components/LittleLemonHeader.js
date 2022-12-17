import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.logo]}
        source={require("../assets/img/littleLemonHeader.png")}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
    logo: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  }
});
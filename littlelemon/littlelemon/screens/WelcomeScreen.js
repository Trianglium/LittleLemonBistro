import * as React from "react";
import { Text, View, StyleSheet, Image, useColorScheme } from "react-native";
import Button from "../components/Button";


const WelcomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  return (
    <View 
      style={[
        styles.container,
        colorScheme === 'dark'
          ? {backgroundColor: '#fff'}
          : {backgroundColor: '#121212'},
      ]}>
      <View style={styles.contentContainer}>
        <Image style={styles.logo} source={require("../assets/little-lemon-logo.png")} />
        <Text
          style={[
            styles.title,
            colorScheme === 'dark'
              ? { color: '#000' }
              : { color: '#EDEFEE' },
          ]}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Button
        style={styles.button}
        onPress={() => {
          navigation.navigate("Subscribe");
        }}
      >
        Newsletter
      </Button>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  },
  button: {
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#495E57',
    borderColor: '#495E57',
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 0,
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
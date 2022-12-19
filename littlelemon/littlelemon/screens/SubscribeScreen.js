import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  View,
  useColorScheme,
} from 'react-native';

export default function SubscribeScreen() {
  const [email, onChangeEmail] = useState('');
  const [isSubscribed, onSubscribe] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'dark'
          ? {backgroundColor: '#fff'}
          : {backgroundColor: '#121212'},
      ]}>
    <View style={styles.contentContainer}>
      <Image
        style={[
          styles.logo,
          colorScheme === 'dark'
              ? { filter: 'brightness(100%)' }
              : { filter: 'brightness(150%)' },
        ]}
        source={require('../assets/img/logo.png')}
      />
      </View>
      {isSubscribed && <Text style={[
          styles.headerText,
          colorScheme === 'dark'
            ? { color: '#000' }
            : { color: '#EDEFEE' },
        ]}>
        Thanks for subscribing, stay tuned!
      </Text>}

      {!isSubscribed && (
        <>
          <Text 
          style={[
            styles.regularText,
            colorScheme === 'dark'
              ? { color: '#000' }
              : { color: '#EDEFEE' },
          ]}>
            Subscribe to our newsletter for our latest delicious recipes!
          </Text>
          <TextInput
            style={[
              styles.inputBox,
              colorScheme === 'dark'
                ? { borderColor: '#EDEFEE', backgroundColor: '#EDEFEE' }
                : { borderColor: '#333', backgroundColor: '#333', color: '#EDEFEE' },
            ]}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'email'}
            keyboardType={'email-address'}
          />
          <Pressable onPress={() => onSubscribe(!isSubscribed)} style={styles.button}>
            <Text style={styles.buttonText}>Subscribe</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
}

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
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
  button: {
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#495E57',
    borderColor: '#495E57',
    color: '#fff',
    borderRadius: '25px',
    whiteSpace: 'normal',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});


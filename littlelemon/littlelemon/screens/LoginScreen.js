import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'dark'
          ? {backgroundColor: '#fff'}
          : {backgroundColor: '#121212'},
      ]}>
      <Text style={[
        styles.headerText,
        colorScheme === 'light'
        ? { color: '#fff' }
        : { color: '#000' },
      ]}>
        Welcome to Little Lemon
      </Text>
      <Text style={[
        styles.regularText,
        colorScheme === 'light'
        ? { color: '#fff' }
        : { color: '#000' },
      ]}>
        Login to continue 
      </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'email'}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        placeholder={'password'}
        keyboardType={'default'}
        secureTextEntry={true}
      />
      <Pressable
        onPress={() => navigation.navigate('Welcome')}
        style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
    </ScrollView>
  );
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
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
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


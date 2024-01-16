import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default function App() {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleUsernameChange = (text) => {
    setUsernameValue(text);
  };

  const handlePasswordChange = (text) => {
    setPasswordValue(text);
  };

  const handleButtonPress = () => {
    alert('Button Pressed!');
  };

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.titleText}>LOGIN</Text>
          <TextInput
              style={styles.input}
              placeholder="username"
              onChangeText={handleUsernameChange}
              value={usernameValue}
          />
          <TextInput
              style={styles.input}
              placeholder="password"
              onChangeText={handlePasswordChange}
              value={passwordValue}
              secureTextEntry={true}
          />

          <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    color: '#638889',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#F9EFDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    marginBottom: 20,
    backgroundColor: '#638889',
  },
  headerText: {
    fontSize: 100,
    color: '#F9EFDB',
    fontWeight: 'bold',
  },
  button: {
    padding: 20,
    width: '60%',
    alignItems: 'center',
    backgroundColor: '#9DBC98',
    borderRadius: 3,
  },
  buttonText: {
    color: '#638889',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#638889',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  lottieContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    marginBottom: 30,
  },
  loginTextContainer: {
    flexDirection: 'column',
    marginBottom: 50,
  },
  loginText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },
  loginTextDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#cdcdcd',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  loginButtonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'red',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  signUpTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
  },
  signUpTextLink: {
    color: '#25f129',
    fontSize: 14,
    marginLeft: 5,
  },
});

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView source={require('../assests/login.json')} autoPlay />
      </View>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.loginTextDescription}>
          Login using email and password
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text
          style={styles.loginButtonText}
          onPress={() => navigation.navigate('HomeScreen')}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row', // change to row
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  item: {
    flex: 1,
    width: 100, // set a fixed width
  },
  helmet: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    width: 350,
    height: 350,
    marginLeft: -140,
    marginTop: -140,
    resizeMode: 'contain',
  },
  heading: {
    position: 'absolute',
    top: '15%',
    left: '50%',
    width: '70%',
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    transform: [{translateX: -100}],
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: '15%',
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextWhite: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonTextRed: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  whiteButton: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  redButton: {
    backgroundColor: 'red',
  },
});

const OnboardingScreen = ({navigation}) => (
  <>
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.item}>
          <LottieView source={require('../assests/winwinRed.json')} autoPlay />
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assests/middle.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.item}>
          <LottieView source={require('../assests/winwinRed.json')} autoPlay />
        </View>
      </View>
      <Text style={styles.heading}>FRONTEND</Text>
      <Image source={require('../assests/helmet.png')} style={styles.helmet} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.whiteButton]}
          onPress={() => navigation.navigate('SigupScreen')}>
          <Text style={styles.buttonTextWhite}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.redButton]}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextRed}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </>
);

export default OnboardingScreen;

import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assests/test_image.jpg')}
      resizeMode="cover">
      <View style={styles.Homecontainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Homecontainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});

export default HomeScreen;

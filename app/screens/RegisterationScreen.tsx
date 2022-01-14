import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import AppInput from '../components/AppInput';
import User from '../icons/User';
import Screen from './Screen';

function RegisterationScreen({route, navigation}: any) {
  return (
    <Screen style={styles.screen}>
      <Image
        resizeMode={'stretch'}
        style={styles.image}
        source={require('../assets/frame.png')}
      />
      <Text style={styles.title}> Create an Account </Text>
      <AppInput icon={<User />} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginStart: '10%',
    marginTop: 41,
  },
  login: {
    marginTop: 20,
  },
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '700',
    marginStart: '10%',
    marginTop: 28,
  },
});
export default RegisterationScreen;

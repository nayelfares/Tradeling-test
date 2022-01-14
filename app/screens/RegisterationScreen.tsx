import React from 'react';
import {StyleSheet} from 'react-native';
import AppInput from '../components/AppInput';
import User from '../icons/User';
import Screen from './Screen';

function RegisterationScreen({route, navigation}: any) {
  return (
    <Screen style={styles.screen}>
      <AppInput icon={<User />} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  login: {
    marginTop: 20,
  },
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
export default RegisterationScreen;

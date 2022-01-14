import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import AppInput from '../components/AppInput';
import User from '../icons/User';
import Screen from './Screen';
import Email from '../icons/Email';
import Lock from '../icons/Lock';

function RegisterationScreen({route, navigation}: any) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
    },
  });

  return (
    <Screen style={styles.screen}>
      <Image
        resizeMode={'stretch'}
        style={styles.image}
        source={require('../assets/frame.png')}
      />
      <Text style={styles.title}> Create an Account </Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput icon={<User />} onChangeText={onChange} />
          )}
          name="fullname"
        />
        {errors.fullname && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput icon={<Email />} onChangeText={onChange} />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput icon={<Lock />} onChangeText={onChange} isPassword />
          )}
          name="password"
        />
      </View>
      <Text style={styles.description}>
        {' '}
        By Creating an account you accept the Terms & Condition of the Company
      </Text>
    </Screen>
  );
}
const styles = StyleSheet.create({
  description: {
    fontSize: 13,
    color: '#3C3C43',
    marginStart: '10%',
    marginEnd: '10%',
    marginTop: 20,
  },
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

import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Eye from '../icons/Eye';

const AppInput = ({
  icon,
  placeholder,
  keyboardType,
  isPassword = false,
  error = undefined,
  ...props
}: any): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        style={styles.text}
        {...props}
      />
      {isPassword && (
        <View style={styles.icon}>
          <Eye />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    marginStart: '10%',
    marginEnd: '10%',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
  },
  icon: {
    flex: 1,
  },
  text: {
    flex: 9,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '3%',
    color: '#3C3C43',
    fontSize: 16,
    paddingLeft: 24,
    textAlign: 'left',
    backgroundColor: '#00000000',
  },
});

export default AppInput;

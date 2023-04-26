import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import TextComponent from './TextComponent';

import normalize from '@helpers/normalizeFontSize';

import {Colors} from '@styles/colors';
import {ButtonComponentProps} from '@types';

const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <TouchableOpacity
      testID="ButtonComponent"
      {...props}
      onPress={props.onPress}
      activeOpacity={0.6}
      style={styles.button}>
      <TextComponent text={props.label} textWhite bold medium center />
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.blue,
    flexGrow: 1,
    borderRadius: normalize(10),
    height: normalize(50),
    justifyContent: 'center',
  },
});

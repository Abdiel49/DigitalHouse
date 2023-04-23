import {StyleSheet, Text} from 'react-native';
import React from 'react';

import normalize from '@helpers/normalizeFontSize';

import {Colors} from '@styles/colors';
import {TextComponentProps} from '@types';

const TextComponent = (props: TextComponentProps) => {
  return (
    <Text
      style={[
        styles.text,
        props.title && styles.typeTitle,
        props.body && styles.typeBody,
        props.grey && styles.greyColor,
        props.center && styles.centerText,
        props.bold && styles.boldText,
        props.isUnderline && styles.underline,
        props.capitalize && styles.capitalize,
        props.style,
      ]}>
      {props.text}
    </Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  text: {
    margin: 0,
    padding: 0,
    fontSize: normalize(16),
    color: Colors.black,
    // fontFamily: 'Poppins-Regular',
  },
  typeTitle: {
    color: Colors.black,
    fontSize: normalize(20),
    fontWeight: '800',
  },
  typeBody: {
    color: Colors.black,
    fontSize: normalize(15),
    fontWeight: '400',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  greyColor: {
    color: Colors.grey,
  },
  centerText: {
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    // fontFamily: 'Poppins-Bold',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
});

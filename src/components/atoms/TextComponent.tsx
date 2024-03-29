import {StyleSheet, Text} from 'react-native';
import React from 'react';

import normalize from '@helpers/normalizeFontSize';

import {Colors} from '@styles/colors';
import {TextComponentProps} from '@types';

const TextComponent = (props: TextComponentProps) => {
  return (
    <Text
      {...props}
      numberOfLines={props.numberOfLines}
      style={[
        styles.text,
        props.title && styles.typeTitle,
        props.body && styles.typeBody,
        props.medium && styles.mediumType,
        props.small && styles.small,
        props.grey && styles.greyColor,
        props.center && styles.centerText,
        props.bold && styles.boldText,
        props.textWhite && styles.whiteColor,
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
  mediumType: {
    fontSize: normalize(14),
  },
  small: {
    fontSize: normalize(12),
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
    fontWeight: '800',
    // fontFamily: 'Poppins-Bold',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  whiteColor: {
    color: Colors.white,
  },
  alingLeft: {
    textAlign: 'left',
  },
});

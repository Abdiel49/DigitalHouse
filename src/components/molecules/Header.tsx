import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextComponent from '@components/atoms/TextComponent';
import {Colors} from '@styles/colors';
import normalize from '@helpers/normalizeFontSize';

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <View style={styles.header}>
      <TextComponent text={props.title} title bold />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.purpleLight,
    width: '100%',
    // height: '20%',
    height: normalize(100),
    justifyContent: 'flex-end',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(24),
  },
});

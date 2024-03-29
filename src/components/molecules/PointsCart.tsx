import {StyleSheet, View} from 'react-native';
import React from 'react';

import TextComponent from '@components/atoms/TextComponent';

import normalize from '@helpers/normalizeFontSize';
import {formatNumber} from '@helpers/numberTools';

import {Colors} from '@styles/colors';
import {PointsCartProps} from '@types';

const PointsCart = (props: PointsCartProps) => {
  return (
    <View style={styles.content}>
      <View style={styles.mounthContainer}>
        <TextComponent
          testID="mounth"
          text={props.mounth}
          style={styles.mounthText}
        />
      </View>
      <TextComponent
        testID="points"
        text={`${formatNumber(props.points)} pts.`}
        style={styles.pointsText}
        center
      />
    </View>
  );
};

export default PointsCart;

const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.blue,
    borderRadius: normalize(20),
    width: normalize(286),
    height: normalize(153),
    padding: normalize(20),
    justifyContent: 'center',
  },
  mounthContainer: {
    position: 'absolute',
    left: normalize(20),
    top: normalize(20),
  },
  mounthText: {
    fontWeight: '800',
    fontSize: normalize(16),
    color: Colors.white,
  },
  pointsText: {
    fontWeight: '800',
    fontSize: normalize(32),
    color: Colors.white,
  },
});

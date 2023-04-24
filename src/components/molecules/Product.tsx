import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import ImageComponent from '@components/atoms/ImageComponent';
import TextComponent from '@components/atoms/TextComponent';

import normalize from '@helpers/normalizeFontSize';

import {Colors} from '@styles/colors';
import {gStyles} from '@styles/gStyles';
import {ProductProps} from '@types';

const Product = (props: ProductProps) => {
  const onPress = () => {
    props.onPress && props.onPress(props.product);
  };

  return (
    <TouchableOpacity
      style={[styles.content, gStyles.gap10]}
      activeOpacity={0.6}
      onPress={onPress}>
      <View style={styles.imageContent}>
        <ImageComponent
          source={{uri: props.product.image}}
          style={styles.image}
        />
      </View>
      <View style={styles.centerContent}>
        <TextComponent
          text={props.product.product}
          numberOfLines={2}
          bold
          medium
          alingLeft
        />
        <TextComponent
          text={new Date(props.product.createdAt).toLocaleDateString()}
          small
          alingLeft
        />
      </View>
      <View style={styles.pointsContent}>
        <TextComponent
          text={props.product.is_redemption ? '-' : '+'}
          bold
          body
          style={
            props.product.is_redemption ? styles.redColor : styles.greenColor
          }
        />
        <TextComponent text={props.product.points} bold body />
        <TextComponent text={' >'} bold body />
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageContent: {
    flexGrow: 1,
    maxWidth: '16%',
  },
  image: {
    width: normalize(55),
    height: normalize(55),
    backgroundColor: Colors.grey2,
    borderRadius: normalize(10),
    overflow: 'hidden',
  },
  centerContent: {
    flexGrow: 1,
    maxWidth: '53%',
  },
  pointsContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexGrow: 1,
    maxWidth: '24%',
  },
  greenColor: {
    color: Colors.green,
  },
  redColor: {
    color: Colors.red,
  },
});

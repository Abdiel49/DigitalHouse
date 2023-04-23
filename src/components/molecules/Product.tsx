import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageComponent from '@components/atoms/ImageComponent';
import TextComponent from '@components/atoms/TextComponent';
import normalize from '@helpers/normalizeFontSize';
import {Colors} from '@styles/colors';
import {gStyles} from '@styles/gStyles';

interface Product {
  createdAt: Date;
  name: string;
  points: number;
  image: string;
  isRedemption: boolean;
  id: string;
}
export interface ProductProps {
  product: Product;
}

const Product = (props: ProductProps) => {
  return (
    <TouchableOpacity style={[styles.content, gStyles.gap10]}>
      <View>
        <ImageComponent
          source={{uri: props.product.image}}
          style={styles.image}
        />
      </View>
      <View style={styles.centerContent}>
        <TextComponent text={props.product.name} bold medium alingLeft />
        <TextComponent
          text={props.product.createdAt.toLocaleDateString()}
          small
          alingLeft
        />
      </View>
      <View style={styles.pointsContent}>
        <TextComponent
          text={props.product.isRedemption ? '-' : '+'}
          bold
          body
          style={
            props.product.isRedemption ? styles.redColor : styles.greenColor
          }
        />
        <TextComponent text={props.product.points} bold body />
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: normalize(55),
    height: normalize(55),
    backgroundColor: Colors.grey2,
    borderRadius: normalize(10),
    overflow: 'hidden',
  },
  centerContent: {},
  pointsContent: {
    flexDirection: 'row',
  },
  greenColor: {
    color: Colors.green,
  },
  redColor: {
    color: Colors.red,
  },
});

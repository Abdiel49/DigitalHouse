import {StyleSheet, View} from 'react-native';
import React from 'react';

import Product from '@components/molecules/Product';

import normalize from '@helpers/normalizeFontSize';

import {Colors} from '@styles/colors';
import {ProductsProps} from '@types';
// import {ProductData} from '@types';

const Products = (props: ProductsProps) => {
  return (
    <View style={styles.content}>
      {props.products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  content: {
    gap: normalize(10),
    backgroundColor: Colors.white,
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(10),
    borderRadius: normalize(10),
  },
});

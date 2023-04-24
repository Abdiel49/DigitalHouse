import {StyleSheet, View} from 'react-native';
import React from 'react';

import {useAppSelector} from '@redux/hooks';

import Product from '@components/molecules/Product';

import normalize from '@helpers/normalizeFontSize';

import {Colors} from '@styles/colors';

const Products = () => {
  const {products} = useAppSelector(state => state.products);

  return (
    <View style={styles.content}>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  content: {
    // flex: 1,
    gap: normalize(10),
    backgroundColor: Colors.white,
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(10),
    borderRadius: normalize(10),
    // maxHeight: '20%',
  },
});

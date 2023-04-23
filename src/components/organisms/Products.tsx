import {StyleSheet, View} from 'react-native';
import React from 'react';
import Product from '@components/molecules/Product';

const Products = () => {
  return (
    <View>
      <Product
        product={{
          ..._productData,
          isRedemption: _productData.is_redemption,
          name: _productData.product,
          createdAt: new Date(_productData.createdAt),
        }}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});

const _productData = {
  createdAt: '2022-12-09T10:20:00.909Z',
  product: 'Fantastic Granite Bacon',
  points: 42416,
  image: 'https://loremflickr.com/640/480/technics',
  is_redemption: false,
  id: '3',
};

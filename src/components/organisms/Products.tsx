import {StyleSheet, View} from 'react-native';
import React from 'react';
import Product from '@components/molecules/Product';
import normalize from '@helpers/normalizeFontSize';
import {Colors} from '@styles/colors';

const Products = () => {
  return (
    <View style={styles.content}>
      {products.map(product => (
        <Product
          key={product.id}
          product={{
            ...product,
            isRedemption: product.is_redemption,
            name: product.product,
            createdAt: new Date(product.createdAt),
          }}
        />
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

const products = [
  {
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 16434,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: false,
    id: '1',
  },
  {
    createdAt: '2022-12-09T17:02:51.904Z',
    product: 'Recycled Plastic Tuna',
    points: 92984,
    image: 'https://loremflickr.com/640/480/technics',
    is_redemption: false,
    id: '2',
  },
  {
    createdAt: '2022-12-09T10:20:00.909Z',
    product: 'Fantastic Granite Bacon',
    points: 42416,
    image: 'https://loremflickr.com/640/480/technics',
    is_redemption: false,
    id: '3',
  },
  {
    createdAt: '2022-12-09T00:30:23.966Z',
    product: 'Fantastic Fresh Gloves',
    points: 23913,
    image: 'https://loremflickr.com/640/480/city',
    is_redemption: true,
    id: '4',
  },
  {
    createdAt: '2022-12-08T18:54:56.243Z',
    product: 'Rustic Rubber Bacon',
    points: 69814,
    image: 'https://loremflickr.com/640/480/people',
    is_redemption: true,
    id: '5',
  },
  {
    createdAt: '2022-12-09T14:12:11.097Z',
    product: 'Tasty Concrete Cheese',
    points: 81585,
    image: 'https://loremflickr.com/640/480/business',
    is_redemption: false,
    id: '6',
  },
];

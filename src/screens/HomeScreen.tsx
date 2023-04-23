import {View} from 'react-native';
import React, {useState} from 'react';

import ScreenView from '@components/atoms/ScreenView';
import TextComponent from '@components/atoms/TextComponent';
import PointsCart from '@components/molecules/PointsCart';
import Products from '@components/organisms/Products';

import {gStyles} from '@styles/gStyles';
import ButtonComponent from '@components/atoms/ButtonComponent';
import FilterButtons from '@components/molecules/FilterButtons';

const HomeScreen = () => {
  const [products, setProducts] = useState(_products);

  return (
    <ScreenView scrollStyle={gStyles.gap30}>
      <View style={gStyles.gap10}>
        <TextComponent text={'Bienvenido de vuelta!'} title />
        <TextComponent text={'Ruben Rodriguez'} body />
      </View>
      <View>
        <TextComponent text={'TUS PUNTOS'} title grey uppercase />
      </View>
      <View style={gStyles.center}>
        <PointsCart mounth="Diciembre" points={10000} />
      </View>
      <TextComponent text={'TUS MOVIMIENTOS '} title grey uppercase />
      <Products products={products} />
      <FilterButtons />
    </ScreenView>
  );
};

export default HomeScreen;

const _products = [
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

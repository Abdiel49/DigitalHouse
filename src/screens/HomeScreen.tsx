import {View} from 'react-native';
import React from 'react';

import ScreenView from '@components/atoms/ScreenView';
import TextComponent from '@components/atoms/TextComponent';
import PointsCart from '@components/molecules/PointsCart';
import Products from '@components/organisms/Products';
import FilterButtons from '@components/molecules/FilterButtons';

// import {useFetch} from '@hooks/useFetch';

import {gStyles} from '@styles/gStyles';
import {useFetch} from '@hooks/useFetch';
import {ProductData} from '@types';
import {config} from '@config/appConfig';
// import {ProductData} from '@types';
// import {config} from '@config/appConfig';

const HomeScreen = () => {
  const [products] = useFetch<ProductData[]>(config.productsApi);

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
      <Products products={products || []} />
      <FilterButtons />
    </ScreenView>
  );
};

export default HomeScreen;

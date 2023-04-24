import {View} from 'react-native';
import React, {useCallback, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {setAllProducts} from '@redux/slices';

import ScreenView from '@components/atoms/ScreenView';
import TextComponent from '@components/atoms/TextComponent';
import PointsCart from '@components/molecules/PointsCart';
import Products from '@components/organisms/Products';
import FilterButtons from '@components/molecules/FilterButtons';

import {getProducts} from '@services/products';

import {config} from '@config/appConfig';
import {gStyles} from '@styles/gStyles';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const points = useAppSelector(state => state.products.totalPoints);

  const loadProducts = useCallback(async () => {
    const products = await getProducts(config.productsApi);
    dispatch(setAllProducts(products));
  }, [dispatch]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      loadProducts();
    }
    return () => {
      mounted = false;
    };
  }, [loadProducts]);

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
        <PointsCart mounth="Diciembre" points={points} />
      </View>
      <TextComponent text={'TUS MOVIMIENTOS '} title grey uppercase />
      <Products />
      <FilterButtons />
    </ScreenView>
  );
};

export default HomeScreen;

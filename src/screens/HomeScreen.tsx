import {View} from 'react-native';
import React, {useCallback, useEffect} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigation/AppNavigation';

import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {
  filterProductsByRedemtion,
  setAllProducts,
  setCurrentProduct,
} from '@redux/slices';

import ScreenView from '@components/atoms/ScreenView';
import TextComponent from '@components/atoms/TextComponent';
import PointsCart from '@components/molecules/PointsCart';
import Products from '@components/organisms/Products';
import FilterButtons from '@components/molecules/FilterButtons';

import {getProducts} from '@services/products';

import {config} from '@config/appConfig';
import {gStyles} from '@styles/gStyles';
import {ProductData, ProductsFilterTypes} from '@types';

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HOME_SCREEN'
>;

const HomeScreen = (props: HomeScreenProps) => {
  const dispatch = useAppDispatch();
  const points = useAppSelector(state => state.products.totalPoints);

  const loadProducts = useCallback(async () => {
    const products = await getProducts(config.productsApi);
    dispatch(setAllProducts(products));
  }, [dispatch]);

  const onSelectProduct = (product: ProductData) => {
    dispatch(setCurrentProduct(product));
    props.navigation.navigate('MOTION_DETAIL');
  };

  const handleChangeFilter = (filterType: ProductsFilterTypes) => {
    dispatch(filterProductsByRedemtion(filterType));
  };

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
    <ScreenView scrollStyle={[gStyles.gap30, gStyles.ap]}>
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
      <Products onSelectOneProduct={onSelectProduct} />
      <FilterButtons onChangeFilter={handleChangeFilter} />
    </ScreenView>
  );
};

export default HomeScreen;

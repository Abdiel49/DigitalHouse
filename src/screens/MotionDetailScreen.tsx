import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigation/AppNavigation';

import {useAppSelector} from '@redux/hooks';

import ScreenView from '@components/atoms/ScreenView';
import TextComponent from '@components/atoms/TextComponent';
import ImageComponent from '@components/atoms/ImageComponent';
import ButtonComponent from '@components/atoms/ButtonComponent';
import {Colors} from '@styles/colors';
import Header from '@components/molecules/Header';
import {gStyles} from '@styles/gStyles';
import normalize from '@helpers/normalizeFontSize';

type MotionDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'MOTION_DETAIL'
>;

const MotionDetailScreen = (props: MotionDetailProps) => {
  const product = useAppSelector(state => state.products.currentProduct);

  const goBack = () => {
    props.navigation.goBack();
  };

  const changeTitle = useCallback(() => {
    if (product) {
      props.navigation.setOptions({
        headerTitle: product.product,
      });
    }
  }, [props.navigation, product]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      changeTitle();
    }
    return () => {
      mounted = false;
    };
  }, [changeTitle]);

  return (
    <ScreenView scrollStyle={[gStyles.gap30, gStyles.pb]}>
      <StatusBar backgroundColor={Colors.purpleLight} />
      <Header title={(product && product.product) || ''} />
      <View style={[styles.imageContainer, gStyles.mh, gStyles.shadown1]}>
        <ImageComponent source={{uri: product?.image}} style={styles.image} />
      </View>

      <View style={[gStyles.gap10, gStyles.mh]}>
        <TextComponent
          text={'Detalles del producto:'}
          uppercase
          grey
          bold
          medium
        />
        <TextComponent
          bold
          text={`Comprado el ${
            product && new Date(product?.createdAt).toLocaleDateString()
          }`}
        />
      </View>

      <View style={[gStyles.gap10, gStyles.mh]}>
        <TextComponent
          text={'Con esta compra acumulaste:'}
          uppercase
          grey
          bold
          medium
        />
        <TextComponent text={`${product && product.points} Puntos`} bold />
      </View>

      <View style={[gStyles.gap10, gStyles.mh]}>
        <ButtonComponent label="Aceptar" onPress={goBack} />
      </View>
    </ScreenView>
  );
};

export default MotionDetailScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.purpleLight,
    width: '100%',
    height: '20%',
    justifyContent: 'center',
  },
  imageContainer: {
    // width: '100%',?
    flexGrow: 1,
    height: normalize(350),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: normalize(10),
  },
  image: {
    width: normalize(200),
    height: normalize(200),
  },
});

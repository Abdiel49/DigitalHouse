import {View} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigation/AppNavigation';

import {useAppSelector} from '@redux/hooks';

import ScreenView from '@components/atoms/ScreenView';
import TextComponent from '@components/atoms/TextComponent';

type MotionDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'MOTION_DETAIL'
>;

const MotionDetailScreen = () => {
  const product = useAppSelector(state => state.products.currentProduct);

  return (
    <ScreenView>
      <View>
        <TextComponent text={product?.product || ''} />
      </View>
    </ScreenView>
  );
};

export default MotionDetailScreen;

import {View} from 'react-native';
import React from 'react';
import ScreenView from '@components/atoms/ScreenView';
import TextComponent from '@components/atoms/TextComponent';

const HomeScreen = () => {
  return (
    <ScreenView>
      <View>
        <TextComponent text={'Bienvenido de vuelta!'} title />
        <TextComponent text={'Ruben Rodriguez'} body />
      </View>
    </ScreenView>
  );
};

export default HomeScreen;

import {View} from 'react-native';
import React from 'react';
import ScreenView from '@components/atoms/ScreenView';
import TextComponent from '@components/atoms/TextComponent';
import {gStyles} from '@styles/gStyles';

const HomeScreen = () => {
  return (
    <ScreenView scrollStyle={gStyles.gap30}>
      <View style={gStyles.gap10}>
        <TextComponent text={'Bienvenido de vuelta!'} title />
        <TextComponent text={'Ruben Rodriguez'} body />
      </View>
      <View>
        <TextComponent text={'TUS PUNTOS'} title grey />
      </View>
    </ScreenView>
  );
};

export default HomeScreen;

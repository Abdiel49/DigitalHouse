import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

import {gStyles} from '@styles/gStyles';
import {ScreenViewProps} from '@types';

const ScreenView = (props: ScreenViewProps) => {
  return (
    <SafeAreaView style={[gStyles.safeArea, props.safeAreaStyle]}>
      {props.headerFixed && props.headerFixed()}
      <ScrollView
        contentContainerStyle={[
          gStyles.mainScreen,
          props.withMargiH && gStyles.paddingHS,
          gStyles.background,
          props.scrollStyle,
        ]}>
        {props.headerScroll && props.headerScroll()}
        {props.children}
      </ScrollView>
      {props.endScrollChildren && props.endScrollChildren()}
    </SafeAreaView>
  );
};

export default ScreenView;

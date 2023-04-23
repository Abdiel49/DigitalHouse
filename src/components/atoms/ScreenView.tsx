import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

import {gStyles} from '@styles/gStyles';
import {ScreenViewProps} from '@types';

const ScreenView = (props: ScreenViewProps) => {
  return (
    <SafeAreaView style={[gStyles.safeArea, props.safeAreaStyle]}>
      <ScrollView
        contentContainerStyle={[
          gStyles.mainScreen,
          gStyles.background,
          props.scrollStyle,
        ]}>
        {props.children}
      </ScrollView>
      {props.endScrollChildren && props.endScrollChildren()}
    </SafeAreaView>
  );
};

export default ScreenView;

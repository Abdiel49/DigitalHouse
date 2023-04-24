import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigation/AppNavigation';
import ScreenView from '@components/atoms/ScreenView';

type MotionDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'MOTION_DETAIL'
>;

const MotionDetailScreen = () => {
  return (
    <ScreenView>
      <Text>MotionDetailScreen</Text>
    </ScreenView>
  );
};

export default MotionDetailScreen;

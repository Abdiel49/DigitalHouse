import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '@screens/HomeScreen';
import MotionDetailScreen from '@screens/MotionDetailScreen';

export type RootStackParamList = {
  HOME_SCREEN: undefined;
  MOTION_DETAIL: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HOME_SCREEN"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MOTION_DETAIL"
          component={MotionDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

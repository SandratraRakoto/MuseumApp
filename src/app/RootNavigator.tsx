import React from 'react';
import {app} from '@/main';

import {Provider} from 'react-redux';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '@/modules/museum/presentation/screens/HomeScreen';
import NotFoundScreen from './+not-found';
import MuseumScreen from '@/modules/museum/presentation/screens/MuseumScreen';

export type RootStackParamList = {
  Home: undefined;
  Museum: {id: string};
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootScreenNavigationProp<Screen extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, Screen>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = 'Home';

  return (
    <Provider store={app.store}>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Museum',
          }}
        />
        <Stack.Screen name="Museum" component={MuseumScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
    </Provider>
  );
}

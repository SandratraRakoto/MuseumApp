import React from 'react';

import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import RootNavigator, {RootStackParamList} from '@/app/RootNavigator';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [''],
  config: {
    screens: {
      Home: '',
      Museum: '/:id',
      NotFound: '*',
    },
  },
};

export default function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator />
    </NavigationContainer>
  );
}

import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackScreenProps} from '@/app/RootNavigator';

export default function NotFoundScreen({
  navigation,
}: Readonly<RootStackScreenProps<'NotFound'>>) {
  return (
    <View style={styles.container}>
      <Text>This screen doesn't exist.</Text>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.replace('Home')}>
        <Text style={styles.textLink}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  textLink: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});

import React, {FC} from 'react';

import {Colors} from '@/constants/Colors';
import {MaterialIcons} from '@expo/vector-icons';
import {StyleSheet, Text, View} from 'react-native';

type IconTextProps = {
  text: string;
  iconName: 'phone' | 'location-pin' | 'language';
  variant?: 'bold' | 'link';
};
const IconText: FC<IconTextProps> = ({text, iconName, variant}) => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name={iconName}
        size={24}
        color={Colors.light.link}
        style={styles.icon}
      />
      <Text
        style={[
          styles.text,
          variant === 'bold' ? styles.bold : undefined,
          variant === 'link' ? styles.link : undefined,
        ]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderRadius: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    color: Colors.light.link,
  },
});

export default IconText;

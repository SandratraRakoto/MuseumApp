import React from 'react';

import {type ComponentProps} from 'react';
import {Alert, Linking, Text, TouchableOpacity} from 'react-native';

type Props = Omit<ComponentProps<typeof Text>, 'href'> & {href: string};

export function ExternalLink({href, children, ...rest}: Props) {
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(href);

    if (supported) {
      await Linking.openURL(href);
    } else {
      Alert.alert(`Don't know how to open this URL: ${href}`);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text {...rest}>{children}</Text>
    </TouchableOpacity>
  );
}

import ParallaxScrollView from '@/modules/museum/presentation/components/ParallaxScrollView';
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectMuseumById} from '@/modules/museum/selectors/museum.selector';
import {formatAddress} from '@/shared/address.utils';
import {ExternalLink} from '@/modules/museum/presentation/components/ExternalLink';
import IconText from '@/modules/museum/presentation/components/IconText';
import {RootStackScreenProps} from '@/app/RootNavigator';

export default function MuseumScreen({
  navigation,
  route,
}: Readonly<RootStackScreenProps<'Museum'>>) {
  const {id} = route.params;

  const museum = useSelector(selectMuseumById(id ?? ''));

  useEffect(() => {
    navigation.setOptions({title: museum?.name});
  }, [navigation, museum]);

  if (!museum) {
    navigation.replace('NotFound');
    return null;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
      headerImage={
        <Image
          source={{
            uri: 'https://cdn-imgix.headout.com/media/images/3cc1e44db9183bbe3b72511e5725a962-243-paris-%23004-003-paris-%7C-eiffel-tower-01.jpg?w=882&h=450&crop=faces&auto=compress%2Cformat&fit=min',
          }}
          style={styles.image}
        />
      }>
      <Text style={styles.title}>{museum.name}</Text>
      <Text>{museum.interest}</Text>
      <Text>{museum.history}</Text>
      <Text>{museum.is_remarkable_for}</Text>
      <View>
        <Text style={styles.subtitle}>Contacts</Text>
        <IconText iconName="phone" variant="bold" text={museum.phoneNumber} />
        <IconText
          iconName="location-pin"
          text={formatAddress(museum.address)}
        />
        <ExternalLink href={museum.website}>
          <IconText iconName="language" variant="link" text={museum.website} />
        </ExternalLink>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

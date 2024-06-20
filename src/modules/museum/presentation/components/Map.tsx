import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {LatLng, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

type GoogleMapProps = {
  markers: LatLng[];
};

const GoogleMap: FC<GoogleMapProps> = ({markers}) => {
  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map}>
        {markers.map(marker => (
          <Marker key={marker.latitude} coordinate={marker} />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GoogleMap;

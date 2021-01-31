import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Headline, Title} from '../../components/typography';
import {Header} from '../../components/layout';
import HeaderMenu from '../../components/layout/header-menu';
import dimensions from '../../theme/dimensions';
import Clock from '../../components/clock';
import Calendar from '../../components/calendar';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: dimensions.s,
  },
  mapContainer: {
    height: 360,
    margin: dimensions.s,
  },
});

const Dashboard = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition((res) => {
      setLocation({
        ...res.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    });
  }, []);

  return (
    <View>
      <Header headerLeft={<HeaderMenu />} />
      <Headline style={styles.container}>Bienvenido</Headline>
      <Calendar style={styles.container} />
      <Clock style={styles.container} />
      {location ? (
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={StyleSheet.absoluteFillObject}
            initialRegion={location}
            showsUserLocation
          />
        </View>
      ) : (
        <Title>Loading</Title>
      )}
    </View>
  );
};

export default Dashboard;

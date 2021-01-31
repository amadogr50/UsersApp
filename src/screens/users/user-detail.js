import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Header} from '../../components/layout';
import HeaderBack from '../../components/layout/header-back';
import {Body, Subtitle, Title} from '../../components/typography';
import UserDetailItem from './user-detail-item';
import dimensions from '../../theme/dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {getAlbumsByUserRequest} from '../../redux/actions/albums';
import {
  getAlbumsByUserFactory,
  getUserByIdFactory,
} from '../../redux/selectors';
import {getUserByIdRequest} from '../../redux/actions/users';
import AlbumItem from './album-item';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.s,
  },
  titleContainer: {
    marginBottom: dimensions.s,
  },
});

function UserDetail({navigation, route}) {
  const {
    params: {id},
  } = route;

  const dispatch = useDispatch();

  const user = useSelector(getUserByIdFactory(id));

  useEffect(() => {
    if (!user) {
      dispatch(getUserByIdRequest(id));
    }
  }, [dispatch, id, user]);

  const albums = useSelector(getAlbumsByUserFactory(id));

  useEffect(() => {
    dispatch(getAlbumsByUserRequest(id));
  }, [dispatch, id]);

  return (
    <View>
      <Header>
        <HeaderBack />
      </Header>
      {user ? (
        <>
          <Title style={[styles.container, styles.titleContainer]}>
            {user.name}
          </Title>
          <View style={styles.container}>
            <UserDetailItem
              label={'Email'}
              title={user.email}
              icon={'email'}
              onPress={() => {}}
            />
            <UserDetailItem
              label={'Username'}
              title={user.username}
              icon={'person'}
              onPress={() => {}}
            />
            <UserDetailItem
              label={'Phone'}
              title={user.phone}
              icon={'phone'}
              onPress={() => {}}
            />
            <UserDetailItem
              label={'Website'}
              title={user.website}
              icon={'web'}
              onPress={() => {}}
            />
            <UserDetailItem
              label={'Address'}
              title={`${user?.address?.street} ${user?.address?.suite} ${user?.address?.city}`}
              icon={'location-on'}
              onPress={() => {}}
            />
          </View>
          {albums.length > 0 && (
            <>
              <Subtitle style={[styles.container, styles.titleContainer]}>
                Albums
              </Subtitle>
              <FlatList
                horizontal
                data={albums}
                contentContainerStyle={styles.container}
                renderItem={({item: album}) => <AlbumItem album={album} />}
              />
            </>
          )}
        </>
      ) : (
        <Body>Loading</Body>
      )}
    </View>
  );
}

export default UserDetail;

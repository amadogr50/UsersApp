import React, {useCallback, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersRequest} from '../../redux/actions/users';
import UserItem from './user-item';
import Separator from '../../components/common/separator';
import {Header} from '../../components/layout';
import HeaderMenu from '../../components/layout/header-menu';
import HeaderTitle from '../../components/layout/header-title';
import {getUsers} from '../../redux/selectors';
import ROUTES from '../../navigation/routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function UsersList({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  const users = useSelector(getUsers);

  const keyExtractor = useCallback((user) => user.id, []);

  const onPress = useCallback(
    (user) => {
      navigation.navigate(ROUTES.USER_DETAIL, {id: user.id});
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item: user}) => (
      <UserItem
        user={user}
        onPress={() => {
          onPress(user);
        }}
      />
    ),
    [onPress],
  );

  return users.length ? (
    <View style={styles.container}>
      <Header
        headerLeft={<HeaderMenu />}
        headerCenter={<HeaderTitle title="Users" />}
      />
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={Separator}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  ) : (
    <Text>Loading</Text>
  );
}

export default UsersList;

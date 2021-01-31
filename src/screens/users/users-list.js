import React, {useCallback, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersRequest} from '../../redux/actions/users';
import UserItem from './user-item';
import {ROUTES} from '../../navigation';
import Separator from '../../components/common/separator';
import {Header} from '../../components/layout';
import HeaderMenu from '../../components/layout/header-menu';
import HeaderTitle from '../../components/layout/header-title';

function UsersList({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  const users = useSelector((state) => state.users.users);

  const keyExtractor = useCallback((user) => user.id, []);

  const onPress = useCallback(
    (user) => {
      navigation.navigate(ROUTES.USER_DETAIL, {id: user.id});
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item: user}) => <UserItem user={user} onPress={onPress} />,
    [onPress],
  );

  return users.length ? (
    <View>
      <Header>
        <HeaderMenu />
        <HeaderTitle title="Users" />
      </Header>
      <FlatList
        data={users}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        keyExtractor={keyExtractor}
      />
    </View>
  ) : (
    <Text>Loading</Text>
  );
}

export default UsersList;

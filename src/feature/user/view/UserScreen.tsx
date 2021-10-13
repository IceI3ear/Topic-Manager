import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {userInfo} from '../../../recoil/recoil-state';
import {DetailUser} from './components/detail/detail';

export const UserContainer = () => {
  const user = useRecoilState(userInfo);

  useEffect(() => {
    console.log('User Info : ', user);
  }, [user]);

  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="THÔNG TIN SINH VIêN" onback={true} />
      <DetailUser user={user[0]} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {userInfo} from '../../../recoil/recoil-state';
import {DetailUser} from './components/detail/detail';

export const UserContainer = () => {
  const user: any = useRecoilState(userInfo);
  const type: number = user[0].type;

  useEffect(() => {
    console.log('User Info : ', user);
  }, [user]);

  return type === 1 ? (
    <View style={styles.container}>
      <HeaderTitleComponent title="THÔNG TIN SINH VIêN" onback={true} />
      <DetailUser user={user[0]} />
    </View>
  ) : (
    <View style={styles.container}>
      <HeaderTitleComponent title="THÔNG TIN GIẢNG VIÊN" onback={true} />
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

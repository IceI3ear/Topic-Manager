import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {userInfo} from '../../../recoil/recoil-state';
import {ProgressScreen} from '../../progress';
import {AddFormComponent} from './components/addform/add.form.component';

export const ProposeContainer = () => {
  const user: any = useRecoilState(userInfo);
  const type: number = user[0].type;
  return type === 1 ? (
    <View style={styles.container}>
      <HeaderTitleComponent title="ĐỀ XUẤT ĐỀ TÀI" onback={false} />
      <AddFormComponent />
    </View>
  ) : (
    <View style={styles.container}>
      <HeaderTitleComponent title="PHÊ DUYỆT ĐỀ XUẤT" onback={false} />
      <ProgressScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

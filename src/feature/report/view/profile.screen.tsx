import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {userInfo} from '../../../recoil/recoil-state';
import {ReportContent} from './component/report-content/content-reportComponent';

export const ReportContainer = () => {
  const user: any = useRecoilState(userInfo);
  const type: number = user[0].type;
  return type === 1 ? (
    <View style={styles.container}>
      <HeaderTitleComponent title="BÁO CÁO TIẾN ĐỘ" onback={false} />
      <ReportContent />
    </View>
  ) : (
    <View style={styles.container}>
      <HeaderTitleComponent title="PHÊ DUYỆT TIẾN ĐỘ" onback={false} />
      <ReportContent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

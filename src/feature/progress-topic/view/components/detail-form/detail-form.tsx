import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitleComponent} from '../../../../../libraries/header_title/header-title.component';
import {IProgressTopic} from '../../../../../types';
import {DetailFormTeacher} from './detail-form-teacher/detail-from-teacher';

export const DetailFormContainer = (props: any) => {
  const itemRowDetail: IProgressTopic =
    props.navigation.getParam('valueReport');
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="ĐÁNH GIÁ TIẾN ĐỘ" onback={true} />
      <DetailFormTeacher itemRowDetail={itemRowDetail} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

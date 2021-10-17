import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitleComponent} from '../../../../libraries/header_title/header-title.component';
import {IProgress} from '../../../../types';
import {DetailForm} from '../detail-form/detail-form-componet';

export const FormReportContainer = (props: any) => {
  const itemRowDetail: IProgress = props.navigation.getParam('valueReport');
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="GỬI BÁO CÁO" onback={true} />
      <DetailForm itemRowDetail={itemRowDetail} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

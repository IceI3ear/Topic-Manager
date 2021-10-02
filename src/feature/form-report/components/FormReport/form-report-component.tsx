import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitleComponent} from '../../../../libraries/header_title/header-title.component';
import {DetailForm} from '../detail-form/detail-form-componet';

export const FormReportContainer = () => {
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="GỬI BÁO CÁO" onback={true} />
      <DetailForm />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

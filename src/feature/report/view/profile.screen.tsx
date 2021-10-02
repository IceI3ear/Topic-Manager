import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {ReportContent} from './component/report-content/content-reportComponent';

export const ReportContainer = () => {
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="BÁO CÁO TIẾN ĐỘ" onback={false} />
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

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitleComponent} from '../../../../../libraries/header_title/header-title.component';

export const DetailAcpectContainer = () => {
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="PHÊ DUYỆT ĐỀ TÀI" onback={true} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

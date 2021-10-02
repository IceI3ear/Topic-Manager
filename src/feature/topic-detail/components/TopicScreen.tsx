import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {DetailTopic} from './detail/detail';

export const TopicContainer = () => {
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="THÔNG TIN ĐỀ TÀI" onback={true} />
      <DetailTopic />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {DetailTopicUser} from './components/detail-topic-user/detail';

export const TopicUserContainer = () => {
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="ĐỀ TÀI CỦA TÔI" onback={true} />
      <DetailTopicUser />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

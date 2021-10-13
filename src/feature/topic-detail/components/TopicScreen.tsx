import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {ITopic} from '../../../types';
import {DetailTopic} from './detail/detail';

export const TopicContainer = (props: any) => {
  const itemRowDetail: ITopic = props.navigation.getParam('value');
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="THÔNG TIN ĐỀ TÀI" onback={true} />
      <DetailTopic itemRowDetail={itemRowDetail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

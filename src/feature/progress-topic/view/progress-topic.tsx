import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {IProgressTopic} from '../../../types';
import {ListProgressTopic} from './components/list/list-progress-topic';

export const ProgressTopicContainer = (props: any) => {
  const itemRowDetail: IProgressTopic =
    props.navigation.getParam('valueReport');
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="CHI TIẾT TIẾN ĐỘ" onback={true} />
      <ListProgressTopic itemRowDetail={itemRowDetail} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {ListTopicComponent} from './components/listTopicComponents/list-topic.component';
import {SearchTopicComponent} from './components/searchTopicComponents/search-topicComponents';

export const RegisterContainer = () => {
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="ĐĂNG KÍ ĐỀ TÀI" onback={false} />
      <SearchTopicComponent />
      <ListTopicComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

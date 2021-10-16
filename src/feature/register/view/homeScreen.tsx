import axios from 'axios';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {URL_API} from '../../../helper/app-config';

import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {topicData} from '../../../recoil/recoil-state';
import {ITopic} from '../../../types';
import {ListTopicComponent} from './components/listTopicComponents/list-topic.component';

export const RegisterContainer = () => {
  const [dataTopic, setDataTopic] = useRecoilState<ITopic>(topicData);

  const getTopicData = async () => {
    axios
      .get(URL_API + '/api/TopicData/GetAll')
      .then(res => {
        console.log('API RESPONSE', res.data);
        setDataTopic(res.data);
      })
      .catch(error => {
        console.log('ERROR API: ', error);
      });
  };

  useEffect(() => {
    getTopicData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTopic]);
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="ĐĂNG KÍ ĐỀ TÀI" onback={false} />
      <ListTopicComponent dataTopic={dataTopic} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

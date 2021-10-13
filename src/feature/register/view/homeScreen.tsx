import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {ITopic} from '../../../types';
import {ListTopicComponent} from './components/listTopicComponents/list-topic.component';

export const RegisterContainer = () => {
  const [dataTopic, setDataTopic] = useState<ITopic>({
    description: '',
    id: 0,
    linkFile: '',
    specialityName: '',
    status: true,
    student: '',
    teacher: '',
    topicName: '',
    studentID: '',
  });

  const getTopicData = async () => {
    axios
      .get('http://192.168.1.3:5000/api/TopicData/GetAll')
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
  }, []);
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

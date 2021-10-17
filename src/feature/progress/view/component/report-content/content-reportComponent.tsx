import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import {useRecoilState} from 'recoil';
import {URL_API} from '../../../../../helper/app-config';
import {userInfo} from '../../../../../recoil/recoil-state';
import navigationServices from '../../../../../routers/navigation-services';
import * as screenName from '../../../../../routers/screen-name';
import {IProgress} from '../../../../../types';

export const ProgressContent = () => {
  const [progressTopic, setProgressTopic] = useState<IProgress>({
    id: 0,
    topicName: '',
    fullName: '',
    userName: '',
    startDate: '',
    endDate: '',
    complete: 0,
    point: 0,
    description: '',
    title: '',
    status: true,
  });
  const user: any = useRecoilState(userInfo);
  const key: string = user[0].teacherID;
  console.log('keyyyyyy: ', key);
  const gotoFormReport = (itemRow: IProgress) => {
    navigationServices.navigate(screenName.ProgressTopicScreen, {
      valueReport: itemRow,
    });
  };
  const getProgressTopic = async () => {
    axios
      .get(URL_API + '/api/TopicData/GetByTeacherID', {
        params: {
          id: key,
        },
      })
      .then(res => {
        console.log('API RESPONSEEE', res.data);
        setProgressTopic(res.data);
      })
      .catch(error => {
        console.log('ERROR APIII: ', error);
      });
  };
  useEffect(() => {
    getProgressTopic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressTopic]);
  console.log('progressTopic:', progressTopic);
  const renderItem = (item: IProgress) => {
    return (
      <View style={styles.content}>
        <View style={styles.data_text}>
          <View style={styles.data}>
            <Text style={styles.data_name}>Ngày bắt đầu:</Text>
            <Text style={styles.data_des}>
              {item.startDate.substring(0, 10)}
            </Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.data_name}>Ngày kết thúc:</Text>
            <Text style={styles.data_des}>{item.endDate.substring(0, 10)}</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.data_name}>Tên đề tài:</Text>
            <Text style={styles.data_des}>{item.topicName}</Text>
          </View>
          <View style={styles.data_progress}>
            <ProgressBar
              style={styles.progress}
              progress={item.point / 100}
              color={Colors.red800}
            />
            <Text style={styles.data_des}>{item.point}%</Text>
          </View>
        </View>
        <View style={styles.btn_ctn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => gotoFormReport(item)}>
            <Text style={styles.btn_text}>Chi Tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={Object(progressTopic)}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  data: {
    flexDirection: 'row',
  },
  data_progress: {
    // flexDirection: 'row',
  },
  progress: {
    // flex: 1,
    width: '100%',
    borderRadius: 8,
    marginVertical: 16,
  },
  content: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 4,
  },
  data_text: {
    width: '75%',
  },
  data_name: {
    marginHorizontal: 8,
    marginVertical: 8,
    width: '40%',
  },
  data_des: {
    width: '80%',
    marginHorizontal: 8,
    marginVertical: 8,
  },
  btn_ctn: {
    marginTop: 16,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#D34848',
    borderRadius: 16,
  },
  btn_text: {
    color: '#fff',
  },
});

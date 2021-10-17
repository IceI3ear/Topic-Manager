import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import * as screenName from '../../../../../routers/screen-name';
import {URL_API} from '../../../../../helper/app-config';
import {IProgressTopic} from '../../../../../types';
import navigationServices from '../../../../../routers/navigation-services';

export const ListProgressTopic = (props: any) => {
  const {itemRowDetail}: any = props;
  const key = itemRowDetail.id;
  const [progressTopic, setProgressTopic] = useState<IProgressTopic>({
    description: '',
    endDate: '',
    endRegister: '',
    id: 1,
    linkFile: '',
    majorID: 1,
    majorName: '',
    point: 40,
    startDate: '',
    startRegister: '',
    studentID: '',
    studentName: '',
    teacherID: 1027,
    teacherName: '',
    topicName: '',
    complete: 0,
  });
  const gotoDetailForm = (itemRow: IProgressTopic) => {
    navigationServices.navigate(screenName.DetailFormContainer, {
      valueReport: itemRow,
    });
  };
  const getProgressTopic = () => {
    axios
      .get(URL_API + '/api/ProgressOfTopic/GetForTopicID', {
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
  console.log('progressTopicccc : ', progressTopic);

  const renderItem = (item: IProgressTopic) => {
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
          <View style={styles.data}>
            <Text style={styles.data_name}>Tiến độ:</Text>
            <Text style={styles.data_des}>{item.complete}%</Text>
          </View>
        </View>
        <View style={styles.btn_ctn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => gotoDetailForm(item)}>
            <Text style={styles.btn_text}>Xem</Text>
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

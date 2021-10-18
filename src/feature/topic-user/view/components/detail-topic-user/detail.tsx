import axios from 'axios';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import {useRecoilState} from 'recoil';
import {URL_API} from '../../../../../helper/app-config';
import {topicUser, userInfo} from '../../../../../recoil/recoil-state';

export const DetailTopicUser = () => {
  const topicUserProp = useRecoilState(topicUser);
  const Detail: any = Object(topicUserProp[0]);
  const isCheck: boolean = Boolean(topicUserProp[0]);
  const userProp = useRecoilState(userInfo);
  const user: any = Object(userProp[0]);
  const getProgressTopic = async () => {
    axios
      .post(URL_API + '/api/TopicData/CancelTopic', {
        topicID: Detail.id,
        userID: user.id,
      })
      .then(() => {
        Alert.alert(
          'Huỷ đề tài thành công',
          'Vui lòng kiểm tra trong mục cá nhân',
        );
      })
      .catch(error => {
        console.log('ERROR APIII: ', error);
      });
  };
  const hanldeConfirm = () => {
    getProgressTopic();
  };

  return isCheck ? (
    <View style={styles.container}>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>MÃ ĐỀ TÀI</Text>
        <Text style={styles.item_des}>{Detail.id}</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>TÊN ĐỀ TÀI</Text>
        <Text style={styles.item_des}>{Detail.topicName}</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>TIẾN ĐỘ</Text>
        <Text style={styles.item_des}>{Detail.compolete}0%</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>GVHD</Text>
        <Text style={styles.item_des}>{Detail.teacherName}</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>NGÀY BẮT ĐẦU</Text>
        <Text style={styles.item_des}>{Detail.startDate.substring(0, 10)}</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>NGÀY KẾT THÚC</Text>
        <Text style={styles.item_des}>{Detail.endDate.substring(0, 10)}</Text>
      </View>
      <View style={styles.btn_ctn}>
        <TouchableOpacity style={styles.btn} onPress={() => hanldeConfirm()}>
          <Text style={styles.btn_text}>Huỷ đề tài</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.item_null}>Bạn chưa có đề tài</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
  },
  img: {
    width: 120,
    height: 120,
    marginHorizontal: 140,
  },
  item_rows: {
    alignContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 32,
    marginVertical: 20,
  },
  item_name: {
    marginHorizontal: 16,
    width: '40%',
    fontWeight: 'bold',
  },
  item_null: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  item_des: {
    marginHorizontal: 8,
    width: '50%',
  },
  btn_ctn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  btn: {
    marginLeft: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#D34848',
    borderRadius: 16,
  },
  btn_text: {
    color: '#fff',
  },
});

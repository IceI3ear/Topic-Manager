import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import {topicUser} from '../../../../../recoil/recoil-state';

export const DetailTopicUser = () => {
  const topicUserProp = useRecoilState(topicUser);
  const Detail = Object(topicUserProp[0]);
  console.log(Detail);
  return (
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
        <Text style={styles.item_des}>123</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>GVHD</Text>
        <Text style={styles.item_des}>{Detail.teacher}</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>NGÀY BẮT ĐẦU</Text>
        <Text style={styles.item_des}>{Detail.startDate.substring(0, 10)}</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>NGÀY KẾT THÚC</Text>
        <Text style={styles.item_des}>{Detail.endDate.substring(0, 10)}</Text>
      </View>
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
  item_des: {
    marginHorizontal: 8,
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

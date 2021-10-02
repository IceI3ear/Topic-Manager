import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../../../res/colors';
import navigationServices from '../../../../../routers/navigation-services';
import * as screenName from '../../../../../routers/screen-name';

export const ListTopicComponent = () => {
  const data = [1, 2, 3, 4];

  const gotoTopicDetail = () => {
    navigationServices.navigate(screenName.TopicDetailScreen);
  };

  const renderItem = () => {
    return (
      <View style={styles.item_ctn}>
        <View style={styles.item_des_ctn}>
          <View style={styles.des_row}>
            <Text style={styles.des_label}>Ma DT</Text>
            <Text>DTCT001</Text>
          </View>
          <View style={styles.des_row}>
            <Text style={styles.des_label}>Ten de tai</Text>
            <Text style={styles.des_content}>
              Xây dựng ứng dụng tìm phòng trọ trên thiết bị di động{' '}
            </Text>
          </View>
          <View style={styles.des_row}>
            <Text style={styles.des_label}>GVHD</Text>
            <Text>ThS.Lê Bá Cường</Text>
          </View>
        </View>
        <View style={styles.btn_ctn}>
          <TouchableOpacity style={styles.btn} onPress={gotoTopicDetail}>
            <Text style={styles.btn_text}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item_ctn: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 4,
  },
  item_des_ctn: {
    flex: 1,
  },
  des_row: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  des_label: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.midnight,
    width: '30%',
  },
  des_content: {
    flex: 1,
  },
  btn_ctn: {
    alignItems: 'center',
    justifyContent: 'center',
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

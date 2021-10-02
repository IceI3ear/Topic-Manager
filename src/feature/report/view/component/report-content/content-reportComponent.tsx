import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import navigationServices from '../../../../../routers/navigation-services';
import * as screenName from '../../../../../routers/screen-name';

export const ReportContent = () => {
  const data = [1, 2, 3];

  const gotoFormReport = () => {
    navigationServices.navigate(screenName.FormReportScreen);
  };
  const renderItem = () => {
    return (
      <View style={styles.content}>
        <View style={styles.data_text}>
          <View style={styles.data}>
            <Text style={styles.data_name}>Ngày:</Text>
            <Text style={styles.data_des}>18/9/2021</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.data_name}>Nội dung:</Text>
            <Text style={styles.data_des}>Nộp đề cương</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.data_name}>Tiến độ:</Text>
            <Text style={styles.data_des}>20%</Text>
          </View>
        </View>
        <View style={styles.btn_ctn}>
          <TouchableOpacity style={styles.btn} onPress={gotoFormReport}>
            <Text style={styles.btn_text}>Nộp</Text>
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
  data: {
    flexDirection: 'row',
  },
  content: {
    marginHorizontal: 32,
    marginVertical: 16,
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    flexDirection: 'row',
    borderRadius: 12,
  },
  data_text: {
    width: '75%',
  },
  data_name: {
    marginHorizontal: 8,
    marginVertical: 8,
    width: '30%',
  },
  data_des: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  btn_ctn: {
    alignItems: 'center',
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

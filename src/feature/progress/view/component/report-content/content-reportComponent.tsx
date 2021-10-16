import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export const ProgressContent = () => {
  const data = [1, 2, 3];

  const renderItem = () => {
    return (
      <View style={styles.content}>
        <View style={styles.data_text}>
          <View style={styles.data}>
            <Text style={styles.data_name}>MÃ ĐT</Text>
            <Text style={styles.data_des}>123</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.data_name}>TÊN ĐỀ TÀI</Text>
            <Text style={styles.data_des}>456</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.data_name}>TÊN SV</Text>
            <Text style={styles.data_des}>789</Text>
          </View>
        </View>
        <View style={styles.btn_ctn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>Chi Tiết</Text>
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

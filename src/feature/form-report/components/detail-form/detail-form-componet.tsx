import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const DetailForm = () => {
  return (
    <View style={styles.item_ctn}>
      <View style={styles.item_input}>
        <Text style={styles.text}>Mã ĐỀ TÀI</Text>
        <Text style={styles.text_des}>CNTT1</Text>
      </View>
      <View style={styles.item_input}>
        <Text style={styles.text}>TÊN ĐỀ TÀI</Text>
        <Text style={styles.text_des}>
          Xây dựng ứng dụng điều khiển xe buýt
        </Text>
      </View>
      <View style={styles.item_input}>
        <Text style={styles.text}>GỬI BÁO CÁO</Text>
        <TextInput style={styles.textfieldGVHD} />
      </View>
      <View style={styles.item_input}>
        <Text style={styles.text}>GHI CHÚ</Text>
        <TextInput style={styles.textfield} />
      </View>
      <View style={styles.btn_ctn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>GỬI</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item_input: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    marginVertical: '7%',
  },
  text: {
    width: '26%',
  },
  textfield: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    width: '70%',
    height: '150%',
    borderRadius: 8,
    marginHorizontal: '10%',
  },
  textfieldGVHD: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    width: '70%',
    height: '100%',
    borderRadius: 8,
    marginHorizontal: '10%',
  },
  text_des: {
    width: '70%',
    height: '150%',
    marginHorizontal: '10%',
  },
  item_ctn: {
    marginTop: 30,
  },
  btn_ctn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  btn: {
    paddingHorizontal: 28,
    paddingVertical: 8,
    backgroundColor: '#D34848',
    borderRadius: 16,
  },
  btn_text: {
    color: '#fff',
  },
});

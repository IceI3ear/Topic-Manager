import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import navigationServices from '../../../../routers/navigation-services';
import * as screenName from '../../../../routers/screen-name';

const gotoLogin = () => {
  navigationServices.navigate(screenName.LoginScreen);
};

export const DetailUser = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../../image/logo.png')}
      />
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>MÃ SINH VIÊN</Text>
        <Text style={styles.item_des}>CT020120 </Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>TÊN SINH VIÊN</Text>
        <Text style={styles.item_des}>NGUYỄN NGỌC HẢI HIẾU</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>LỚP</Text>
        <Text style={styles.item_des}>CT2A </Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>KHOA</Text>
        <Text style={styles.item_des}>CÔNG NGHỆ THÔNG TIN</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>CHUYÊN NGÀNH</Text>
        <Text style={styles.item_des}>DI ĐỘNG</Text>
      </View>
      <View style={styles.btn_ctn}>
        <TouchableOpacity style={styles.btn} onPress={gotoLogin}>
          <Text style={styles.btn_text}>Đăng xuất</Text>
        </TouchableOpacity>
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

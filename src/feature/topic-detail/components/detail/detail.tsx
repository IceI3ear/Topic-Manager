import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import navigationServices from '../../../../routers/navigation-services';
import * as screenName from '../../../../routers/screen-name';

const gotoRegister = () => {
  navigationServices.navigate(screenName.RegisterScreen);
};
export const DetailTopic = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>Mã Đề Tài</Text>
        <Text style={styles.item_content}>DTC101</Text>
      </View>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>TÊN ĐỀ TÀI</Text>
        <Text style={styles.item_content}>
          Xây dựng ứng dụng tìm phòng trọ trên thiết bị di động
        </Text>
      </View>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>GVHD</Text>
        <Text style={styles.item_content}>ThS.Lê Bá Cường</Text>
      </View>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>LIÊN HỆ GVHD</Text>
        <Text style={styles.item_content}>DTC101</Text>
      </View>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>MÔ TẢ ĐT</Text>
        <Text style={styles.item_content}>
          Đề tài xây dựng ứng dụng tìm nhà trọ cho phép sinh viên sử dụng các
          ngôn ngữ khác nhau và áp dụng các kiến thức đã học cùng với kinh
          nghiệm thực tập để sinh viên xây dựng ứng dụng .
        </Text>
      </View>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>TÀI LIỆU THAM KHẢO</Text>
        <View>
          <Text style={styles.item_content}>
            Android Programming for Beginners. ...
          </Text>
          <Text style={styles.item_content}>
            Head First Android Development. ...
          </Text>
          <Text style={styles.item_content}>
            Beginning Android 4 Application Development. ...
          </Text>
        </View>
      </View>
      <View style={styles.btns}>
        <View style={styles.btn_ctn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>Đăng kí</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn_ctn}>
          <TouchableOpacity style={styles.btn} onPress={gotoRegister}>
            <Text style={styles.btn_text}>Huỷ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
  },
  item_row: {
    alignContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  item_text: {
    marginHorizontal: 16,
    width: '30%',
    fontWeight: 'bold',
  },
  item_content: {
    width: '60%',
  },
  btns: {
    flexDirection: 'row',
    marginHorizontal: 84,
    marginVertical: 16,
  },
  btn_ctn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  btn: {
    paddingHorizontal: 28,
    paddingVertical: 4,
    backgroundColor: '#D34848',
    borderRadius: 16,
    marginHorizontal: 16,
  },
  btn_text: {
    color: '#fff',
  },
});

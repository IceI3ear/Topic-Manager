import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import navigationServices from '../../../../../routers/navigation-services';
import * as screenName from '../../../../../routers/screen-name';

interface DetailUserProps {
  user?: any;
}

const gotoLogin = () => {
  navigationServices.navigate(screenName.LoginScreen);
};
const gotoDetailUserTopic = () => {
  navigationServices.navigate(screenName.TopicUserScreen);
};

export const DetailUser = (props: DetailUserProps) => {
  const {user} = props;
  const type: number = user.type;
  console.log('userDetail: ', user);
  return type === 1 ? (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../../../image/logo.png')}
      />
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>MÃ SINH VIÊN</Text>
        <Text style={styles.item_des}>{user.user} </Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>TÊN SINH VIÊN</Text>
        <Text style={styles.item_des}>{user.fullName}</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>LỚP</Text>
        <Text style={styles.item_des}>{user.className} </Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>KHOA</Text>
        <Text style={styles.item_des}>{user.majorName}</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>CHUYÊN NGÀNH</Text>
        <Text style={styles.item_des}>DI ĐỘNG</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name_detail}>ĐỀ TÀI CỦA TÔI</Text>
        <View style={styles.btn_detail_ctn}>
          <TouchableOpacity
            style={styles.btn_detail}
            onPress={gotoDetailUserTopic}>
            <Text style={styles.btn_text}>Chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btn_ctn}>
        <TouchableOpacity style={styles.btn} onPress={gotoLogin}>
          <Text style={styles.btn_text}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../../../image/logo.png')}
      />
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>MÃ GIẢNG VIÊN</Text>
        <Text style={styles.item_des}>{user.user} </Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>TÊN GIẢNG VIÊN</Text>
        <Text style={styles.item_des}>{user.fullName}</Text>
      </View>
      <View style={styles.item_rows}>
        <Text style={styles.item_name}>KHOA</Text>
        <Text style={styles.item_des}>{user.majorName}</Text>
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
  item_name_detail: {
    marginTop: 12,
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
    marginTop: 36,
  },
  btn_detail_ctn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  btn: {
    marginLeft: 4,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#D34848',
    borderRadius: 16,
  },
  btn_detail: {
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

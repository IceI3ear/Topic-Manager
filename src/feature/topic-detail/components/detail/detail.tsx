import axios from 'axios';
import React from 'react';
import {Text, View, StyleSheet, Alert, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRecoilState} from 'recoil';
import {URL_API} from '../../../../helper/app-config';
import {
  isCheckRegister,
  topicData,
  userInfo,
} from '../../../../recoil/recoil-state';
import navigationServices from '../../../../routers/navigation-services';
import * as screenName from '../../../../routers/screen-name';
import {ITopic} from '../../../../types';

interface IDetaiTopicProps {
  itemRowDetail: ITopic;
}

const gotoRegister = () => {
  navigationServices.navigate(screenName.RegisterScreen);
};

export const DetailTopic = (props: IDetaiTopicProps) => {
  const user: any = useRecoilState(userInfo);
  const type: number = user[0].type;
  const {itemRowDetail} = props;
  const isCheck = useRecoilState(isCheckRegister);
  const dataUser = useRecoilState(userInfo);
  const dataTopic = useRecoilState<ITopic>(topicData);
  const handleClickOk = () => {
    axios
      .post(URL_API + '/api/TopicData/RegisterTopic', {
        topicID: itemRowDetail.id,
        userID: Object(dataUser[0]).id,
      })
      .then(res => {
        console.log('Result: ', res.data);
        if (res.status === 200) {
        }
      })
      .catch(error => {
        console.log('ERROR API: ', error);
      });

    console.log('dataTopiccccccccccccc :', dataTopic[0]);
    console.log('Id DE tai:', typeof itemRowDetail.id);
    console.log('Id sinh vien', typeof Object(dataUser[0]).id);
    Alert.alert(
      'Đăng kí đề tài thành công',
      'Vui lòng kiểm tra trong mục cá nhân',
    );
  };

  const OpenURLButton = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>MÃ TIẾN ĐỘ</Text>
        <Text style={styles.item_content}>{itemRowDetail.id}</Text>
      </View>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>TÊN ĐỀ TÀI</Text>
        <Text style={styles.item_content}>{itemRowDetail.topicName}</Text>
      </View>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>GVHD</Text>
        <Text style={styles.item_content}>{itemRowDetail.teacherName}</Text>
      </View>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>LIÊN HỆ GVHD</Text>
        <Text style={styles.item_content}>024 3854 4244</Text>
      </View>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>MÔ TẢ ĐT</Text>
        <Text style={styles.item_content}>{itemRowDetail.description}</Text>
      </View>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>TÀI LIỆU THAM KHẢO</Text>
        <View style={styles.item_link}>
          <View>
            <Text
              style={styles.item_content_link}
              onPress={() => {
                OpenURLButton(itemRowDetail.linkFile);
              }}>
              {itemRowDetail.linkFile}
            </Text>
          </View>
        </View>
      </View>
      {type === 1 ? (
        <View style={styles.btns}>
          {!isCheck[0] ? (
            <View style={styles.btn_ctn}>
              <TouchableOpacity style={styles.btn} onPress={handleClickOk}>
                <Text style={styles.btn_text}>Đăng kí</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.btn_ctn}>
              <TouchableOpacity style={styles.btn_fail}>
                <Text style={styles.btn_text}>Đăng kí</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.btn_ctn}>
            <TouchableOpacity style={styles.btn} onPress={gotoRegister}>
              <Text style={styles.btn_text}>Huỷ</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
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
  item_content_link: {
    width: '60%',
    color: '#2980b9',
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
  item_link: {
    width: 350,
  },
  btn_fail: {
    paddingHorizontal: 28,
    paddingVertical: 4,
    backgroundColor: '#95a5a6',
    borderRadius: 16,
    marginHorizontal: 16,
  },
});

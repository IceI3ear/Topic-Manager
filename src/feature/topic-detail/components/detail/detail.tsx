import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRecoilState} from 'recoil';
import {isCheckRegister} from '../../../../recoil/recoil-state';
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
  const {itemRowDetail} = props;
  const isCheck = useRecoilState(isCheckRegister);
  return (
    <View style={styles.container}>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>Mã Đề Tài</Text>
        <Text style={styles.item_content}>{itemRowDetail.id}</Text>
      </View>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>TÊN ĐỀ TÀI</Text>
        <Text style={styles.item_content}>{itemRowDetail.topicName}</Text>
      </View>
      <View style={styles.item_row}>
        <Text style={styles.item_text}>GVHD</Text>
        <Text style={styles.item_content}>{itemRowDetail.teacher}</Text>
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
          <Text style={styles.item_content}>{itemRowDetail.linkFile}</Text>
        </View>
      </View>
      <View style={styles.btns}>
        {!isCheck[0] ? (
          <View style={styles.btn_ctn}>
            <TouchableOpacity style={styles.btn}>
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

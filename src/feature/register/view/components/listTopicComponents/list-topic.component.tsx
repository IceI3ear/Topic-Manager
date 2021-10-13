import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../../../res/colors';
import navigationServices from '../../../../../routers/navigation-services';
import * as screenName from '../../../../../routers/screen-name';
import {ITopic} from '../../../../../types';
import {useRecoilState} from 'recoil';
import {
  isCheckRegister,
  topicUser,
  userInfo,
} from '../../../../../recoil/recoil-state';

interface Props {
  dataTopic: ITopic;
}

export const ListTopicComponent = (props: Props) => {
  const {dataTopic} = props;
  const [isCheck, setIsCheck] = useRecoilState<boolean>(isCheckRegister);
  const [topicUserProp, setTopicUserProp] = useRecoilState(topicUser);
  const user: any = useRecoilState(userInfo);

  const gotoTopicDetail = (itemRow: ITopic) => {
    navigationServices.navigate(screenName.TopicDetailScreen, {value: itemRow});
  };
  const result: any = Object.values(dataTopic).find(
    ed => ed.studentID === user[0].id,
  );
  result ? setIsCheck(true) : setIsCheck(false);
  setTopicUserProp(result);
  console.log('topicUserProp: ', topicUserProp);
  console.log('isCheck: ', isCheck);

  const renderItem = (item: ITopic) => {
    return (
      <View style={styles.item_ctn}>
        <View style={styles.item_des_ctn}>
          <View style={styles.des_row}>
            <Text style={styles.des_label}>Ma de tai</Text>
            <Text>{item.id}</Text>
          </View>
          <View style={styles.des_row}>
            <Text style={styles.des_label}>Ten de tai</Text>
            <Text style={styles.des_content}>{item.topicName}</Text>
          </View>
          <View style={styles.des_row}>
            <Text style={styles.des_label}>GVHD</Text>
            <Text>{item.teacher}</Text>
          </View>
        </View>
        <View style={styles.btn_ctn}>
          {item.studentID === null ? (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => gotoTopicDetail(item)}>
              <Text style={styles.btn_text}>Chi Tiết</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btn_fail}>
              <Text style={styles.btn_text}>Chi Tiết</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={dataTopic} renderItem={({item}) => renderItem(item)} />
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
  btn_fail: {
    marginLeft: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#95a5a6',
    borderRadius: 16,
  },
  btn_text: {
    color: '#fff',
  },
});

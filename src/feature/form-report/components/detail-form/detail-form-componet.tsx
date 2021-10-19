import axios from 'axios';
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {URL_API} from '../../../../helper/app-config';

export const DetailForm = (props: any) => {
  const {itemRowDetail} = props;
  const [des, setDes] = useState<string>(itemRowDetail.description);
  const [link, setLink] = useState<string>(itemRowDetail.linkFile);
  const handelOnChangeDes = (enteredText: any) => {
    setDes(enteredText.nativeEvent.text);
  };
  const handelOnChangeLink = (enteredText: any) => {
    setLink(enteredText.nativeEvent.text);
  };

  const hanldeConfirm = () => {
    axios
      .post(URL_API + '/api/ProgressOfTopic/ChangeInfoProgressInStudent', {
        progressID: itemRowDetail.id,
        linkFile: link,
        description: des,
      })
      .then(res => {
        console.log('Result: ', res.data);
        if (res.status === 200) {
        }
        Alert.alert('Gửi thành công', 'Vui lòng chờ phê duyệt của giáo viên');
      })
      .catch(error => {
        console.log('ERROR API: ', error);
      });
  };
  console.log('itemRowDetailllll : ', itemRowDetail);

  return (
    <View style={styles.item_ctn}>
      <View style={styles.item_input}>
        <Text style={styles.text}>MÃ TIẾN ĐỘ</Text>
        <Text style={styles.text_des}>{itemRowDetail.id}</Text>
      </View>
      <View style={styles.item_input}>
        <Text style={styles.text}>TÊN ĐỀ TÀI</Text>
        <Text style={styles.text_des}>{itemRowDetail.topicName}</Text>
      </View>
      <View style={styles.item_input}>
        <Text style={styles.text}>NỘI DUNG</Text>
        <Text style={styles.text_des}>{itemRowDetail.title}</Text>
      </View>
      <View style={styles.item_input}>
        <Text style={styles.text}>MÔ TẢ</Text>
        <TextInput
          multiline={true}
          numberOfLines={2}
          style={styles.textfieldGVHD}
          onChange={handelOnChangeDes}
          value={des}
        />
      </View>
      <View style={styles.item_input}>
        <Text style={styles.text}>LINK FILE</Text>
        <TextInput
          multiline={true}
          numberOfLines={2}
          style={styles.textfield}
          onChange={handelOnChangeLink}
          value={link}
        />
      </View>
      <View style={styles.btn_ctn}>
        <TouchableOpacity style={styles.btn} onPress={hanldeConfirm}>
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
    marginVertical: '5%',
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

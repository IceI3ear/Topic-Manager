import {Picker} from '@react-native-community/picker';
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
import {useRecoilState} from 'recoil';
import {URL_API} from '../../../../../helper/app-config';
import {userInfo} from '../../../../../recoil/recoil-state';

export const AddFormComponent = () => {
  const user: any = useRecoilState(userInfo);
  const [selectedValue, setSelectedValue] = useState<any>(1);
  const [name, setName] = useState<string>('');
  const [des, setDes] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const userId = user[0].id;
  const type = user[0].type;
  const handelOnChangeName = (enteredText: any): void => {
    setName(enteredText.nativeEvent.text);
  };
  const handelOnChangeDes = (enteredText: any): void => {
    setDes(enteredText.nativeEvent.text);
  };
  const handelOnChangeLink = (enteredText: any): void => {
    setLink(enteredText.nativeEvent.text);
  };
  const sel = parseInt(selectedValue, 10);
  const param =
    type === 1
      ? {
          topicName: name,
          fileLink: link,
          description: des,
          studentID: userId,
          specialityID: sel,
        }
      : {
          topicName: name,
          fileLink: link,
          description: des,
          teacherID: parseInt(user[0].teacherID, 10),
          specialityID: sel,
        };
  console.log('abczyx', parseInt(user[0].teacherID, 10));
  const checkValid = (): boolean => {
    let countError = false;
    if (name.trim() === '' || des.trim() === '' || link.trim() === '') {
      countError = true;
    } else {
      countError = false;
    }

    return countError;
  };
  const hanldeConfirm = (): void => {
    if (checkValid() === false) {
      axios
        .post(URL_API + '/api/RegisterTopic/AddRegisterTopic', param)
        .then(res => {
          console.log('Result: ', res.data);
          if (res.status === 200) {
          }
          Alert.alert('Đề xuất đề tài thành công', 'Vui lòng chờ phê duyệt');
        })
        .catch(error => {
          console.log('ERROR API: ', error);
        });
      setName('');
      setDes('');
      setLink('');
    } else {
      Alert.alert('Đề xuất thất bại', 'Vui lòng nhập đủ dữ liệu');
    }
  };
  console.log('userrrrrrr', typeof type);

  return (
    <View style={styles.item_ctn}>
      <View style={styles.item_input}>
        <Text style={styles.text}>TÊN ĐỀ TÀI</Text>
        <TextInput
          style={styles.textfield}
          onChange={handelOnChangeName}
          value={name}
        />
      </View>
      <View style={styles.item_input}>
        <Text style={styles.text}>MÔ TẢ ĐT</Text>
        <TextInput
          style={styles.textfield}
          onChange={handelOnChangeDes}
          value={des}
        />
      </View>
      <View style={styles.item_input}>
        <Text style={styles.text}>Link File</Text>
        <TextInput
          style={styles.textfield}
          onChange={handelOnChangeLink}
          value={link}
        />
      </View>
      <View style={styles.item_input}>
        <Text style={styles.text}>Chọn Khoa</Text>
        <View style={styles.textfield_picker}>
          <Picker
            style={{height: 50, width: 300}}
            selectedValue={selectedValue}
            onValueChange={itemValue => setSelectedValue(itemValue)}>
            <Picker.Item label="Khoa CNTT" value="1" />
            <Picker.Item label="Khoa ATTT" value="2" />
            <Picker.Item label="Khoa DTVT" value="3" />
          </Picker>
        </View>
      </View>
      <View style={styles.btn_ctn}>
        <TouchableOpacity style={styles.btn} onPress={hanldeConfirm}>
          <Text style={styles.btn_text}>Đề xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item_input: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    marginVertical: '10%',
  },
  text: {
    width: '25%',
  },
  textfield: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    width: '70%',
    height: '150%',
    borderRadius: 8,
    marginHorizontal: '10%',
  },
  textfield_picker: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    width: '70%',
    height: '100%',
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
  item_ctn: {
    marginTop: 30,
  },
  picker_ctn: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
  },
  picker: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
  },
  btn_ctn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: '#D34848',
    borderRadius: 16,
  },
  btn_text: {
    color: '#fff',
  },
});

import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as screenName from '../../../../../routers/screen-name';
import navigationServices from '../../../../../routers/navigation-services';

const gotoAcpectTopic = () => {
  navigationServices.navigate(screenName.AcpectTopicScreen);
};
const gotoProgress = () => {
  navigationServices.navigate(screenName.ProgressScreen);
};

export const AddFormComponent = () => {
  return (
    <View style={styles.item_ctn}>
      <View style={styles.item_input}>
        <Text style={styles.text}>TÊN ĐỀ TÀI</Text>
        <TextInput style={styles.textfield} />
      </View>
      <View style={styles.item_input}>
        <Text style={styles.text}>GVHD</Text>
        <TextInput style={styles.textfieldGVHD} />
      </View>
      <View style={styles.item_input}>
        <Text style={styles.text}>MÔ TẢ ĐT</Text>
        <TextInput style={styles.textfield} />
      </View>
      <View style={styles.btn_ctn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>Đề xuất</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn_ctn}>
        <TouchableOpacity style={styles.btn} onPress={() => gotoAcpectTopic()}>
          <Text style={styles.btn_text}>Phe duyet de tai</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn_ctn}>
        <TouchableOpacity style={styles.btn} onPress={() => gotoProgress()}>
          <Text style={styles.btn_text}>Theo doi tien do</Text>
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

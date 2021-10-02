import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import {DimensionHelpers} from '../../../../../helper/dimension-helpers';
import {RefObject} from '../../../../../libraries/text-field/ref-props';
import {TextField} from '../../../../../libraries/text-field/text-field';
import colors from '../../../../../res/colors';
import svgs from '../../../../../res/svgs';

interface Props {
  gotoHome: any;
}

export const LoginFormComponent = (props: Props) => {
  const {gotoHome} = props;
  const refTxtUsername = React.useRef<RefObject>(null);
  const refTxtPass = React.useRef<RefObject>(null);

  const login = () => {
    // const email = refTxtUsername.current?.getValue();
    // const password = refTxtPass.current?.getValue();
    // const data = {
    //   userName: email,
    //   passWord: password,
    // };

    gotoHome();
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      style={{width: DimensionHelpers.width, paddingHorizontal: 32}}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <SvgXml width={180} height={180} xml={svgs.logo} />
          <Text style={styles.label_text}>Đăng nhập</Text>
          <TextField
            containerStyle={{marginTop: 32}}
            ref={refTxtUsername}
            lable={'Tên đăng nhập'}
            placeHolderText="Nhập tài khoản"
          />
          <TextField
            containerStyle={{marginTop: 32}}
            ref={refTxtPass}
            placeHolderText={'Nhập mật khẩu'}
            lable={'Mật khẩu'}
            passInput={true}
          />

          <TouchableOpacity style={{width: '100%'}} onPress={login}>
            <LinearGradient
              colors={[colors.orange, colors.yellow]}
              style={styles.signIn2}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.textSign}> Đăng nhập </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.statusBar,
  },

  label_text: {
    fontSize: 28,
    color: colors.midnight,
    marginVertical: 30,
    fontWeight: 'bold',
  },

  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: colors.midnight,
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#E6E8EB',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 50,
    // backgroundColor: '#00DAD4',
    backgroundColor: '#ff7d05',
  },
  signIn2: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 50,
    // backgroundColor: '#00DAD4',
    backgroundColor: '#ff7d05',
  },
  textSign: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  logo: {
    width: 120,
    height: 120,
  },
  language_ctn: {
    marginTop: 50,
    flexDirection: 'row',
  },
  language_btn: {
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: '#4080FF',
    marginHorizontal: 10,
  },
});

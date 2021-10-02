import * as React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import colors from '../../res/colors';
import svgs from '../../res/svgs';

export const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heaher}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          }}
        />
        <View style={styles.name_container}>
          <Text style={styles.hello}> Xin chào !</Text>
          <Text style={styles.uerName}>Nguyen Ngoc Minh</Text>
        </View>
        <View style={styles.notification_btn}>
          <SvgXml xml={svgs.common.bell_icon} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_id}>ID: VN123456</Text>
        <View style={styles.balance_ctn}>
          <Text style={styles.balance_text}>Balance: 100</Text>
          <SvgXml height={20} width={20} xml={svgs.common.coin_icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    padding: 16,
    paddingTop: 32,
  },
  heaher: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 8,
  },
  name_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 16,
    flex: 1,
  },
  hello: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },

  notification_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.highPrimaryColor,
    width: 40,
    height: 40,
    borderRadius: 40,
  },

  uerName: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingTop: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text_id: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  balance_ctn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance_text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 8,
  },
});

import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import svgs from '../../../../../res/svgs';
export const SearchTopicComponent = () => {
  return (
    <View style={styles.input_ctn}>
      <TextInput style={styles.input} />
      <SvgXml style={styles.icon} height={20} width={20} xml={svgs.search} />
    </View>
  );
};
const styles = StyleSheet.create({
  input_ctn: {
    backgroundColor: 'rgba(196, 196, 196, 0.8)',
    borderRadius: 16,
    width: '75%',
    height: 35,
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: 48,
    marginVertical: 8,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 8,
    marginTop: 8,
  },
});

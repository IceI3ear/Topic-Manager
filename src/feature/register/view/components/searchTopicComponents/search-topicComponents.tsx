import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
export const SearchTopicComponent = () => {
  return (
    <View style={styles.input}>
      <TextInput />
      {/* Thieu icon */}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(196, 196, 196, 0.8)',
    borderRadius: 16,
    width: '75%',
    height: 35,
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: 48,
    marginVertical: 8,
  },
});

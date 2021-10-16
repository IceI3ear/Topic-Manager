import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AcpectTopic} from './components/acpect-topic/acpect-topic';

export const AcpectTopicContainer = () => {
  return (
    <View style={styles.container}>
      <AcpectTopic />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProgressContent} from './component/report-content/content-reportComponent';

export const ProgressContainer = () => {
  return (
    <View style={styles.container}>
      <ProgressContent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

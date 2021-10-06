import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {DetailUser} from '../components/detail/detail';

export const UserContainer = () => {
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="THÔNG TIN SINH VIêN" onback={true} />
      <DetailUser />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

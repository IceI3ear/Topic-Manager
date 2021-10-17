import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitleComponent} from '../../../libraries/header_title/header-title.component';
import {AddFormComponent} from './components/addform/add.form.component';

export const ProposeContainer = () => {
  return (
    <View style={styles.container}>
      <HeaderTitleComponent title="ĐỀ XUẤT ĐỀ TÀI" onback={false} />
      <AddFormComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

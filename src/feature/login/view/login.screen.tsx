import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {LoginFormComponent} from './components/login-form/login-form.component';
import * as screenName from '../../../routers/screen-name';
import navigationService from '../../../routers/navigation-services';
import {DimensionHelpers} from '../../../helper/dimension-helpers';

export const LoginContainer = () => {
  const gotoHome = async () => {
    navigationService.navigate(screenName.BottomNavigationTab);
  };

  return (
    <View style={styles.container}>
      <LoginFormComponent gotoHome={gotoHome} />
    </View>
  );
};

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  content: {flex: 1, marginTop: DimensionHelpers.height * 0.1},
  version: {paddingLeft: 15},
});

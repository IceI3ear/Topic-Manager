import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import colors from '../../res/colors';
import svgs from '../../res/svgs';
import navigationServices from '../../routers/navigation-services';
import {HeaderTitleProps} from './header-title.props';

export const HeaderTitleComponent = (props: HeaderTitleProps) => {
  const {title, onback} = props;

  const goBack = () => {
    navigationServices.goBack();
  };

  return (
    <View style={styles.container}>
      {onback ? (
        <SvgXml height={20} width={20} xml={svgs.ic_back} onPress={goBack} />
      ) : null}

      <Text style={styles.title_text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.orange,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title_text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
  },
});

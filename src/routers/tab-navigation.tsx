import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import React from 'react';
import {RegisterScreen} from '../feature/register';
import svgs from '../res/svgs';
import * as screenName from './screen-name';
import {SvgXml} from 'react-native-svg';
import colors from '../res/colors';
import {ProposeScreen} from '../feature/propose';
import {ReportScreen} from '../feature/report';

export const BottomNavigationTab = createMaterialBottomTabNavigator(
  {
    [screenName.RegisterScreen]: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        title: 'Đăng ký',
        tabBarIcon: ({focused}) => {
          const xml = focused
            ? svgs.tab_navigation.home.select
            : svgs.tab_navigation.home.unselect;
          return <SvgXml height={20} width={20} xml={xml} />;
        },
      }),
    },
    [screenName.ProposeScreen]: {
      screen: ProposeScreen,
      navigationOptions: () => ({
        title: 'Đề xuất',
        tabBarIcon: ({focused}) => {
          const xml = focused
            ? svgs.tab_navigation.setting.select
            : svgs.tab_navigation.setting.unselect;
          return <SvgXml height={20} width={20} xml={xml} />;
        },
      }),
    },
    [screenName.ReportScreen]: {
      screen: ReportScreen,
      navigationOptions: () => ({
        title: 'Báo cáo',
        tabBarIcon: ({focused}) => {
          const xml = focused
            ? svgs.tab_navigation.profile.select
            : svgs.tab_navigation.profile.unselect;
          return <SvgXml height={20} width={20} xml={xml} />;
        },
      }),
    },
  },
  {
    initialRouteName: screenName.RegisterScreen,
    activeColor: colors.focus,
    inactiveColor: colors.unfocus,
    activeColorDark: colors.focus,
    barStyleLight: {
      backgroundColor: '#fff',
    },
    barStyleDark: {
      backgroundColor: '#fff',
    },
  },
);

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import React from 'react';
import {RegisterScreen} from '../feature/register';
import svgs from '../res/svgs';
import * as screenName from './screen-name';
import {SvgXml} from 'react-native-svg';
import colors from '../res/colors';
import {ProposeScreen} from '../feature/propose';
import {ReportScreen} from '../feature/report';
import {UserScreen} from '../feature/user';

export const BottomNavigationTab = createMaterialBottomTabNavigator(
  {
    [screenName.RegisterScreen]: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        title: 'Đăng ký',
        tabBarIcon: ({focused}) => {
          const xml = focused
            ? svgs.tab_navigation.register.select
            : svgs.tab_navigation.register.unselect;
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
            ? svgs.tab_navigation.propose.select
            : svgs.tab_navigation.propose.unselect;
          return <SvgXml height={20} width={20} xml={xml} />;
        },
      }),
    },
    [screenName.ReportScreen]: {
      screen: ReportScreen,
      navigationOptions: () => ({
        title: 'Tiến độ',
        tabBarIcon: ({focused}) => {
          const xml = focused
            ? svgs.tab_navigation.report.select
            : svgs.tab_navigation.report.unselect;
          return <SvgXml height={20} width={20} xml={xml} />;
        },
      }),
    },
    [screenName.UserScreen]: {
      screen: UserScreen,
      navigationOptions: () => ({
        title: 'Cá nhân',
        tabBarIcon: ({focused}) => {
          const xml = focused
            ? svgs.tab_navigation.user.select
            : svgs.tab_navigation.user.unselect;
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

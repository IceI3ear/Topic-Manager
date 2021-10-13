import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {LoginScreen} from '../feature/login';
import * as screenName from './screen-name';
import {RegisterScreen} from '../feature/register';
import {BottomNavigationTab} from './tab-navigation';
import {ProposeScreen} from '../feature/propose';
import {TopicDetailScreen} from '../feature/topic-detail';
import {FormReportScreen} from '../feature/form-report';
import {UserScreen} from '../feature/user';
import {TopicUserScreen} from '../feature/topic-user';

const mainStack = createStackNavigator(
  {
    [screenName.LoginScreen]: LoginScreen,
    [screenName.RegisterScreen]: RegisterScreen,
    [screenName.BottomNavigationTab]: BottomNavigationTab,
    [screenName.ProposeScreen]: ProposeScreen,
    [screenName.TopicDetailScreen]: TopicDetailScreen,
    [screenName.FormReportScreen]: FormReportScreen,
    [screenName.UserScreen]: UserScreen,
    [screenName.TopicUserScreen]: TopicUserScreen,
  },
  {initialRouteName: screenName.LoginScreen, mode: 'card', headerMode: 'none'},
);

const MainNavigation = createAppContainer(mainStack);
export default MainNavigation;

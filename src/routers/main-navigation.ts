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
import {AcpectTopicScreen} from '../feature/acpect-topic/view';
import {ProgressScreen} from '../feature/progress';
import {ProgressTopicScreen} from '../feature/progress-topic';
import {DetailFormContainer} from '../feature/progress-topic/view/components/detail-form/detail-form';

const mainStack = createStackNavigator(
  {
    //màn đĂng nhập
    [screenName.LoginScreen]: LoginScreen,
    // đĂng kí đề tài
    [screenName.RegisterScreen]: RegisterScreen,
    // chân màn - tab menu
    [screenName.BottomNavigationTab]: BottomNavigationTab,
    // đỀ xuất đề tài
    [screenName.ProposeScreen]: ProposeScreen,
    // chi tiết đỀ tài
    [screenName.TopicDetailScreen]: TopicDetailScreen,
    // form báo cáo
    [screenName.FormReportScreen]: FormReportScreen,
    // cá nhân
    [screenName.UserScreen]: UserScreen,
    // đề tài cá nhan
    [screenName.TopicUserScreen]: TopicUserScreen,
    // phê duyệt đề tài
    [screenName.AcpectTopicScreen]: AcpectTopicScreen,
    [screenName.ProgressScreen]: ProgressScreen,
    // tiến độ
    [screenName.ProgressTopicScreen]: ProgressTopicScreen,
    // form chi tiết
    [screenName.DetailFormContainer]: DetailFormContainer,
  },
  {initialRouteName: screenName.LoginScreen, mode: 'card', headerMode: 'none'},
);

const MainNavigation = createAppContainer(mainStack);
export default MainNavigation;

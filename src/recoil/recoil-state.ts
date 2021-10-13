import {atom} from 'recoil';

const USER_INFO = 'USER_INFO';
const userInfo = atom({
  key: USER_INFO,
  default: undefined,
});
export {userInfo};

const IS_CHECK_REGISTER = 'IS_CHECK_REGISTER';
const isCheckRegister = atom({
  key: IS_CHECK_REGISTER,
  default: true,
});
export {isCheckRegister};

const TOPIC_USER = 'TOPIC_USER';
const topicUser = atom({
  key: TOPIC_USER,
  default: undefined,
});
export {topicUser};

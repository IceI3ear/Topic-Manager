import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

import {SUCCESS} from './status';

const instance = axios.create({
  baseURL: 'http://192.168.0.108:5000',
  // baseURL: url,
  timeout: 20 * 1000,
});

instance.interceptors.request.use(_config => requestHandler(_config));

const requestHandler = (request: AxiosRequestConfig) => {
  // if (__DEV__) {
  console.log(
    `Request API - ${request.method?.toUpperCase()}: ${request.baseURL}${
      request.url
    }`,
    request.params,
    request.data,
  );
  // }

  return request;
};

instance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error),
);

const errorHandler = (error: any) => {
  // if (__DEV__) {
  console.log(error);
  // }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({...error});
};

const successHandler = (response: AxiosResponse) => {
  // if (__DEV__) {
  console.log(`Response API: ${response.config.url}`, response.data);
  // }
  return response.data;
};

async function fetch(
  url: string,
  params?: any,
  isAuth?: boolean,
  isRaw?: boolean,
) {
  let headers = null;
  if (isAuth) {
    headers = await createHeader();
  }

  return !isRaw
    ? instance
        .get(url, {params, headers})
        .then(res => checkToken(res))
        .catch(error => InvalidToken(error))
    : axios
        .create({
          // baseURL: `${env.REACT_APP_IP_ADDRESS_API}:${env.REACT_APP_IP_ADDRESS_PORT}`,
          timeout: 20 * 1000,
        })
        .get(url, {params, headers})
        .then(res => {
          console.log('test_fetch_raw_success: ', res);
          return res;
        })
        .catch(error => {
          console.log('test_fetch_raw_fail: ', error);
        });
}

async function post(
  url: string,
  data?: any,
  isAuth?: boolean,
  isRaw?: boolean,
) {
  let headers: any = null;
  if (isAuth) {
    headers = await createHeader();
  }
  return !isRaw
    ? instance
        .post(url, {...data}, {headers})
        .then(res => checkToken(res))
        .catch(error => InvalidToken(error))
    : axios
        .create({
          // baseURL: `${env.REACT_APP_IP_ADDRESS_API}:${env.REACT_APP_IP_ADDRESS_PORT}`,
          timeout: 100 * 1000,
        })
        .post(url, {data, headers})
        .then(res => {
          console.log('test_post_raw_success: ', res);
          return res;
        })
        .catch(error => {
          console.log('test_post_raw_fail: ', url, '__', data, '__', headers);
          console.log('test_post_raw_fail_1: ', error);
        });
}

async function postFile(
  url: string,
  data?: any,
  isAuth?: boolean,
  onUploadProgress?: any,
) {
  let optionAxios: any;
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    'X-Tenant-ID': getRealms(),
  };
  if (onUploadProgress) {
    optionAxios = {
      headers: headers,
      onUploadProgress: onUploadProgress,
    };
  } else {
    optionAxios = {
      headers: headers,
    };
  }
  var response: any;
  try {
    response = await instance.post(url, data, optionAxios);
  } catch (error) {
    response = error;
  }
  return response;
  // var response=await instance
  //   .post(url, data, optionAxios)
  //   .then((res) => checkToken(res))
  //   .catch((error) => error);
  //   return
}
//TEST
async function postTokenTest(url: string, body: any, isAuth?: boolean) {
  let headers = null;
  const data = {};

  if (isAuth) {
    headers = {Authorization: `Bearer ${body ? body.token : ''}`};
  }
  return instance
    .post(url, {...data}, {headers})
    .then(res => checkToken(res))
    .catch(error => error);
}

async function postTokenFormDataTest(url: string, body: any, isAuth?: boolean) {
  let headers = null;
  const data: any = new FormData();
  const frm: any = body.frm;
  Object.keys(frm).forEach(key => {
    if (frm[key] instanceof Array) {
      frm[key].forEach((value: string) => {
        data.append(`${key}[]`, value);
      });
    } else {
      data.append(key, frm[key]);
    }
  });

  if (isAuth) {
    headers = {Authorization: `Bearer ${body ? body.token : ''}`};
  }

  return instance
    .post(url, {...data}, {headers})
    .then(res => checkToken(res))
    .catch(error => error);
}

//TEST

async function deletes(url: string, data?: any, isAuth?: boolean) {
  let headers = null;
  if (isAuth) {
    headers = await createHeader();
  }

  return instance
    .delete(url, {data: {...data}, headers: {...headers}})
    .then(res => checkToken(res))
    .catch(error => error);
}
async function put(url: string, data?: any, isAuth?: boolean) {
  let headers = null;
  if (isAuth) {
    headers = await createHeader();
  }

  return instance
    .put(url, {...data}, {headers})
    .then(res => checkToken(res))
    .catch(error => error);
}

async function postFormData(url: string, body: any, isAuth: boolean = false) {
  const data: any = new FormData();
  Object.keys(body).forEach(key => {
    if (body[key] instanceof Array) {
      body[key].forEach((value: string) => {
        data.append(`${key}[]`, value);
      });
    } else {
      data.append(key, body[key]);
    }
  });
  let headers = null;
  if (isAuth) {
    headers = await createHeader();
  }
  return instance
    .post(url, data, {headers})
    .then(res => checkToken(res))
    .catch(error => error);
}
async function postForm(url: string, data: any, isAuth?: boolean) {
  let headers = null;
  if (isAuth) {
    headers = await createHeader();
  }

  return instance
    .post(url, data, {headers})
    .then(res => checkToken(res))
    .catch(error => error);
}

// TODO
// Get Token
async function createHeader(): Promise<object> {
  let access_token = localStorage.getItem('access_token');
  if (APP_CONFIGS.LOGIN_SSO === 'true') {
    if (access_token) {
      if (isExpiredToken(access_token)) {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          const response = await getTokenByRefreshToken(refreshToken);
          if (response && response.status === SUCCESS) {
            access_token = response.data.access_token;
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
          } else {
            redirectSSO();
            return {};
          }
        } else {
          redirectSSO();
          return {};
        }
      }
    }
  }

  return {
    Authorization: `Bearer ${access_token}`,
    'X-Tenant-ID': getRealms(),
  };
  return {};
}

export async function removeUser(): Promise<void> {
  // await AsyncStorageHelpers.remove(StorageKey.USER_INFO);
  // return Promise.resolve();
}

// TODO
export async function checkToken(res: any) {
  if (res) {
    console.log(res);
    // return new Promise<Object>((resolve, reject) => {
    //   Alert.alert(
    //     translate('notify'),
    //     translate('tokenInvalid'),
    //     [{ text: translate('common.yes'), onPress: () => {} }],
    //     { cancelable: false }
    //   );
    // });
  } else return res;
  return res;
}

export async function InvalidToken(error: any) {
  if (APP_CONFIGS.LOGIN_SSO === 'true') {
    console.log(error);
    if (error && error.response?.status === 401) {
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        const response = await getTokenByRefreshToken(refreshToken);
        if (response && response.status === SUCCESS) {
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
          redirectApp();
        } else {
          redirectSSO();
        }
      } else {
        redirectSSO();
      }
      return error;
    } else {
      return error;
    }
  }
}

//Get token by refresh token if token expired: created by tuda
const getTokenByRefreshToken = async (refreshToken: string) => {
  let data = new URLSearchParams();
  data.append('refresh_token', refreshToken);
  data.append('client_id', 'web');
  data.append('grant_type', 'refresh_token');

  try {
    const response = await axios({
      method: 'POST',
      url: getTokenUrl(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
      timeout: 30000,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

//Process request
function processRequestRespository(
  reqPromise: Promise<any>,
  onSuccess?: (data?: any) => void,
  onfail?: (ex?: any, msg?: string) => void,
  isShowAlert: boolean = true,
  isShowLoading: boolean = true,
) {
  // isShowLoading && showLoading();
  reqPromise
    .then(data => {
      // hideLoading();
      switch (data?.status) {
        case SUCCESS:
          // isShowAlert && showAlert(TYPE.SUCCESS, translate('warning.success'), data.message);
          onSuccess && onSuccess(data.data);
          break;
        default:
          onfail && onfail(data);
          break;
      }
      //TODO: update sso
      onSuccess && onSuccess(data.data);
    })
    .catch(e => {
      // hideLoading();
      console.log('tes_err_data_ex: ', e);

      // isShowAlert && showAlert(TYPE.WARN, translate('warning.warning'), e.message);
      onfail && onfail(e);
    });
}

function processRequestTrustRespository(
  reqPromise: Promise<any>,
  onSuccess?: (data?: any) => void,
  onfail?: (ex?: any, msg?: string) => void,
  isShowAlert: boolean = true,
  isShowLoading: boolean = true,
) {
  // isShowLoading && showLoading();
  reqPromise
    .then(data => {
      // hideLoading();
      switch (data?.status) {
        case SUCCESS:
          // isShowAlert && showAlert(TYPE.SUCCESS, translate('warning.success'), data.message);
          onSuccess && onSuccess(data);
          break;
        default:
          onfail && onfail(data);
          break;
      }
      //TODO: update sso
      onSuccess && onSuccess(data);
    })
    .catch(e => {
      // hideLoading();
      console.log('tes_err_data_ex: ', e);

      // isShowAlert && showAlert(TYPE.WARN, translate('warning.warning'), e.message);
      onfail && onfail(e);
    });
}

export {
  fetch,
  post,
  postFile,
  put,
  postFormData,
  deletes,
  postForm,
  postTokenTest,
  postTokenFormDataTest,
  processRequestRespository,
  processRequestTrustRespository,
};

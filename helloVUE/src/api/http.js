import axios from 'axios';

// import store from '../store';
// import router from '../router';
// import loginLocal from '@/common/js/login';
// import smallLoading from '@/components/lib/smallLoading';
import qs from 'qs';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// console.log('---axios init--')
axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  config => {
    // console.log(qs.stringify(config.data))

    if (config.method == 'post') {
      //console.log(config.headers.yi23ImgLoad)
      // formData 格式判断处理
      if (config.headers.yi23ImgLoad) {
      } else {
        config.data = qs.stringify(config.data);
      }
    } else {
      if (!config.headers.hideLoading) {
        // smallLoading.open();
      }
    }
    // let authorization = loginLocal.getToken();
    // if (authorization) {
    //   config.headers.authorization = authorization;
    //   store.commit('getToken', authorization);
    // }
    // if (store.state.login && store.state.login.authorization) {
    //   config.headers.authorization = store.state.login.authorization;
    // }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    // smallLoading.close();
    console.log('response');
    console.log(response);
    if (response) {
    }
    return response;
  },
  error => {
    // smallLoading.close();
    console.log(error);
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // store.commit('loginOut');
          // store.commit('bigLoading', false);
          console.log('401');
        // router.replace({
        //   path: '/User/loginPage',
        //   query: {
        //     redirect: router.currentRoute.fullPath
        //   }
        // });
      }
    }
    return Promise.reject(error.response);
  }
);

export default axios;

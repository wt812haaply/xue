import axios from 'axios';
import config from './config';




export function baiduApi() {
  console.log(config.baiduApi)
  return axios.get(config.baiduApi).then((res) => {
    return Promise.resolve(res.data)
  })
}


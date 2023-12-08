import axios from 'axios'

const instance = axios.create({
    // baseURL: '',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });


// 添加请求拦截器
instance.interceptors.request.use(function (config) {

    return config;
  }, function (error) {

    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
 
    //在这里修改一下,将response改为response.data,方便提取响应数据
    return response.data;
  }, function (error) {
  
    return Promise.reject(error);
  });
console.log(instance,'axios实例')
  export default instance
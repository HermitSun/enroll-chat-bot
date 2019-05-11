import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'production'
  ? 'http://101.132.35.81:3242' // 此处应换成甲方提供的服务器IP
  : 'http://localhost:3242'

// 过滤器，用于添加token或拦截一些请求
axios.interceptors.request.use(
  (config) => {
    return config
    // if (config.url.startsWith('/email')) {
    //     return config;
    // } else {
    //     let stuToken = getStudentToken();
    //     let adminToken = getAdminToken();
    //     if (stuToken) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //         config.headers.Authorization = `Bearer ${stuToken}`;
    //     } else if (adminToken) {
    //         config.headers.Authorization = `Bearer ${adminToken}`;
    //     }
    //     return config;
    // }
  },
  (err) => {
    return Promise.reject(err)
  })
